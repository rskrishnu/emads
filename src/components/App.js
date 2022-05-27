import React from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import SignUp from "./Signup";
import Dashboard from "./Dashboard";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationForm from "./registrationForm";
import PatientRegForm from "./PatientIntakeForm";
import PhoneSignUp from "./PhoneSignUp";
import UserList from "./UserList";
import Adminpage from "./adminpage";
import DashBoAsha from "./DashBoAsha";
import DashBoSR from "./DashBoSR";
import DashBoFR from "./DashBoFR";
import DashBoPHC from "./DashBoPHC";
import Projectworkspace from "./projectworkspace";
import Createproject from "./createproject";

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/asha" element={<DashBoAsha />} />
              <Route path="/sr" element={<DashBoSR />} />
              <Route path="/fr" element={<DashBoFR />} />
              <Route path="/phc" element={<DashBoPHC />} />
              <Route path="/pw" element={<Projectworkspace />} />
              <Route path="/pw/create" element={<Createproject />} />
              <Route
                path="/admin/registration"
                element={<RegistrationForm />}
              />
              <Route path="/patient" element={<PatientRegForm />} />
              <Route path="/phonesignup" element={<PhoneSignUp />} />
              <Route path="/userlist" element={<UserList />} />
              <Route path="/admin" element={<Adminpage />} />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
