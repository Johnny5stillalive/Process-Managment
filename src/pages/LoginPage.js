import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    color:black;
    margin: 5px; 
    
`

const LoginPage = () => (
        <>  
            <img src='/Espailer.png' className="App-logo" alt="logo" />
            <h1>Espalier</h1> 
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