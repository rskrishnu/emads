import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import GoogleButton from "react-google-button";

export default function Login() {
  const emailRef = useRef();
  const [userName, setUserName] = useState(null);
  const passwordRef = useRef();
  const { login, googleSignIn, googleSignOut } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const exampleids = ["asha123456", "phc123", "sr234", "fr135"];
  const userids = ["asha", "sr", "fr", "phc"];
  const user = [];

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();

    try {
      googleSignOut();
      await googleSignIn();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      if (exampleids.includes(userName)) {
        for (var i = 0; i < userids.length; i++) {
          if (userName.search(userids[i]) === 0) {
            navigate(`/${userids[i]}`);
          }
        }
      } else {
        setError("Invalid credentials");
      }

      // await login(emailRef.current.value, passwordRef.current.value);
      // navigate("/");
    } catch (e) {
      console.log(e);
      setError("Failed to sign in");
    }
    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef}></Form.Control>
            </Form.Group>
            or
            <Form.Group id="username">
              <Form.Label className="form__label" for="username">
                User name
              </Form.Label>
              <Form.Control
                type="text"
                id="usernameo"
                onChange={(e) => setUserName(e.target.value)}
                className="form__input"
                placeholder=""
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                required
              ></Form.Control>
            </Form.Group>
            <br />
            <Button disabled={loading} type="submit" className="w-100">
              Login
            </Button>
            <Form.Group>
              <Link to="/phonesignup">
                <div className="d-grid gap-2 mt-3">
                  <Button variant="success" type="Submit">
                    Sign in with Phone number
                  </Button>
                </div>
              </Link>
            </Form.Group>
            <br />
            <Form.Group
              id="googlesignin"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <GoogleButton
                className="g-btn"
                type="dark"
                onClick={handleGoogleSignIn}
              />
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
      <br />
      <div className="w-100 text-center mt-2">
        Are you an admin?
        <Link to="/pw"> Go to project workspace</Link>
      </div>
    </>
  );
}
