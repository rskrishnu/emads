import React, { useState } from "react";
import {
  Form,
  Button,
  Card,
  Alert,
  Col,
  Row,
  CardGroup,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";

export default function () {
  const navigate = useNavigate();
  const [tothispage, setredirectpage] = useState("");

  const handleclick = async (e) => {
    e.preventDefault();

    try {
      navigate(`/admin`);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleclick2 = async (e) => {
    e.preventDefault();

    try {
      navigate(`/pw/create`);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    // <CardGroup>
    //   <Card>
    //     <Card.Img
    //       variant="top"
    //       src="https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg"
    //     />
    //     <Card.Body>
    //       <Card.Title>Card title</Card.Title>
    //       <Card.Text>
    //         This is a wider card with supporting text below as a natural lead-in
    //         to additional content. This content is a little bit longer.
    //       </Card.Text>
    //     </Card.Body>
    //     <Card.Footer>
    //       <small className="text-muted">Last updated 3 mins ago</small>
    //     </Card.Footer>
    //   </Card>
    //   <Card>
    //     <Card.Img variant="top" src="holder.js/100px160" />
    //     <Card.Body>
    //       <Card.Title>Card title</Card.Title>
    //       <Card.Text>
    //         This card has supporting text below as a natural lead-in to
    //         additional content.{" "}
    //       </Card.Text>
    //     </Card.Body>
    //     <Card.Footer>
    //       <small className="text-muted">Last updated 3 mins ago</small>
    //     </Card.Footer>
    //   </Card>
    //   <Card>
    //     <Card.Img variant="top" src="holder.js/100px160" />
    //     <Card.Body>
    //       <Card.Title>Card title</Card.Title>
    //       <Card.Text>
    //         This is a wider card with supporting text below as a natural lead-in
    //         to additional content. This card has even longer content than the
    //         first to show that equal height action.
    //       </Card.Text>
    //     </Card.Body>
    //     <Card.Footer>
    //       <small className="text-muted">Last updated 3 mins ago</small>
    //     </Card.Footer>
    //   </Card>
    // </CardGroup>
    <Row xs={1} md={1} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src="https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg"
            />
            <Card.Body>
              <Card.Title>Want to start a new project?</Card.Title>
              <Card.Text>
                You are at the right place. Start by adding all required
                informations related to your project
              </Card.Text>
              <Button variant="primary" onClick={handleclick2}>
                Create project
              </Button>
            </Card.Body>
          </Card>
          <br />
          <Card>
            <Card.Img
              variant="top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl9T4mHjNilTmjPU6UXiJ-lnI5p1c4fqvYGw&usqp=CAU"
            />
            <Card.Body>
              <Card.Title>Project 1</Card.Title>
              <Card.Text>EMADS</Card.Text>
              <Button variant="primary" onClick={handleclick}>
                Login as admin
              </Button>
            </Card.Body>
          </Card>
          <br />
        </Col>
      ))}
    </Row>
  );
}
