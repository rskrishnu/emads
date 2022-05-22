import React, {useState} from 'react';
import Header from './header';
import './style.css'
import {addDoc, collection} from 'firebase/firestore';
import { auth, db } from '../firebase';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown  from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom';

function RegistrationForm() {
    const [userType, setUserType] = useState(null);
    const [location, setLocation] = useState(null);
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [userName, setUserName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phoneNo, setPhoneNo] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);

    const user_RegistrationInfo = collection(db, 'RegistrationInfo');

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
        if(id === "phoneNo"){
            setPhoneNo(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }

    }

    const handleSubmit  = async() => {
        await addDoc(user_RegistrationInfo, {userType, location, firstName, lastName, userName, phoneNo, email, password});
    }

    return(
      <div className="form">
          <div className="form-body">
              <Header dataFromParent = 'User Registration Form'></Header>
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
              <div className="email">
                  <Form.Label className="form__label" for="email">Email </Form.Label>
                  <Form.Control  type="email" id="email" onChange = {(e) => handleInputChange(e)} className="form__input" placeholder="Email"/>
              </div>
              <div className="phoneno">
                  <Form.Label className="form__label" for="phoneNo">Mobile Number </Form.Label>
                  <Form.Control  type="number" id="phoneNo" onChange = {(e) => handleInputChange(e)} className="form__input" placeholder="0000000000"/>
              </div>
              <div className="password">
                  <Form.Label className="form__label" for="password">Password </Form.Label>
                  <Form.Control className="form__input" type="password"  id="password" onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
              </div>
              <div className="confirm-password">
                  <Form.Label className="form__label" for="confirmPassword">Confirm Password </Form.Label>
                  <Form.Control className="form__input" type="password" id="confirmPassword" onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>
              </div>
          </div>
        <Button type="submit" onClick={()=>handleSubmit()}>Register using mail ID</Button> 
        <Form.Group>
        <Link to="/phonesignup">
          <div className="d-grid gap-2 mt-3">
            <Button variant="success" type="Submit">
              Sign in with Phone
            </Button>
          </div>
        </Link>
        </Form.Group>   
        
        </div>
    )       
}
export default RegistrationForm;