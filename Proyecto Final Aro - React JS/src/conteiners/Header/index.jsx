import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.webp';
import Menu from '../../components/Menu';
import CartWidget from '../../components/CartWitdget'

const Header = () => {
    const links = [
        { label: 'Home', href: '/' },
        { label: 'Productos', href: '/store' },
        { label: 'Contacto', href: '/contacto' },
    ];

    return (
        <header className="header">
            <nav className="navbar">
                <Link to="/" className="navbar-logo">
                    <figure>
                        <img src={logo} alt="Logo de la tienda" />
                    </figure>
                </Link>
                <Menu className="navbar-menu" links={links}>
                    <li className="navbar-item">
                        <Link to="/carrito" className="navbar-link">
                            <CartWidget />
                        </Link>
                    </li>
                </Menu>
            </nav>
        </header>
    );
};

export default Header;

