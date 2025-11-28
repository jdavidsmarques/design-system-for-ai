# Sistema de Preview de Templates

## Visão Geral

O sistema de preview permite visualizar templates/componentes isoladamente no browser através de query parameters.

## Estrutura de Pastas

```
src/
├── templates/              # Templates isolados para preview
│   ├── detail/
│   │   ├── detail.tsx      # Componente do template
│   │   ├── detail.scss     # Estilos do template
│   │   └── index.ts        # Export do template
│   └── list/
│       └── ...
│
└── preview/
    ├── main.tsx            # Sistema de roteamento de preview
    ├── app.tsx             # Aplicação principal
    └── PreviewIndex.tsx    # Lista de todos os previews
```

## Como Usar

### 1. Acessar um Template Específico

Para visualizar um template, use a query parameter `?preview=`:

```
http://localhost:5174/?preview=detail/detail
```

O caminho do preview deve corresponder ao caminho do ficheiro relativo a `src/templates/`, sem a extensão `.tsx`.

**Exemplos:**
- `/?preview=detail/detail` → `src/templates/detail/detail.tsx`
- `/?preview=list/list` → `src/templates/list/list.tsx`
- `/?preview=components/card` → `src/templates/components/card.tsx`

### 2. Ver Lista de Todos os Previews

```
http://localhost:5174/?preview=list
```

Ou acesse:
```
http://localhost:5174/preview/pages
```

### 3. Aplicação Principal (sem preview)

Aceda sem query parameters:
```
http://localhost:5174/
```

## Criar um Novo Template

### Passo 1: Criar a Estrutura

```bash
mkdir -p src/templates/meu-template
touch src/templates/meu-template/meu-template.tsx
touch src/templates/meu-template/meu-template.scss
touch src/templates/meu-template/index.ts
```

### Passo 2: Criar o Componente

**`src/templates/meu-template/meu-template.tsx`**
```tsx
import React from 'react';
import './meu-template.scss';

export default function MeuTemplate() {
  return (
    <div className="meu-template">
      <h1>Meu Template</h1>
      <p>Conteúdo do template...</p>
    </div>
  );
}
```

### Passo 3: Criar os Estilos

**`src/templates/meu-template/meu-template.scss`**
```scss
.meu-template {
  padding: var(--space-xl);

  h1 {
    color: var(--color-primary);
    font-size: var(--font-size-h1);
  }
}
```

### Passo 4: Exportar o Componente

**`src/templates/meu-template/index.ts`**
```typescript
export { default } from './meu-template';
```

### Passo 5: Visualizar

Acesse:
```
http://localhost:5174/?preview=meu-template/meu-template
```

## Como Funciona

### Sistema de Glob

O Vite usa `import.meta.glob()` para importar dinamicamente todos os ficheiros `.tsx` na pasta `templates`:

```typescript
const templateModules = import.meta.glob('../templates/**/!(*.test|*.spec).tsx')
```

Isto cria um objeto com todas as rotas:
```javascript
{
  '../templates/detail/detail.tsx': () => import('../templates/detail/detail.tsx'),
  '../templates/list/list.tsx': () => import('../templates/list/list.tsx'),
  // ...
}
```

### Matching de Rotas

Quando você acessa `?preview=detail/detail`:

1. O sistema extrai o valor `detail/detail`
2. Procura por uma key que corresponda: `../templates/detail/detail.tsx`
3. Carrega dinamicamente o módulo
4. Renderiza o componente default

### Error Handling

Se o preview não for encontrado, o sistema mostra:
- Nome do preview solicitado
- Lista de todos os templates disponíveis (com links)
- Link para a lista completa

## Convenções

### Nomenclatura

✅ **BOM:**
- Pastas: `kebab-case` (e.g., `detail`, `product-list`)
- Ficheiros: `kebab-case.tsx` (e.g., `detail.tsx`, `product-card.tsx`)
- Componentes: `PascalCase` (e.g., `Detail`, `ProductCard`)

❌ **EVITAR:**
- camelCase para pastas/ficheiros
- snake_case
- PascalCase para pastas/ficheiros

### Estrutura de Template

Cada template deve ter:
```
template-name/
├── template-name.tsx    # Componente (default export)
├── template-name.scss   # Estilos (opcional)
└── index.ts             # Re-export do componente
```

### Export Default

**IMPORTANTE:** Sempre use `export default` no componente principal:

```tsx
// ✅ CORRETO
export default function MeuTemplate() { ... }

// ❌ INCORRETO
export function MeuTemplate() { ... }
```

## Debugging

### Preview não aparece?

1. **Verifique o caminho:**
   - Acesse `/?preview=error` para ver lista de templates disponíveis
   - Compare com o caminho que está usando

2. **Verifique o console do browser:**
   - Erros de import aparecerão no console
   - Verifique se há erros de sintaxe no componente

3. **Verifique o export:**
   - O componente tem `export default`?
   - O `index.ts` está exportando corretamente?

4. **Verifique extensão do ficheiro:**
   - Apenas `.tsx` é suportado
   - Ficheiros `.test.tsx` e `.spec.tsx` são ignorados

## Exemplos de URLs

```
# Ver template detail
http://localhost:5174/?preview=detail/detail

# Ver template list
http://localhost:5174/?preview=list/list

# Ver todos os templates disponíveis
http://localhost:5174/?preview=list

# Voltar para app principal
http://localhost:5174/
```

## Integração com a Library

Os templates podem usar componentes da library:

```tsx
import { LayoutBase } from '../../lib';

export default function MeuTemplate() {
  return (
    <LayoutBase logoText="Preview">
      <h1>Conteúdo do Template</h1>
    </LayoutBase>
  );
}
```

## Hot Module Replacement (HMR)

O sistema suporta HMR:
- Alterações nos templates são atualizadas automaticamente
- Não precisa recarregar a página manualmente
- Estado do componente é preservado quando possível

## Boas Práticas

1. **Mantenha templates simples:** Templates devem demonstrar funcionalidades específicas
2. **Use design tokens:** Sempre use CSS custom properties
3. **Documente o template:** Adicione comentários explicando o propósito
4. **Teste responsividade:** Verifique em diferentes tamanhos de tela
5. **Acessibilidade:** Garanta que templates são acessíveis

## Limitações

- Apenas ficheiros `.tsx` são suportados
- O componente deve ter um `default export`
- Ficheiros de teste (`.test.tsx`, `.spec.tsx`) são ignorados
- O caminho deve ser relativo a `src/templates/`

## Troubleshooting

### "Preview not found" mas o ficheiro existe

**Causa:** O caminho pode estar incorreto

**Solução:**
1. Acesse `/?preview=error` para ver lista completa
2. Copie o caminho exato da lista
3. Cole na URL

### Componente carrega mas está em branco

**Causa:** Componente não tem return ou está retornando null

**Solução:**
1. Verifique se o componente tem um return válido
2. Verifique o console do browser para erros
3. Adicione conteúdo ao componente

### Estilos não aparecem

**Causa:** Import do SCSS pode estar incorreto

**Solução:**
1. Verifique se o import está correto: `import './template.scss'`
2. Verifique se o ficheiro SCSS existe
3. Verifique se as classes CSS estão aplicadas corretamente

---

**Sistema de Preview ativo e funcional!** 🎉

Para começar, crie um novo template em `src/templates/` e acesse-o via `?preview=`.
