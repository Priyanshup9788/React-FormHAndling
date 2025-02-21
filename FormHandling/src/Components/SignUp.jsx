import React, { useState } from 'react'

const SignUp = ({onSubmitForm}) => {

    const [userData , setUserData] = useState({
        username:"",
        Email:"",
        password:""
    });

    const onChange=(event)=>{
        setUserData({...userData,[event.target.name]:event.target.value})
    }

    const onFormSubmit=(event)=>{
        event.preventDefault();
        if(!userData.username || !userData.Email || !userData.password)
        {
            alert("Insert All Data");
            return;
        }
        console.log(userData);
        onSubmitForm(userData);
    }

    return (
    <div className="login-container">
    <h2>Sign Up</h2>
    <form onSubmit={onFormSubmit}>
        <div className="form-group">
            <label for="username">Username</label>
            <input type="text" id="username" name="username" required placeholder="Enter your username" onChange={(event)=>onChange(event)} />
        </div>

        <div className="form-group">
            <label for="EmailId">EmailID</label>
            <input type="email" id="EmailId" name="Email" required placeholder="Enter your Email" onChange={(event)=>onChange(event)} />
        </div>

        <div className="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required placeholder="Enter your password" onChange={(event)=>onChange(event)} />
        </div>
        <div className="form-group">
            <button type="submit">SignUp</button>
        </div>
    </form>
    <div className="forgot-password">
        <a href="#">Forgot your password?</a>
    </div>
</div>
  )
}

export default SignUp