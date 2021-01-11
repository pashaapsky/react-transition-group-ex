import React, {useState} from 'react';
import {DropdownItem, DropdownMenu, Navbar, NavbarItem} from "../components/Navbar";
import {CSSTransition} from "react-transition-group";

const NavbarContainer = () => {
    const [inProp, setInProp] = useState(false);

    return (
        <Navbar>
            <NavbarItem>
                <DropdownMenu >
                    <DropdownItem leftIcon="😀">
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
