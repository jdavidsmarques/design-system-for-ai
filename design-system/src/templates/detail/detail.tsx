import './detail.scss'
import { useState, useEffect } from 'react'
import { LayoutBase } from '../../lib'

export const Detail = () => {

    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    // Simple router
    const navigate = (path: string) => {
        window.history.pushState({}, '', path)
        setCurrentPath(path)
    }

    const navItems = [
        { label: 'Home', href: '/', active: currentPath === '/' },
        { label: 'Sample 01', href: '/native-elements', active: currentPath === '/native-elements' },
        { label: 'Sample 02', href: '/components', active: currentPath === '/components' },
        { label: 'Sample 03', href: '/docs', active: currentPath === '/docs' },
        { label: 'Sample 04', href: '/about', active: currentPath === '/about' },
    ]

    // Handle browser back/forward buttons
    useEffect(() => {
        const handlePopState = () => setCurrentPath(window.location.pathname)
        window.addEventListener('popstate', handlePopState)
        return () => window.removeEventListener('popstate', handlePopState)
    })

    const user = {
        name: 'John Doe',
        initials: 'JD',
    }

    const handleNavClick = (href: string) => {
        console.log('Navigate to:', href)
        navigate(href)
    }

    const handleUserClick = () => {
        console.log('User menu clicked')
    }

    return (
        <LayoutBase
              logoAlt="Sample alt logo"
              logoText="Sample text logo"
              navItems={navItems}
              user={user}
              pageTitle="Sample page title"
              actions={
                <>
                  <button onClick={() => console.log('Export')}>Action 1</button>
                  <button className='btn-primary' onClick={() => console.log('Settings')}>Action 2</button>
                </>
              }
              footerText="© 2025 Design System for AI. All rights reserved."
              onNavClick={handleNavClick}
              onUserClick={handleUserClick}
        >Sample content</LayoutBase>
    )
}

export default Detail
