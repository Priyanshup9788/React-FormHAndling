import React, { useState } from 'react'
import Login from './Login'
import SignUp from './SignUp';

const FormController = () => {

    const [credential,setCredential]=useState(null);
    const [isLogin,setIsLogin]=useState(false);
    const [userData,setUserData]=useState(null);

    const onSubmitForm=(data)=>{
        setCredential({Email:data.Email,password:data.password,username:data.username});
        setIsLogin(!isLogin);
    }

    const onLogin=(data)=>{
        setUserData(data);
        console.log(userData)
    }

  return (
    <>
    {
    userData?<h1>Welcome {userData.username}</h1>:isLogin?<Login onLogin={onLogin} credential={credential} />:<SignUp onSubmitForm={onSubmitForm}/>}
    </>
    
  )
}

export default FormController