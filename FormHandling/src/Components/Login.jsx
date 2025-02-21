
import React, { useState } from 'react'

const Login = ({credential,onLogin}) => {
 
     const [userData , setUserData] = useState({
         Email:"",
         password:""
     });
 
     const onChange=(event)=>{
         setUserData({...userData,[event.target.name]:event.target.value})
     }
 
     const onFormSubmit=(event)=>{
         event.preventDefault();
         if(!userData.Email || !userData.password)
         {
             alert("Insert All Data");
             return;
         }

         if(credential && credential.Email===userData.Email && credential.password===userData.password)
         {
            onLogin(credential);
         }
         else
         {
            console.log(credential)
            alert("Invalid Username or Password");

         }
        
         
     }
 
     return (
     <div className="login-container">
     <h2>LogIn</h2>
     <form onSubmit={onFormSubmit}>
 
         <div className="form-group">
             <label for="EmailId">EmailID</label>
             <input type="email" id="EmailId" name="Email" required placeholder="Enter your Email" onChange={(event)=>onChange(event)} />
         </div>
 
         <div className="form-group">
             <label for="password">Password</label>
             <input type="password" id="password" name="password" required placeholder="Enter your password" onChange={(event)=>onChange(event)} />
         </div>
         <div className="form-group">
             <button type="submit">Login</button>
         </div>
     </form>
     <div className="forgot-password">
         <a href="#">Forgot your password?</a>
     </div>
 </div>
   )
}

export default Login