import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app'

// glob dos templates (Vite)
const templateModules = import.meta.glob('../templates/**/!(*.test|*.spec).tsx')

const root = createRoot(document.getElementById('root')!)

const params = new URLSearchParams(window.location.search)
const preview = params.get('preview')

if (preview) {
  // encontra a key do módulo correspondente ao preview param
  const routeKey = Object.keys(templateModules).find(k => {
    const normalizedKey = k.replace('../templates/', '').replace(/\.tsx$/, '')
    return normalizedKey === preview
  })

  if (routeKey) {
    // importa e renderiza o template dinamicamente
    templateModules[routeKey]().then((mod: any) => {
      const Component = mod.default
      root.render(
        <StrictMode>
          <Component />
        </StrictMode>,
      )
    })
  } else {
    root.render(
      <StrictMode>
        <div style={{ padding: 20 }}>
          <h1>Preview not found</h1>
          <p>Preview solicitado: <code>{preview}</code></p>
          <p>Templates disponíveis:</p>
          <ul>
            {Object.keys(templateModules).map(key => {
              const path = key.replace('../templates/', '').replace(/\.tsx$/, '')
              return <li key={key}><a href={`/?preview=${path}`}>{path}</a></li>
            })}
          </ul>
          <p>
            Aceda à <a href="/templates">página de Templates</a> para ver todos os templates disponíveis.
          </p>
        </div>
      </StrictMode>,
    )
  }
} else {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}