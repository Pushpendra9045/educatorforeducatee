// import  React from 'react';
import React, {useState,useEffect, useContext} from "react";
import axios from "axios";
import '../Styles/loginPage.css';
import {Link, useNavigate} from 'react-router-dom';
// import login_img from './Images/cuh_logo.png';
import { AuthContext } from "../context/AuthContext";

const Login = () =>{
    
    const navigate = useNavigate();
    const {isLogged,setLogged} = useContext(AuthContext);
    

    useEffect(()=>{
        if(isLogged){
            navigate('/');
        }
    },[]);
    const handleViewPassword=()=>{
        let password = document.getElementById("password");
        let eye = document.querySelector('.input-pass');
        eye.classList.replace('fa-eye-slash','fa-eye')
        if (password.type === 'password'){
            password.type = 'text';
        }else{
            eye.classList.replace('fa-eye','fa-eye-slash');
            password.type = 'password';
        }
        
    }

    const handleLogin = async()=>{
        const email = document.getElementById('e_mail').value;
        const password = document.getElementById('password').value;
        if(email === '' || password===''){
            alert("Input fields are empty");
        }else{
            const res = await axios.post('http://localhost:5000/auth/login',{'email':email,'password':password});
            if(res.data.status === 'success'){
            localStorage.setItem('token',res.data.token);
            setLogged(true);
            navigate('/');
            // alert("Logged in");
            }
            else {
            alert(res.data.msg);
            }
        }
    }
    return ( 
        <div className="login-page-container">
            <div className="login-page">
                <img  src={login_img} alt="person unlocking a lock" className='cuh_logoLogin' />
                <div className="login-form">
                    <form onSubmit={(e)=>{e.preventDefault();}} autoComplete="off">
                     <p id="welcome">Welcome Back!</p>
                      
                        <h1>Student Login</h1>
                        <h2>Login to your account</h2>
                        <input type="email" name="e_mail" id="e_mail" placeholder="E-Mail" />
                        <div className="login-password">
                            <input type="password" name="password" id="password" placeholder="Password" />
                            <i onClick={handleViewPassword} className="fas fa-eye-slash input-pass"></i>
                        </div>
                      <input type="submit" onClick={handleLogin}  value="Log In"/>
                        
                        <p id="new-here">
                        <Link to='/SignUp'>New Here? sign-up instead</Link>
                            </p>
                        <p id="forget-password">Forget Password?</p>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Login;







