import React, {useState} from 'react';
import {DropdownItem, DropdownMenu, Navbar, NavbarItem} from "../components/Navbar";

const NavbarContainer = () => {
    return (
        <Navbar>
            <NavbarItem exact to="/" title="Home"/>

            <NavbarItem to="/about" title="About"/>
            <NavbarItem to="/contact" title="Contact"/>

            <NavbarItem title="Menu">
                <DropdownMenu >
                    <DropdownItem leftIcon="😀" >
                        Link
                    </DropdownItem>

                    <DropdownItem leftIcon="😀">
                        Link
                    </DropdownItem>

                    <DropdownItem leftIcon="😀">
                        Link
                    </DropdownItem>
                </DropdownMenu>
            </NavbarItem>
        </Navbar>
    );
};

export default NavbarContainer;
