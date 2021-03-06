import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import GoogleButton from "react-google-button";
import { db, auth } from "../firebase";
import { collection, getDocs, where, query } from "firebase/firestore";

export default function Login() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState("");
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
    } catch (error) {
      console.log(error.message);
    }
  };
  async function handleSubmit(e) {
    e.preventDefault();
    if (email === "") {
      try {
        setError("");
        setLoading(true);
        const q = query(
          collection(db, "RegistrationInfo"),
          where("userName", "==", userName)
        );

        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
          console.log("No matching documents.");
          setError("No matching username");
          return;
        } else {
          querySnapshot.forEach((doc) => {
            console.log(doc.id, "=>", doc.data());
            console.log("tesrt");
            for (var i = 0; i < userids.length; i++) {
              if (doc.data()["userName"].search(userids[i]) === 0) {
                navigate(`/${userids[i]}`);
              }
            }
          });
        }
      } catch (e) {
        console.log(e);
        setError("Failed to sign in");
      }
      setLoading(false);
    } else handleSubmit2();
  }

  async function handleSubmit2() {
    try {
      setError("");
      setLoading(true);
      const q = query(
        collection(db, "RegistrationInfo"),
        where("email", "==", email)
      );

      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        console.log("No matching documents.");
        setError("No matching username");
        return;
      } else {
        querySnapshot.forEach((doc) => {
          console.log(doc.id, "=>", doc.data());
          console.log("tesrt");
          for (var i = 0; i < userids.length; i++) {
            if (doc.data()["userName"].search(userids[i]) === 0) {
              navigate(`/${userids[i]}`);
            }
          }
        });
      }
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
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
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
                onChange={(e) => setPassword(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>
            <br />
            <Button
              disabled={loading}
              type="submit"
              className="w-100"
              onClick={handleSubmit}
            >
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
