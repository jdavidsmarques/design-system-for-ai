# Layout Component

## Descrição

O componente **Base Layout** é um componente que fornece a estrutura principal para aplicações web. Inclui um header com área para logo, menu de navegação e área de utilizador, uma área de conteúdo principal com título e ações, e um footer com assinatura.

## Características

- ✅ Estrutura semântica HTML5
- ✅ Metodologia BEM para nomenclatura CSS
- ✅ Abordagem Mobile-First
- ✅ Totalmente responsivo
- ✅ Acessível (WCAG 2.1 Level AA)
- ✅ Navegação por teclado
- ✅ Skip link para conteúdo principal
- ✅ Menu mobile com toggle animado
- ✅ Dropdown de utilizador
- ✅ Design tokens (CSS Variables)
- ✅ Sticky header
- ✅ Smooth scroll

## Estrutura de Ficheiros

```
/base-layout
  base-layout.html          # Template HTML
  base-layout.css           # Estilos BEM
  base-layout.js            # Comportamentos JavaScript
  README.md                 # Documentação
```

## Anatomia do Componente

```
layout
├── layout__header
│   ├── layout__header-container
│   │   ├── layout__logo
│   │   │   ├── layout__logo-link
│   │   │   ├── layout__logo-image
│   │   │   └── layout__logo-text
│   │   ├── layout__nav
│   │   │   └── layout__nav-list
│   │   │       └── layout__nav-item
│   │   │           └── layout__nav-link
│   │   ├── layout__user
│   │   │   ├── layout__user-button
│   │   │   │   ├── layout__user-avatar
│   │   │   │   └── layout__user-name
│   │   │   └── layout__user-menu
│   │   │       └── layout__user-menu-list
│   │   │           └── layout__user-menu-item
│   │   │               └── layout__user-menu-link
│   │   └── layout__mobile-toggle
│   │       └── layout__mobile-toggle-icon
├── layout__main
│   └── layout__main-container
│       ├── layout__content-header
│       │   ├── layout__title
│       │   └── layout__actions
│       │       └── layout__action-button
│       └── layout__content
│           └── layout__section
└── layout__footer
    └── layout__footer-container
        └── layout__footer-signature
            └── layout__footer-heart
```

## Utilização

### HTML Básico

```html
<div class="layout">
  <header class="layout__header">
    <!-- Header content -->
  </header>

  <main class="layout__main" id="main-content">
    <div class="layout__main-container">
      <div class="layout__content-header">
        <h1 class="layout__title">Título da Página</h1>
        <div class="layout__actions">
          <button class="layout__action-button layout__action-button--primary">
            Ação Principal
          </button>
        </div>
      </div>

      <div class="layout__content">
        <!-- Conteúdo aqui -->
      </div>
    </div>
  </main>

  <footer class="layout__footer">
    <!-- Footer content -->
  </footer>
</div>
```

### CSS

```html
<!-- Incluir common.css primeiro -->
<link rel="stylesheet" href="path/to/common.css">
<!-- Depois incluir layout.css -->
<link rel="stylesheet" href="path/to/layout.css">
```

### JavaScript

```html
<!-- Incluir no final do body -->
<script src="path/to/layout.js"></script>
```

## Modificadores

### Botões de Ação

```html
<!-- Botão Primário -->
<button class="layout__action-button layout__action-button--primary">
  Guardar
</button>

<!-- Botão Secundário -->
<button class="layout__action-button layout__action-button--secondary">
  Cancelar
</button>
```

### Link de Navegação Ativo

```html
<a href="#home" class="layout__nav-link layout__nav-link--active" aria-current="page">
  Início
</a>
```

## Customização

### Alterar Logo

Substitua o SVG dentro de `.layout__logo-image` pelo seu logo:

```html
<div class="layout__logo">
  <a href="/" class="layout__logo-link" aria-label="Ir para a página inicial">
    <img src="seu-logo.svg" alt="" class="layout__logo-image">
    <span class="layout__logo-text">Seu Nome</span>
  </a>
</div>
```

### Adicionar Items ao Menu

```html
<ul class="layout__nav-list">
  <li class="layout__nav-item">
    <a href="#novo-item" class="layout__nav-link">Novo Item</a>
  </li>
</ul>
```

### Personalizar Footer

```html
<footer class="layout__footer">
  <div class="layout__footer-container">
    <p class="layout__footer-signature">
      Seu texto personalizado aqui
    </p>
  </div>
</footer>
```

## Comportamentos JavaScript

### 1. Mobile Navigation Toggle

Controla a abertura/fecho do menu em dispositivos móveis:

```javascript
const mobileToggle = document.querySelector('.layout__mobile-toggle');
// Toggle automático ao clicar
```

### 2. User Menu Dropdown

Controla o dropdown do menu de utilizador:

```javascript
const userButton = document.querySelector('.layout__user-button');
// Abre/fecha ao clicar
// Fecha ao clicar fora
// Fecha ao pressionar Escape
```

### 3. Keyboard Navigation

Navegação por setas no menu de utilizador:

- `ArrowDown`: Próximo item
- `ArrowUp`: Item anterior
- `Home`: Primeiro item
- `End`: Último item
- `Escape`: Fechar menu

### 4. Smooth Scroll

Scroll suave para links âncora:

```html
<a href="#section">Ir para secção</a>
```

## Acessibilidade

### Características de Acessibilidade

1. **Skip Link**: Permite saltar para o conteúdo principal
2. **ARIA Labels**: Labels descritivos para elementos interativos
3. **ARIA Expanded**: Estado dos menus dropdown
4. **ARIA Current**: Indica página/link ativo
5. **Focus Visível**: Indicadores de foco claros
6. **Navegação por Teclado**: Totalmente navegável por teclado
7. **HTML Semântico**: Estrutura semântica correta
8. **Touch Targets**: Mínimo 44x44px para elementos interativos

### Atalhos de Teclado

- `Tab`: Navegar entre elementos
- `Enter/Space`: Ativar botões e links
- `Escape`: Fechar menus dropdown
- `↑↓`: Navegar em menus dropdown

## Responsividade

### Mobile (< 768px)

- Menu de navegação oculto (toggle button visível)
- Logo sem texto
- Menu de utilizador oculto
- Layout de coluna para header
- Ações em coluna

### Tablet (≥ 768px)

- Menu de navegação visível
- Logo com texto
- Menu de utilizador visível
- Toggle button oculto
- Header em linha
- Ações em linha

### Desktop (≥ 1024px)

- Espaçamentos maiores
- Largura máxima de conteúdo: 1440px
- Padding aumentado

## Design Tokens Utilizados

### Cores

- `--color-primary`: Cor primária (links ativos, botões)
- `--color-white`: Fundo do header e footer
- `--color-background`: Fundo da página
- `--color-gray-*`: Escala de cinzentos

### Espaçamento

- `--space-xs` a `--space-3xl`: Escala de espaçamentos

### Tipografia

- `--font-primary`: Fonte principal
- `--font-size-*`: Escala de tamanhos
- `--font-weight-*`: Pesos de fonte

### Bordas e Sombras

- `--radius-small`, `--radius-medium`: Border radius
- `--shadow-small`, `--shadow-large`: Box shadows

### Animações

- `--duration-fast`: 150ms
- `--easing-ease-in-out`: Curva de animação

## Boas Práticas

### HTML

```html
<!-- BOM: HTML semântico -->
<header class="layout__header">
  <nav class="layout__nav" aria-label="Navegação principal">
    <!-- Conteúdo -->
  </nav>
</header>

<!-- MAU: Divs genéricas -->
<div class="header">
  <div class="nav">
    <!-- Conteúdo -->
  </div>
</div>
```

### CSS

```css
/* BOM: BEM naming */
.layout__nav-link { }
.layout__nav-link--active { }

/* MAU: Nesting profundo */
.layout .nav .link.active { }
```

### JavaScript

```javascript
// BOM: Event delegation
nav.addEventListener('click', (event) => {
  const link = event.target.closest('.layout__nav-link');
  if (link) handleClick(link);
});

// MAU: Múltiplos listeners
links.forEach(link => {
  link.addEventListener('click', handleClick);
});
```

## Browser Support

- Chrome (últimas 2 versões)
- Firefox (últimas 2 versões)
- Safari (últimas 2 versões)
- Edge (últimas 2 versões)

## Dependências

- [common.css](../../../common.css) - Design tokens e estilos base

## Notas de Implementação

1. **Sempre incluir common.css** antes de layout.css
2. **Skip link** deve ser o primeiro elemento focável
3. **Header sticky** pode ser desativado removendo `position: sticky`
4. **JavaScript é opcional** para layout estático
5. **Mobile menu** requer JavaScript para funcionar
6. **User dropdown** requer JavaScript para funcionar

## Exemplos de Uso

### Landing Page

```html
<div class="layout">
  <header class="layout__header">
    <!-- Menu simples sem área de utilizador -->
  </header>
  <main class="layout__main">
    <!-- Conteúdo da landing page -->
  </main>
  <footer class="layout__footer">
    <!-- Footer com links sociais -->
  </footer>
</div>
```

### Dashboard de Aplicação

```html
<div class="layout">
  <header class="layout__header">
    <!-- Menu completo com utilizador -->
  </header>
  <main class="layout__main">
    <div class="layout__content-header">
      <h1>Dashboard</h1>
      <div class="layout__actions">
        <button class="layout__action-button layout__action-button--primary">
          Nova Tarefa
        </button>
      </div>
    </div>
    <!-- Conteúdo do dashboard -->
  </main>
  <footer class="layout__footer">
    <!-- Footer simples -->
  </footer>
</div>
```

## Referências

- [BEM Methodology](http://getbem.com/)
- [Atomic Design](https://atomicdesign.bradfrost.com/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN - Semantic HTML](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)

## Changelog

### v1.0.0 (2025-11-28)

- Versão inicial do componente Layout
- Header com logo, navegação e área de utilizador
- Main content com título e ações
- Footer com assinatura
- Suporte mobile-first
- Acessibilidade WCAG 2.1 Level AA
- Navegação por teclado completa
