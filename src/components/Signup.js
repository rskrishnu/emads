import React, {useRef, useState} from 'react'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import {useAuth} from '../contexts/AuthContext'
import { Link } from 'react-router-dom'
import Dropdown  from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function SignUp(){
    const [userType, setUserType] = useState(null);
    const [location, setLocation] = useState(null);
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [userName, setUserName] = useState(null);
    const emailRef = useRef()
    const passwordRef= useRef()
    const confirmpasswordRef = useRef()
    const {signup} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleInputChange = (e) => {
        const {id , value} = e.target;

        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "userName"){
            setUserName(value);
        }
       

    }
    async function handleSubmit(e){
        e.preventDefault()
        if(passwordRef.current.value !== confirmpasswordRef.current.value){
            return setError('Passwords do not match')
            
        }
        try{
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
        }
        catch(e){
            console.log(e)
            setError('Failed to SignUp')
        }
        setLoading(false)
    }
    return(
        <>
       <Card>
           <Card.Body>
               <h2 className="text-center mb-4">User Registration</h2>
               {error && <Alert variant = 'danger'>{error}</Alert>}
               <Form onSubmit={handleSubmit}>
               <div className = "userType">
              <DropdownButton
                alignRight
                title="User Type"
                id="userType"
                onSelect={(e) => setUserType(e)}>
                    <Dropdown.Item eventKey="PHC Doctor" href="#/action-1">PHC Doctor</Dropdown.Item>
                    <Dropdown.Item eventKey="Asha Worker" href="#/action-2">Asha Worker</Dropdown.Item>
                    <Dropdown.Item eventKey="Field Researcher" href="#/action-3">Field Researcher</Dropdown.Item>
                    <Dropdown.Item eventKey="Clinical Researcher" href="#/action-3">Clinical Researcher</Dropdown.Item>
                </DropdownButton>
              </div>
              <div className = "Location">
              <DropdownButton
                alignRight
                title="Location"
                id="location"
                onSelect={(e) => setLocation(e)}>
                    <Dropdown.Item eventKey="Ludhiana" href="#/action-1">Ludhiana</Dropdown.Item>
                    <Dropdown.Item eventKey="Raibareli" href="#/action-2">RaiBareli</Dropdown.Item>
                </DropdownButton>
              </div>
              <div className="firstname">
                  <Form.Label className="form__label" for="firstName">First Name </Form.Label>
                  <Form.Control className="form__input" type="text" onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
              </div>
              <div className="lastname">
                  <Form.Label className="form__label" for="lastName">Last Name </Form.Label>
                  <Form.Control  type="text" name="" id="lastName"  onChange = {(e) => handleInputChange(e)} className="form__input"placeholder="LastName"/>
              </div>
              <div className="username">
                  <Form.Label className="form__label" for="userName">User Name </Form.Label>
                  <Form.Control  type="text" name="" id="userName"  onChange = {(e) => handleInputChange(e)} className="form__input"placeholder="userName"/>
              </div>
              <div className="phoneno">
                  <Form.Label className="form__label" for="phoneNo">Mobile Number </Form.Label>
                  <Form.Control  type="number" id="phoneNo" onChange = {(e) => handleInputChange(e)} className="form__input" placeholder="0000000000"/>
              </div>
                   <Form.Group id = "email">
                       <Form.Label>Email</Form.Label>
                       <Form.Control type='email' ref={emailRef} required></Form.Control>
                   </Form.Group>
                   <Form.Group id = "password">
                       <Form.Label>Password</Form.Label>
                       <Form.Control type='password' ref={passwordRef} required></Form.Control>
                   </Form.Group>
                   <Form.Group id = "password-confirm">
                       <Form.Label>Confirm Password</Form.Label>
                       <Form.Control type='password' ref={confirmpasswordRef} required></Form.Control>
                   </Form.Group>
                   <Button disabled = {loading} type='submit' className='w-100'>Register using Mail ID</Button>
               </Form>
               <Form.Group>
        <Link to="/phonesignup">
          <div className="d-grid gap-2 mt-3">
            <Button variant="success" type="Submit">
              Register with Phone number
            </Button>
          </div>
        </Link>
        </Form.Group>
           </Card.Body>
       </Card>
    <div className='w-100 text-center mt-2'>
        Already have an account? <Link to = "/login">Log In</Link>
    </div>
    </>
    )
    
}