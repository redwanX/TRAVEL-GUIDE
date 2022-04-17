import React, { useEffect, useRef, useState } from 'react'
import { Button,Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialAuth from '../SocialAuth/SocialAuth';
const Login = () => {
  
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
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    let from = location.state?.from?.pathname || "/";
    useEffect(()=>{
      if(error){
        toast(error?.message)
      }
    },[error]);
    useEffect(()=>{
      if(user){
        navigate(from,{replace:true});
      }
    },[user]);

    if(loading){
      return <Loading></Loading>
    }
    const handleLogin = ()=>{
          const email = emailRef.current.value;
          const password = passwordRef.current.value;
          signInWithEmailAndPassword(email,password);
          
    }
    const handleResetPassword = async ()=>{
      const email = emailRef.current.value;
      const validateEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email);
      if(email && validateEmail){
        await sendPasswordResetEmail(email);
        toast('Email Sent');
      }
      else{
          toast('please Enter Your Valid Email Address');
      }
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.stopPropagation();
      }
      setValidated(true);
      if(form.checkValidity()===true){
          handleLogin();
      }
    };
  
    return (
      <div className='pt-5 col col-lg-6 col-12 mx-auto container'>   
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
      <div className='d-flex align-items-center justify-content-between'>
      <p className='fw-bold py-2'>New User? <Link to='/register' className='text-primary pe-auto text-decoration-none'>Register</Link>  </p>
      <p className='fw-bold'>Forgot Password?<button className='btn btn-link p-0 fw-bold text-primary pe-auto text-decoration-none' onClick={handleResetPassword}>Reset Password</button> </p>
      
      </div>
      <SocialAuth></SocialAuth>
      <ToastContainer></ToastContainer>
        </div>
    )
 
}

export default Login