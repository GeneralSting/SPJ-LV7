import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {

    const NavLinkStyles = ({ isActive }) => {
        return{
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration : isActive ? 'none' : 'underline',
        }
    }
    return (
        <nav>
            <NavLink style={NavLinkStyles} to='/'>Home</NavLink>
            <NavLink style={NavLinkStyles} to='/dodaj'>Dodaj</NavLink>
            <NavLink style={NavLinkStyles} to='/pretrazivanje'>Search</NavLink>
        </nav>
    )
}