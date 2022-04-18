import React, { useEffect, useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';
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
    ] = useCreateUserWithEmailAndPassword(auth);
    const [sendEmailVerification, sending, emailError] = useSendEmailVerification(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    
    useEffect(()=>{
      if(error){
        toast(error?.message)
      }
    },[error]);
    

    useEffect(()=>{
      if(user){
        if(!emailError){
          toast('Verification Email Sent, Please Check Your Email For Confirmation Link')
        }
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
      await sendEmailVerification(email)

      
      
      
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
        setValidated(false);
      }
    };
  
    return (
      <div className='vh-100 pt-5 col col-lg-6 col-12 mx-auto container'>   
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
      <p className='fw-bold py-2'>Already Registered? <Link to='/login' className='text-primary pe-auto text-decoration-none'>Login</Link>  </p>
      <SocialAuth></SocialAuth>
        </div>
  )
}

export default Register