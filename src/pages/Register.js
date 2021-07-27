import React from 'react'

const Register = () => (

    <>
        <div>
                <label>Username : </label>   
                 <input type="text" placeholder="Enter Email" name="email" required />  
                 <label>Password : </label>   
                 <input type="password" placeholder="Enter Password" name="password" required />  
                 <a href="/login-page"><button type="Register"  >Register</button> </a>
        </div>
                 
    </>
)

export default Register