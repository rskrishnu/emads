import React, {useRef, useState} from 'react'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import {useAuth} from '../contexts/AuthContext'
import GoogleButton from "react-google-button";

export default function Login(){
    
    const passwordRef= useRef()
    const {login,googleSignIn} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try {
          await googleSignIn();
          navigate("/");
        } catch (error) {
          console.log(error.message);
        }
      };
    async function handleSubmit(e){
        e.preventDefault()

        try{
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            navigate('/')
        }
        catch(e){
            console.log(e)
            setError('Failed to sign in')
        }
        setLoading(false)
    }
    return(
        <>
       <Card>
           <Card.Body>
               <h2 className="text-center mb-4">Log In</h2>
               {error && <Alert variant = 'danger'>{error}</Alert>}
               <Form onSubmit={handleSubmit}>
                   <Form.Group id = "email">
                       <Form.Label>Email</Form.Label>
                       <Form.Control type='email' ref={emailRef} required></Form.Control>
                   </Form.Group>
                   <Form.Group id = "phoneno">
                  <Form.Label className="form__label" for="phoneNo">Mobile Number </Form.Label>
                  <Form.Control  type="number" id="phoneNo" className="form__input" placeholder="0000000000"/>
              </Form.Group>
                   <Form.Group id = "password">
                       <Form.Label>Password</Form.Label>
                       <Form.Control type='password' ref={passwordRef} required></Form.Control>
                   </Form.Group>
            
                   <Button disabled = {loading} type='submit' className='w-100'>Login</Button>
                   <Form.Group id = "googlesignin">
          <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
          />
        </Form.Group>
        
               </Form>
           </Card.Body>
       </Card>
    <div className='w-100 text-center mt-2'>
        Not Registered? 
        <Link to="/signup">Register now</Link>
       
    </div>
    </>
    )
    
}