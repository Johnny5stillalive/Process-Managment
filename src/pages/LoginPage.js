import React from 'react'

const LoginPage = () => (

        <>  
        <h1>Login</h1> 

        <noscript class="comment">wrapping this block in a form causes it not to redirect but with out it wrapped we are not sending the form info</noscript>
         <form />  
             <div class="container" >   
                 <label>Username : </label>   
                 <input type="text" placeholder="Enter Username" name="username" required />  
                 <label>Password : </label>   
                 <input type="password" placeholder="Enter Password" name="password" required />  
                 <button type="submit" >Login</button> 
                 <a href="/projectBoard"><input type="submit" value="fastLogin"></input></a>  
                 <a href="/register"><input type="submit" value="register"></input></a>    
            </div>
               
         </>

    )
    
export default LoginPage;