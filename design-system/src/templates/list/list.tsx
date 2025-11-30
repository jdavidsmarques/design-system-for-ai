import React, { useState } from 'react';
import { LayoutBase, Card } from '../../lib';
import './list.scss';

interface Product {
    id: string;
    name: string;
    price: number;
    stock: number;
    maxStock: number;
    category: string;
    created: string;
    status: 'Active' | 'Inactive';
}

const MOCK_DATA: Product[] = [
    { id: '1', name: 'Wireless Headphones', price: 99.99, stock: 45, maxStock: 100, category: 'Electronics', created: '2023-01-15', status: 'Active' },
    { id: '2', name: 'Ergonomic Chair', price: 249.50, stock: 12, maxStock: 50, category: 'Furniture', created: '2023-02-10', status: 'Active' },
    { id: '3', name: 'Mechanical Keyboard', price: 129.00, stock: 0, maxStock: 30, category: 'Electronics', created: '2023-03-05', status: 'Inactive' },
    { id: '4', name: 'USB-C Hub', price: 45.00, stock: 88, maxStock: 200, category: 'Accessories', created: '2023-03-20', status: 'Active' },
    { id: '5', name: 'Monitor Stand', price: 35.00, stock: 25, maxStock: 60, category: 'Furniture', created: '2023-04-01', status: 'Active' },
    { id: '6', name: 'Gaming Mouse', price: 59.99, stock: 30, maxStock: 80, category: 'Electronics', created: '2023-04-05', status: 'Active' },
    { id: '7', name: 'Laptop Stand', price: 29.99, stock: 15, maxStock: 40, category: 'Accessories', created: '2023-04-10', status: 'Active' },
    { id: '8', name: 'Webcam 4K', price: 149.99, stock: 5, maxStock: 20, category: 'Electronics', created: '2023-04-12', status: 'Active' },
    { id: '9', name: 'Desk Lamp', price: 49.50, stock: 50, maxStock: 100, category: 'Furniture', created: '2023-04-15', status: 'Active' },
    { id: '10', name: 'Bluetooth Speaker', price: 79.00, stock: 0, maxStock: 50, category: 'Electronics', created: '2023-04-18', status: 'Inactive' },
    { id: '11', name: 'External SSD 1TB', price: 119.99, stock: 60, maxStock: 150, category: 'Storage', created: '2023-04-20', status: 'Active' },
    { id: '12', name: 'Wireless Charger', price: 25.00, stock: 100, maxStock: 200, category: 'Accessories', created: '2023-04-22', status: 'Active' },
    { id: '13', name: 'Noise Cancelling Earbuds', price: 199.99, stock: 20, maxStock: 50, category: 'Audio', created: '2023-04-25', status: 'Active' },
    { id: '14', name: 'Smart Watch', price: 299.00, stock: 10, maxStock: 30, category: 'Wearables', created: '2023-04-28', status: 'Active' },
    { id: '15', name: 'Tablet Stand', price: 19.99, stock: 40, maxStock: 80, category: 'Accessories', created: '2023-05-01', status: 'Active' },
    { id: '16', name: 'Office Desk', price: 399.00, stock: 5, maxStock: 15, category: 'Furniture', created: '2023-05-05', status: 'Active' },
    { id: '17', name: 'Cable Organizer', price: 9.99, stock: 200, maxStock: 500, category: 'Accessories', created: '2023-05-08', status: 'Active' },
    { id: '18', name: 'Power Bank 20000mAh', price: 55.00, stock: 35, maxStock: 100, category: 'Accessories', created: '2023-05-10', status: 'Active' },
    { id: '19', name: 'Microphone Arm', price: 39.50, stock: 18, maxStock: 40, category: 'Audio', created: '2023-05-12', status: 'Active' },
    { id: '20', name: 'Green Screen', price: 89.99, stock: 8, maxStock: 20, category: 'Studio', created: '2023-05-15', status: 'Inactive' },
    { id: '21', name: 'Mechanical Switches (Set)', price: 34.99, stock: 55, maxStock: 100, category: 'Components', created: '2023-05-18', status: 'Active' },
    { id: '22', name: 'Keycap Set', price: 45.00, stock: 22, maxStock: 60, category: 'Components', created: '2023-05-20', status: 'Active' },
    { id: '23', name: 'Mouse Pad XL', price: 24.99, stock: 75, maxStock: 150, category: 'Accessories', created: '2023-05-22', status: 'Active' },
    { id: '24', name: 'Screen Cleaning Kit', price: 14.50, stock: 120, maxStock: 300, category: 'Cleaning', created: '2023-05-25', status: 'Active' },
    { id: '25', name: 'Laptop Sleeve', price: 29.00, stock: 45, maxStock: 100, category: 'Accessories', created: '2023-05-28', status: 'Active' },
    { id: '26', name: 'USB Flash Drive 128GB', price: 18.99, stock: 90, maxStock: 200, category: 'Storage', created: '2023-06-01', status: 'Active' },
    { id: '27', name: 'HDMI Cable 2m', price: 12.99, stock: 150, maxStock: 300, category: 'Cables', created: '2023-06-03', status: 'Active' },
    { id: '28', name: 'DisplayPort Cable', price: 14.99, stock: 80, maxStock: 200, category: 'Cables', created: '2023-06-05', status: 'Active' },
    { id: '29', name: 'Ethernet Cable 5m', price: 8.99, stock: 200, maxStock: 500, category: 'Cables', created: '2023-06-08', status: 'Active' },
    { id: '30', name: 'WiFi Adapter', price: 29.99, stock: 25, maxStock: 60, category: 'Networking', created: '2023-06-10', status: 'Active' },
    { id: '31', name: 'Bluetooth Adapter', price: 15.99, stock: 40, maxStock: 100, category: 'Networking', created: '2023-06-12', status: 'Active' },
    { id: '32', name: 'Smartphone Tripod', price: 22.50, stock: 30, maxStock: 80, category: 'Photography', created: '2023-06-15', status: 'Active' },
    { id: '33', name: 'Ring Light', price: 39.99, stock: 15, maxStock: 50, category: 'Photography', created: '2023-06-18', status: 'Active' },
    { id: '34', name: 'Capture Card', price: 129.99, stock: 5, maxStock: 20, category: 'Streaming', created: '2023-06-20', status: 'Inactive' },
    { id: '35', name: 'Stream Deck', price: 149.99, stock: 10, maxStock: 30, category: 'Streaming', created: '2023-06-22', status: 'Active' },
    { id: '36', name: 'Acoustic Foam Panels', price: 29.99, stock: 60, maxStock: 150, category: 'Studio', created: '2023-06-25', status: 'Active' },
    { id: '37', name: 'Monitor Arm Dual', price: 79.99, stock: 12, maxStock: 40, category: 'Furniture', created: '2023-06-28', status: 'Active' },
    { id: '38', name: 'Vertical Mouse', price: 49.99, stock: 20, maxStock: 50, category: 'Electronics', created: '2023-07-01', status: 'Active' },
    { id: '39', name: 'Trackball Mouse', price: 59.99, stock: 8, maxStock: 25, category: 'Electronics', created: '2023-07-03', status: 'Active' },
    { id: '40', name: 'Drawing Tablet', price: 249.99, stock: 7, maxStock: 20, category: 'Creative', created: '2023-07-05', status: 'Active' },
    { id: '41', name: 'Stylus Pen', price: 89.99, stock: 25, maxStock: 60, category: 'Creative', created: '2023-07-08', status: 'Active' },
    { id: '42', name: 'Laptop Cooling Pad', price: 34.99, stock: 35, maxStock: 80, category: 'Accessories', created: '2023-07-10', status: 'Active' },
    { id: '43', name: 'Privacy Screen Filter', price: 44.99, stock: 15, maxStock: 40, category: 'Accessories', created: '2023-07-12', status: 'Active' },
    { id: '44', name: 'Docking Station', price: 199.99, stock: 10, maxStock: 30, category: 'Accessories', created: '2023-07-15', status: 'Active' },
    { id: '45', name: 'Smart Plug', price: 19.99, stock: 80, maxStock: 200, category: 'Smart Home', created: '2023-07-18', status: 'Active' },
    { id: '46', name: 'Smart Bulb', price: 14.99, stock: 100, maxStock: 300, category: 'Smart Home', created: '2023-07-20', status: 'Active' },
    { id: '47', name: 'LED Strip Lights', price: 24.99, stock: 60, maxStock: 150, category: 'Smart Home', created: '2023-07-22', status: 'Active' },
    { id: '48', name: 'Voice Assistant Speaker', price: 49.99, stock: 40, maxStock: 100, category: 'Smart Home', created: '2023-07-25', status: 'Active' },
    { id: '49', name: 'Security Camera', price: 89.99, stock: 15, maxStock: 50, category: 'Smart Home', created: '2023-07-28', status: 'Active' },
    { id: '50', name: 'Video Doorbell', price: 129.99, stock: 10, maxStock: 30, category: 'Smart Home', created: '2023-07-30', status: 'Active' },
];

export const List: React.FC = () => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const itemsPerPage = 10;

    const filteredData = MOCK_DATA.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = filteredData.slice(startIndex, endIndex);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const navigate = (path: string) => {
        window.history.pushState({}, '', path);
        setCurrentPath(path);
    };

    const navItems = [
        { label: 'Home', href: '/', active: currentPath === '/' },
        { label: 'Sample 01', href: '/native-elements', active: currentPath === '/native-elements' },
        { label: 'Sample 02', href: '/components', active: currentPath === '/components' },
        { label: 'Sample 03', href: '/docs', active: currentPath === '/docs' },
        { label: 'Sample 04', href: '/about', active: currentPath === '/about' },
    ];

    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'Templates', href: '/templates' },
        { label: 'List Template' },
    ];

    const user = {
        name: 'John Doe',
        initials: 'JD',
    };

    const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setSelectedItems(new Set(currentItems.map(item => item.id)));
        } else {
            setSelectedItems(new Set());
        }
    };

    const handleSelectItem = (id: string) => {
        const newSelected = new Set(selectedItems);
        if (newSelected.has(id)) {
            newSelected.delete(id);
        } else {
            newSelected.add(id);
        }
        setSelectedItems(newSelected);
    };

    return (
        <LayoutBase
            logoAlt="Design System Logo"
            logoText="Design System"
            navItems={navItems}
            user={user}
            pageTitle="List Template"
            breadcrumbs={breadcrumbs}
            actions={
                <button className="btn-primary" onClick={() => console.log('Add new')}>
                    + Add
                </button>
            }
            footerText="© 2025 Design System for AI. All rights reserved."
            onNavClick={navigate}
            onUserClick={() => console.log('User clicked')}
            onBreadcrumbClick={navigate}
        >
            <div>
                <div>
                    <input
                        type="search"
                        style={{ width: '300px' }}
                        className='margin-right-sm'
                        placeholder="Search by name"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>
                <div className='label margin-top-xl'>
                    <b>{filteredData.length}</b> Results
                </div>
                <Card className='margin-top-sm'>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th style={{ width: '40px' }}>
                                        <input
                                            type="checkbox"
                                            checked={selectedItems.size === currentItems.length && currentItems.length > 0}
                                            onChange={handleSelectAll}
                                        />
                                    </th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Stock</th>
                                    <th>Max Stock</th>
                                    <th>Category</th>
                                    <th>Created</th>
                                    <th>Status</th>
                                    <th style={{ width: '100px' }}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentItems.map((item) => (
                                    <tr key={item.id}>
                                        <td>
                                            <input
                                                type="checkbox"
                                                checked={selectedItems.has(item.id)}
                                                onChange={() => handleSelectItem(item.id)}
                                            />
                                        </td>
                                        <td>
                                            <a
                                                href={`/templates/detail/${item.id}`}
                                                onClick={(e) => { e.preventDefault(); navigate(`/templates/detail`); }}
                                                style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 500 }}
                                            >
                                                {item.name}
                                            </a>
                                        </td>
                                        <td>${item.price.toFixed(2)}</td>
                                        <td>{item.stock}</td>
                                        <td>{item.maxStock}</td>
                                        <td>{item.category}</td>
                                        <td>{item.created}</td>
                                        <td>
                                            <span className={`list-template__status list-template__status--${item.status.toLowerCase()}`}>
                                                {item.status}
                                            </span>
                                        </td>
                                        <td>
                                            <div className="list-template__actions">
                                                <button className="btn-icon" aria-label="Edit" onClick={() => console.log('Edit', item.id)}>✏️</button>
                                                <button className="btn-icon" aria-label="Delete" onClick={() => console.log('Delete', item.id)}>🗑️</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="display-flex justify-content-space-between align-items-center margin-top-md">
                            <div>
                                {filteredData.length > 0 ? startIndex + 1 : 0} to {Math.min(endIndex, filteredData.length)} of {filteredData.length} items
                            </div>
                            <div>
                                <button
                                    disabled={currentPage === 1}
                                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                >
                                    Previous
                                </button>
                                <button
                                    className='margin-left-sm'
                                    disabled={currentPage === totalPages}
                                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </LayoutBase>
    );
};

export default List;
