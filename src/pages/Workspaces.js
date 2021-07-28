import React from 'react'
import NavBar from './NavBar'
import { Link} from 'react-router-dom';

const Workspaces = () => (
    <>
    <NavBar />
    <h1>This will be list of workspaces</h1>
    <Link to="/projectBoard"> workspace1 </Link>
    </>

)

export default Workspaces;