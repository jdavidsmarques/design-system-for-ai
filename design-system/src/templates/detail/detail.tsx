/**
 * Detail Template Component
 *
 * This template demonstrates the full usage of the LayoutBase component with:
 * - Client-side routing (SPA navigation)
 * - Navigation state management
 * - User menu integration
 * - Action buttons in header
 * - Browser back/forward button support
 *
 * @example
 * Use this as a reference for building pages that need a complete layout
 * with navigation, header actions, and user menu.
 */

import './detail.scss'
import { useState, useEffect } from 'react'
import { LayoutBase, Card, ItemLabel } from '../../lib'

export const Detail = () => {

    /**
     * State: Current route path
     * Tracks the current URL pathname for managing active navigation items
     */
    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    /**
     * Client-side navigation function
     * Updates browser history and component state without full page reload
     *
     * @param path - The path to navigate to (e.g., '/about', '/docs')
     */
    const navigate = (path: string) => {
        // Update browser URL without page reload
        window.history.pushState({}, '', path)
        // Update component state to reflect new path
        setCurrentPath(path)
    }

    /**
     * Navigation items configuration
     * Each item is marked as active based on current path
     * The active state is recalculated when currentPath changes
     */
    const navItems = [
        { label: 'Home', href: '/', active: currentPath === '/' },
        { label: 'Sample 01', href: '/native-elements', active: currentPath === '/native-elements' },
        { label: 'Sample 02', href: '/components', active: currentPath === '/components' },
        { label: 'Sample 03', href: '/docs', active: currentPath === '/docs' },
        { label: 'Sample 04', href: '/about', active: currentPath === '/about' },
    ]

    /**
     * Effect: Handle browser back/forward buttons
     * Listens to the 'popstate' event to update currentPath when user
     * navigates using browser buttons or keyboard shortcuts
     */
    useEffect(() => {
        const handlePopState = () => setCurrentPath(window.location.pathname)
        window.addEventListener('popstate', handlePopState)
        // Cleanup: Remove event listener when component unmounts
        return () => window.removeEventListener('popstate', handlePopState)
    })

    /**
     * User configuration for the user menu
     * - name: Full name displayed in the menu
     * - initials: Shown in the avatar circle (e.g., "JD")
     */
    const user = {
        name: 'John Doe',
        initials: 'JD',
    }

    /**
     * Breadcrumbs configuration
     * Displays the navigation path from home to current page
     * Last item (current page) has no href and is displayed as text
     */
    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'Templates', href: '/templates' },
        { label: 'Detail Template' }, // Current page - no href
    ]

    /**
     * Navigation click handler
     * Called when user clicks a navigation item
     * Uses the navigate function to perform SPA routing
     *
     * @param href - The destination path
     */
    const handleNavClick = (href: string) => {
        console.log('Navigate to:', href)
        navigate(href)
    }

    /**
     * User menu click handler
     * Called when user clicks on the user avatar/menu
     * Typically used to show a dropdown with user actions
     */
    const handleUserClick = () => {
        console.log('User menu clicked')
    }

    return (
        <LayoutBase
            // Logo configuration
            logoAlt="Sample alt logo"          // Alt text for accessibility
            logoText="Sample text logo"        // Text-based logo (shown if no logoSrc)

            // Navigation items array
            navItems={navItems}                 // Navigation menu items with active states

            // User menu configuration
            user={user}                         // User data for avatar and menu

            // Page header
            pageTitle="Sample page title"      // Title shown in content header

            // Breadcrumbs navigation
            breadcrumbs={breadcrumbs}           // Navigation path (Home > Templates > Current)

            // Action buttons in header (optional)
            actions={
                <>
                    {/* Example action buttons - replace with your actual actions */}
                    <button onClick={() => console.log('Export')}>Action 1</button>
                    <button className='btn-primary' onClick={() => console.log('Settings')}>Action 2</button>
                </>
            }

            // Footer text
            footerText="© 2025 Design System for AI. All rights reserved."

            // Event handlers
            onNavClick={handleNavClick}         // Navigation click handler
            onUserClick={handleUserClick}       // User menu click handler
            onBreadcrumbClick={(href) => {      // Breadcrumb click handler
                console.log('Breadcrumb clicked:', href)
                navigate(href)
            }}
        >
            {/* Page content - Order Details Example */}
            <div className="detail__content">
                {/* Form Section */}
                <Card>
                    <h2>Form</h2>
                    <div className="detail__grid">
                        <ItemLabel label="Number">
                            000000025455000004
                        </ItemLabel>
                        <ItemLabel label="Status">
                            <span className="detail__badge detail__badge--success">Regularized lending</span>
                        </ItemLabel>
                        <ItemLabel label="Created by">
                            <span className="detail__value">Tiago Almeida</span>
                        </ItemLabel>
                        <ItemLabel label="Order number">
                            <span className="detail__value">Absent work orders</span>
                        </ItemLabel>
                        <ItemLabel label="Mechanics">
                            <span className="detail__value">Discount, Bonus, Rappel</span>
                        </ItemLabel>
                        <ItemLabel label="Type of agreement">
                            <span className="detail__value">New</span>
                        </ItemLabel>
                    </div>
                </Card>

                {/* Distributor Orders Table */}
                <Card>
                    <h2>Number of distributor orders</h2>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th style={{ width: '40px' }}></th>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th style={{ width: '60px' }}></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>Black and silver headphones</td>
                                    <td>1831</td>
                                    <td>
                                        <button aria-label="Delete item">
                                            🗑️
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>Black and silver headphones</td>
                                    <td>1831</td>
                                    <td>
                                        <button aria-label="Delete item">
                                            🗑️
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>Black and silver headphones</td>
                                    <td>1831</td>
                                    <td>
                                        <button aria-label="Delete item">
                                            🗑️
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Card>

                {/* Request Section */}
                <Card>
                    <h2>Request</h2>
                    <div className="detail__grid">
                        <ItemLabel label="Client number">
                            <span className="detail__value">1128100620</span>
                        </ItemLabel>
                        <ItemLabel label="Client">
                            <span className="detail__value">Restaurante Brasinha</span>
                        </ItemLabel>
                        <ItemLabel label="Activity">
                            <span className="detail__value">Regularized lending</span>
                        </ItemLabel>
                        <ItemLabel label="Potential segm">
                            <span className="detail__value">B</span>
                        </ItemLabel>
                        <ItemLabel label="Seg level 3">
                            <span className="detail__value">Restaurant</span>
                        </ItemLabel>
                        <ItemLabel label="Start date">
                            <span className="detail__value">06 may. 2022</span>
                        </ItemLabel>
                        <ItemLabel label="End date">
                            <span className="detail__value">06 may. 2023</span>
                        </ItemLabel>
                        <ItemLabel label="Priority">
                            <span className="detail__value">Normal</span>
                        </ItemLabel>
                        <ItemLabel label="Motive">
                            <span className="detail__value">Regularized lending</span>
                        </ItemLabel>
                        <ItemLabel label="Observations" className="detail__field--full">
                            <p className="detail__value">
                                Use agile frameworks to provide high-level overviews a solid summary.
                                Corporate strategy iterations encourage group collaboration to strengthen
                                the overall value offering. Develop a more comprehensive understanding of
                                disruptive innovation via workplace empowerment and diversity.
                            </p>
                        </ItemLabel>
                    </div>
                </Card>
            </div>
        </LayoutBase>
    )
}

export default Detail
