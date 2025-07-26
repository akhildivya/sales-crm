

import { NavLink } from 'react-router-dom';

import Header from './Header'
import Footer from './Footer'
import { useState } from 'react';
import { Nav, Row, Col } from 'react-bootstrap';
import '../css/sidebar.css'
const menu = [
    { name: 'Home', icon: 'fas fa-home', to: '/' },
    { name: 'Upload sheet', icon: 'fas fa-user', to: '/uploadsheet' },
    { name: 'Assign leads', icon: 'fas fa-chart-line', to: '/dashboard' },
    {
        name: 'Settings', icon: 'fas fa-cog', to: '/settings',

    }
];



function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);
    const [openIdx, setOpenIdx] = useState(null);

    const toggleDropdown = i => setOpenIdx(openIdx === i ? null : i);

    return (

     

          <div className={`sidebar${collapsed ? ' collapsed' : ''}`}>
                <div className="sidebar-header">
                    <h3><i className="fas fa-anchor"></i><span>Just Do</span></h3>
                    <div className="toggle-btn" onClick={() => setCollapsed(!collapsed)}>
                        <i className={`fas ${collapsed ? 'fa-chevron-right' : 'fa-chevron-left'}`}></i>
                    </div>
                </div>
                <ul className="nav-links">
                    {menu.map((item, i) => (
                        <li key={item.name} className={item.dropdown ? 'dropdown' : ''}>
                            <NavLink to={item.to} className="nav-item" activeClassName="active">
                                <span className="nav-icon"><i className={item.icon}></i></span>
                                <span>{item.name}</span>
                                {item.dropdown && <i className={`fas ${openIdx === i ? 'fa-chevron-down' : 'fa-chevron-right'} dropdown-icon`}
                                    onClick={() => toggleDropdown(i)} />}
                            </NavLink>
                            {item.dropdown && openIdx === i && (
                                <ul className="dropdown-menu">
                                    {item.dropdown.map(sub => (
                                        <li key={sub}><NavLink to={`${item.to}/${sub.toLowerCase()}`} className="dropdown-item">{sub}</NavLink></li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

        
        
    )
}

export default Sidebar