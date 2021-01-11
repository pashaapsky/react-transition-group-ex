import React, {Fragment, useState} from 'react';
import {CSSTransition} from "react-transition-group";

export const Navbar = ({children, ...restProps}) => {
    return (
        <nav className="navbar" {...restProps}>
            <ul className="navbar-menu">
                {children}
            </ul>
        </nav>
    );
};

export const NavbarItem = ({children, ...restProps}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <li className="navbar-menu__item">
            <a className="navbar-menu__link nav-link" href="#" onClick={() => setIsOpen(!isOpen)}>
                <span>😀</span>
                Link
            </a>

            <CSSTransition in={isOpen} timeout={500} classNames="animate" unmountOnExit>
                {children}
            </CSSTransition>
        </li>
    );
};

export const DropdownMenu = ({children}) => {
    return (
        <div className="dropdown-menu">
            {children}
        </div>
    );
};

export const DropdownItem = ({children, leftIcon, rightIcon, ...restProps}) => {
    return (
        <div className="dropdown-menu__item" {...restProps}>
            <a className="nav-link" href="#">
                {leftIcon && <span className="icon">{leftIcon}</span>}
                {children}
                {rightIcon && <span className="icon icon--right">{rightIcon}</span>}
            </a>
        </div>
    );
};


