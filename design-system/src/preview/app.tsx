import { useState, useEffect } from 'react'
import './app.scss'
import { LayoutBase } from '../lib'
import { NativeElements } from './pages/native-elements'
import { Templates } from './pages/templates'
import { List } from '../templates'
import { Components } from './pages/components/components'
import { ItemLabelPreview } from './pages/components/item-label/item-label-preview'
import { CardPreview } from './pages/components/card/card-preview'
import Home from './pages/home'

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  // Simple router
  const navigate = (path: string) => {
    window.history.pushState({}, '', path)
    setCurrentPath(path)
  }

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname)
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  })

  const navItems = [
    { label: 'Home', href: '/', active: currentPath === '/' },
    { label: 'Native Elements', href: '/native-elements', active: currentPath === '/native-elements' },
    { label: 'Templates', href: '/templates', active: currentPath === '/templates' },
    { label: 'Components', href: '/components', active: currentPath.startsWith('/components') },
  ]

  const user = {
    name: 'Developer',
    initials: 'DV',
  }

  const handleNavClick = (href: string) => {
    console.log('Navigate to:', href)
    navigate(href)
  }

  const handleUserClick = () => {
    console.log('User menu clicked')
  }

  const getPageTitle = () => {
    switch (currentPath) {
      case '/native-elements':
        return 'Native HTML Elements'
      case '/templates':
        return 'Templates'
      case '/templates/list':
        return 'List Template'
      case '/components':
        return 'Components'
      case '/components/item-label':
        return 'Item Label'
      case '/components/card':
        return 'Card'
      default:
        return ''
    }
  }

  const renderContent = () => {
    switch (currentPath) {
      case '/native-elements':
        return <NativeElements />
      case '/templates':
        return <Templates />
      case '/templates/list':
        return <List />
      case '/components':
        return <Components />
      case '/components/item-label':
        return <ItemLabelPreview />
      case '/components/card':
        return <CardPreview />
      case '/':
      default:
        return <Home />
    }
  }

  return (
    <LayoutBase
      logoAlt="Design System Logo"
      logoText="Design System"
      navItems={navItems}
      user={user}
      pageTitle={getPageTitle()}
      footerText="© 2025 Design System for AI. All rights reserved."
      onNavClick={handleNavClick}
      onUserClick={handleUserClick}
    >
      {renderContent()}
    </LayoutBase>
  )
}

export default App
