import React from 'react';
import {Link, link} from 'react-router-dom'
import styled from 'styled-components'
import "./pages.css"


const nav = styled.div`
    display:inline;
    color: white;
`;

const NavBar = () => (
    <nav>
        <ul id="navMenu">
            <li>
               <Link to="/Workspaces"> Workspaces </Link>
            </li>
            <li>
               <Link to="/InviteForm"> Invite </Link>
            </li>
            <li>
                <Link to="/login-page">logout</Link>
            </li>
        </ul>
    </nav>


);

export default NavBar;