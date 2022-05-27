import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function () {
  const [username, setUserName] = useState(null);
  const passwordref = useRef();
  const [error, setError] = useState("");
  const [show, setVisibility] = useState(false);
  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && passwordref.current.value === "emadsadmin") {
      setError("");
      navigate("/admin/registration");
      setVisibility(true);
    } else {
      setError("Invalid credentials");
    }
  };
  return (
    <>
      <Card>
        <Card.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <h2 className="text-center mb-4">Admin Login</h2>
          <Form onSubmit={handlesubmit}>
            <Form.Group id="user">
              <Form.Label>User name</Form.Label>
              <Form.Control
                type="text"
                required
                onChange={(e) => setUserName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordref}
                required
              ></Form.Control>
            </Form.Group>
            <br />
            <Button type="submit" className="w-100">
              Login
            </Button>
            {/* <div style={{ visibility: show ? "visible" : "hidden" }}>
              <Form.Group id="newuser">
                <Form.Label>New user name</Form.Label>
                <Form.Control type="text"></Form.Control>
              </Form.Group>
            </div> */}
          </Form>
        </Card.Body>
        <></>
      </Card>
    </>
  );
}
