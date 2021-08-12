import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    color:black;
    margin: 5px; 
    
`

const LoginPage = () => (
        <>  
        <h1>Espalier</h1> 
        <h3>Login</h3>
        <noscript className="comment">wrapping this block in a form causes it not to redirect but with out it wrapped we are not sending the form info</noscript>
         <form />  
             <Container >   
                    <label>Username : </label>   
                    <input type="text" placeholder="Enter Username" name="username" required />  
               </Container>
                <Container>
                    <label>Password : </label>   
                    <input type="password" placeholder="Enter Password" name="password" required />  
                <Container>
                     
                    <a href="/workspaces"><input type="submit" value="Login"></input></a>  
                    <a href="/register"><input type="submit" value="Register"></input></a>   
                </Container>   
            </Container>
               
         </>

    )
    
export default LoginPage;