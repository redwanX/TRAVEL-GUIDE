import React, { useEffect, useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import Loading from '../../Shared/Loading/Loading';
import SocialAuth from '../SocialAuth/SocialAuth';

const Register = () => {
    const [validated, setValidated] = useState(false);
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const nameRef = useRef('');
    const navigate = useNavigate()
    const [
      createUserWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification: true});
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    
    useEffect(()=>{
      if(error){
        toast(error?.message)
      }
    },[error]);
    useEffect(()=>{
      if(user){
        navigate('/');
      }
    },[user]);

    if(loading){
      return <Loading></Loading>
    }

    


    
    

    const handleRegister = async()=>{
      const name = nameRef.current.value;
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
      
      
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.stopPropagation();
      }
      setValidated(true);
      if(form.checkValidity()===true){
        handleRegister();
        nameRef.current.value=''
        emailRef.current.value=''
        passwordRef.current.value=''
      }
    };
  
    return (
      <div className='pt-5 col col-lg-6 col-12 mx-auto container'>   
        <h1 className='text-secondary fw-bolder'>REGISTER</h1>
        <hr />
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group  controlId="validationCustom00">
            <Form.Label>Name</Form.Label>
            <Form.Control ref={nameRef} type="text" placeholder="Name" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Name.
            </Form.Control.Feedback>
          </Form.Group>
        
        <Form.Group  controlId="validationCustom01">
            <Form.Label>Email</Form.Label>
            <Form.Control ref={emailRef} type="email" placeholder="Email" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="validationCustom02">
            <Form.Label>Password</Form.Label>
            <Form.Control ref={passwordRef} type="password" minLength='6' placeholder="Password" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Password.(Min 6 Charecter Long)
            </Form.Control.Feedback>
          </Form.Group>
        <Button className='rounded-pill mt-3 px-4' type="submit">Register</Button>
      </Form>
      <ToastContainer></ToastContainer>
      <p className='fw-bold py-2'>Already Registered? <Link to='/login' className='text-primary pe-auto text-decoration-none'>Login</Link>  </p>
      <SocialAuth></SocialAuth>
        </div>
  )
}

export default Register