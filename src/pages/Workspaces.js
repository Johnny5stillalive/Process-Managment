import React from 'react'
import NavBar from './NavBar'
import { Link} from 'react-router-dom';
import dataset from './dataset.js'

const Workspaces = () => (
    <>
    <NavBar />
    <h1>Your available workspaces</h1>
    {
        dataset.map((workspace, key) => (
            <Link className="article-list-item" key={key} to={`/projectBoard/${workspace.name}`}>
                <h3>{workspace.name}</h3>
            </Link>
        ))

    }
    
    </>

)

export default Workspaces;