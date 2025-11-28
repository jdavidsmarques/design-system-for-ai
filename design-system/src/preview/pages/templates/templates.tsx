import { useState, useEffect } from 'react';
import './templates.scss';

export function Templates() {
  const [templates, setTemplates] = useState<string[]>([]);

  useEffect(() => {
    // Importa os módulos de templates
    const templateModules = import.meta.glob('../../../templates/**/!(*.test|*.spec).tsx');

    // Extrai os caminhos normalizados
    const templatePaths = Object.keys(templateModules).map(key => {
      return key.replace('../../../templates/', '').replace(/\.tsx$/, '');
    });

    setTemplates(templatePaths.sort());
  }, []);

  const openTemplate = (templatePath: string) => {
    window.open(`/?preview=${templatePath}`, '_blank');
  };

  return (
    <div className="templates-page">
      <div className="templates-page__intro">
        <p>
          Esta página lista todos os templates disponíveis no sistema.
          Clique num template para abri-lo numa nova janela.
        </p>
        <p className="templates-page__count">
          <strong>{templates.length}</strong> template{templates.length !== 1 ? 's' : ''} disponível{templates.length !== 1 ? 'eis' : ''}
        </p>
      </div>

      {templates.length === 0 ? (
        <div className="templates-page__empty">
          <p>Nenhum template encontrado.</p>
          <p>
            Crie templates na pasta <code>src/templates/</code>
          </p>
        </div>
      ) : (
        <div className="templates-page__grid">
          {templates.map((templatePath) => {
            const pathParts = templatePath.split('/');
            const category = pathParts.length > 1 ? pathParts[0] : 'root';
            const name = pathParts[pathParts.length - 1];

            return (
              <div key={templatePath} className="template-card">
                <div className="template-card__header">
                  <h3 className="template-card__name">{name}</h3>
                </div>
                <div className="template-card__actions">
                  <a
                    href={`/?preview=${templatePath}`}
                    className="template-card__button template-card__button--secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Nova Janela
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className="templates-page__help">
        <h3>Como criar um novo template</h3>
        <ol>
          <li>Crie uma pasta em <code>src/templates/nome-do-template/</code></li>
          <li>Crie o ficheiro <code>nome-do-template.tsx</code> com <code>export default</code></li>
          <li>Adicione estilos em <code>nome-do-template.scss</code> (opcional)</li>
          <li>O template aparecerá automaticamente nesta lista</li>
        </ol>
        <p>
          Para mais informações, consulte <code>PREVIEW-SYSTEM.md</code>
        </p>
      </div>
    </div>
  );
}

export default Templates;