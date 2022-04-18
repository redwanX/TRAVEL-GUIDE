import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useEffect, useRef, useState } from 'react'
import { Button,Form } from 'react-bootstrap';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialAuth from '../SocialAuth/SocialAuth';
const Login = () => {
  //Hooks
  const [userAuthenticate,loadingAuthenticate] = useAuthState(auth)
    const [validated, setValidated] = useState(false);
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);
   
    let from = location.state?.from?.pathname || "/";
    
    //Redirect To home If already Logged in and user is trying to access login page with url
    useEffect(()=>{
      if(userAuthenticate){
        navigate(from,{replace:true});
      }
    },[userAuthenticate]);

    //Error Checking And Showing on toast
    useEffect(()=>{
      if(error){
        toast(error?.message)
      }
    },[error]);

    //If user login it take user back to place form where it came (Checkout)
    useEffect(()=>{
      if(user){
        navigate(from,{replace:true});
      }
    },[user]);

    //Loading
    if(loading||loadingAuthenticate){
      return <Loading></Loading>
    }

    //Handle Signin with email
    const handleLogin = ()=>{
          const email = emailRef.current.value;
          const password = passwordRef.current.value;
          signInWithEmailAndPassword(email,password);
          
    }
    //send reset password 
    const handleResetPassword = async ()=>{
      const email = emailRef.current.value;
      const validateEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email);
      if(email && validateEmail){
        sendPasswordResetEmail(auth, email)
        .then(() => {
          toast("Reset Link Sent To email")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast(errorMessage)
        });

      }
      else{
          toast('please Enter Your Valid Email Address');
      }
    }
    //validate input field
    const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.stopPropagation();
      }
      setValidated(true);
      if(form.checkValidity()===true){
          handleLogin();
          setValidated(false);
      }
    };
  
    return (
      <div style={{minHeight: 'calc(100vh - 142px - 72px)'}} className=' pt-5 col col-lg-6 col-12 mx-auto container'>   
        <h1 className='text-secondary fw-bolder'>LOGIN</h1>
        <hr />
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group  controlId="validationCustom01">
            <Form.Label>Email</Form.Label>
            <Form.Control ref={emailRef} type="email" placeholder="Email" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="validationCustom02">
            <Form.Label>Password</Form.Label>
            <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Password.
            </Form.Control.Feedback>
          </Form.Group>
        <Button className='rounded-pill mt-3 px-4' type="submit">Login</Button>
      </Form>
      
      <p className='fw-bold mt-2 p-0 m-0'>New User? <Link to='/register' className='text-primary pe-auto text-decoration-none ps-2'>Register</Link>  </p>
      <p className='fw-bold p-0 m-0'>Forgot Password?<button className='btn btn-link p-0 fw-bold text-primary pe-auto  ps-2 text-decoration-none' onClick={handleResetPassword}>Reset Password</button> </p>
      
      <SocialAuth></SocialAuth>
        </div>
    )
 
}

export default Login