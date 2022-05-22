import React from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import SignUp from "./Signup";
import Dashboard from "./Dashboard";
import Login from "./Login";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import RegistrationForm from "./registrationForm";
import PatientRegForm from "./PatientIntakeForm";
import PhoneSignUp from "./PhoneSignUp";

function App() {
  return (
    
      <Container className="d-flex align-items-center justify-content-center"
  style={{minHeight: "100vh"}}>
    <div className="w-100" style={{maxWidth: "400px"}}>
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="/" element = {<Dashboard/>}/>
            <Route path="/signup" element = {<SignUp/>}/>
            <Route path="/login" element = {<Login/>}/>
            <Route path="/registration" element = {<RegistrationForm/>}/>
            <Route path="/patient" element = {<PatientRegForm/>}/>
            <Route path="/phonesignup" element={<PhoneSignUp />} />
            
          </Routes>
        </AuthProvider>
      </Router>
    </div>
    
  </Container>
   
  
  )  
}

export default App;
