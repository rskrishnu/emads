import "./style.css";
import React, { Component, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./header.js";
import { addDoc, collection, deleteDoc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { auth, db, storage } from "../firebase";
import { v4 } from "uuid";

// const MyComponent = () => {
//   const fhirResource = JSON.parse(fhirResourceAsJsonString);
//   console.log(fhirResource)
//   return (
//     <FhirResource
//       fhirResource={fhirResource}
//       fhirVersion={fhirVersions.R4}
//       fhirIcons={fhirIcons}
//       withCarinBBProfile
//     />
//   );

// };
const PatientRegForm = () => {
  const [name, setName] = useState(null);
  const [emadsId, setemadsId] = useState(null);
  const [Occupation, setOccupation] = useState(null);
  const [age, setAge] = useState(null);
  const [gender, setgender] = useState(null);
  const [weight, setweight] = useState(null);
  const [FirstSeizureDate, setfDate] = useState(null);
  const [EdaysWithSeizure, setEstimateddays] = useState(null);
  const [ConvFreq, setconvfreq] = useState(null);
  const [marStatus, setmarStatus] = useState(null);
  const [Equalific, seteduqual] = useState(null);
  const [BirthHypoxia, setBHypoxia] = useState(null);
  const [ChiFibriSeizure, setCFSeizure] = useState(null);
  const [ChiEnce, setCEnce] = useState(null);
  const [Neonatal, setNeonatal] = useState(null);
  const [Kernicterus, setkernicterus] = useState(null);
  const [comments, setcomments] = useState(null);
  const [PHCDoctor, setPHCD] = useState(null);
  const [asha, setAsha] = useState(null);
  const [imageUpload, setImageUpload] = useState(null);
  const ref = React.createRef();
  const Patient_RegistrationInfo = collection(db, "PatientRegRecord");
  const handleSubmit = async () => {
    console.log("Name is ", name, age);
    await addDoc(Patient_RegistrationInfo, {
      name,
      emadsId,
      Occupation,
      age,
      gender,
      weight,
      FirstSeizureDate,
      EdaysWithSeizure,
      ConvFreq,
      marStatus,
      Equalific,
      BirthHypoxia,
      ChiFibriSeizure,
      ChiEnce,
      Neonatal,
      Kernicterus,
      comments,
      PHCDoctor,
      asha,
    });
  };

  const uploadImage = () => {
    console.log(imageUpload);
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    console.log("test");
    uploadBytes(imageRef, imageUpload).then(() => {
      alert("Image uploaded");
    });
  };

  return (
    <div classname="form" id="generatepdf">
      <div className="form-body" ref={ref}>
        <Header dataFromParent="Patient Intake Form"></Header>
        <Row>
          <Col>
            <div className="image">
              <input
                type="file"
                label="Patient Image"
                onChange={(event) => {
                  setImageUpload(event.target.value);
                }}
              ></input>
              <button onClick={uploadImage}>Upload patient Image</button>
            </div>
            <Form.Group
              class="mb-3"
              value={name}
              onChange={(e) => setName(e.target.value)}
            >
              <Form.Label class="d-flex justify-content-between">
                Name of Patient
              </Form.Label>
              <Form.Control
                type="text"
                id="Name"
                placeholder="Enter full name"
              />
            </Form.Group>
            <Form.Group
              class="mb-3"
              value={emadsId}
              onChange={(e) => setemadsId(e.target.value)}
            >
              <Form.Label class="d-flex justify-content-between">
                EMADS ID
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="This ID is autogenrated by EMADS system"
              />
            </Form.Group>
            <Form.Group
              class="mb-3"
              value={Occupation}
              onChange={(e) => setOccupation(e.target.value)}
            >
              <Form.Label class="d-flex justify-content-between">
                Occupation
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Occupation of the patient may be dropdown"
              />
            </Form.Group>
            <Form.Group
              class="mb-3"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            >
              <Form.Label class="d-flex justify-content-between">
                Age
              </Form.Label>
              <Form.Control type="number" placeholder="Enter Age" id="Age" />
            </Form.Group>
            <Form.Group
              class="d-flex mb-3"
              value={gender}
              onChange={(e) => setgender(e.target.value)}
            >
              <div key="inline-radio">
                <Form.Label class="px-3">Gender</Form.Label>
                <Form.Check
                  inline
                  label="Male"
                  name="group1"
                  type="radio"
                  id="inline-radio-1"
                />
                <Form.Check
                  inline
                  label="Female"
                  name="group1"
                  type="radio"
                  id="inline-radio-2"
                />
              </div>
            </Form.Group>
            <Form.Group
              class="mb-3"
              value={weight}
              onChange={(e) => setweight(e.target.value)}
            >
              <Form.Label class="d-flex justify-content-between">
                Body Weight
              </Form.Label>
              <Form.Control type="number" placeholder="Add Body Weight in Kg" />
            </Form.Group>
            <Form.Group
              class="mb-3"
              value={FirstSeizureDate}
              onChange={(e) => setfDate(e.target.value)}
            >
              <Form.Label class="d-flex justify-content-between">
                Date of first seizure
              </Form.Label>
              <Form.Control type="date" name="Date of first seizure" />
            </Form.Group>
            <Form.Group
              class="mb-3"
              value={EdaysWithSeizure}
              onChange={(e) => setEstimateddays(e.target.value)}
            >
              <Form.Label class="d-flex justify-content-between">
                Estimated Days with Seizures
              </Form.Label>
              <Form.Control
                type="number"
                placeholder="Estimated Days with Seizures"
              />
            </Form.Group>
            <Form.Group
              class="mb-3"
              value={ConvFreq}
              onChange={(e) => setconvfreq(e.target.value)}
            >
              <Form.Label class="d-flex justify-content-between">
                Convulsion Frequency
              </Form.Label>
              <Form.Control type="number" placeholder="Convulsion Frequency" />
            </Form.Group>

            <Form.Group
              class="d-flex mb-3"
              value={marStatus}
              onChange={(e) => setmarStatus(e.target.value)}
            >
              <div key="inline-radio">
                <Form.Label class="px-3">Marital Status</Form.Label>
                <br />
                <Form.Check
                  inline
                  label="Married"
                  name="group2"
                  type="radio"
                  id="inline-radio-1"
                />
                <Form.Check
                  inline
                  label="Unmarried"
                  name="group2"
                  type="radio"
                  id="inline-radio-2"
                />
              </div>
            </Form.Group>
            <Form.Group
              class="d-flex mb-3"
              value={Equalific}
              onSelect={(e) => seteduqual(e.target.value)}
            >
              <Dropdown>
                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                  Educational Qualification
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Uneducated</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Below 10th</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">10th pass</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Graduate</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group
              class="d-flex mb-3"
              value={BirthHypoxia}
              onChange={(e) => setBHypoxia(e.target.value)}
            >
              <div key="inline-radio">
                <Form.Label class="px-3">Birth Hypoxia</Form.Label>
                <br />
                <Form.Check
                  inline
                  label="Yes"
                  name="group3"
                  type="radio"
                  id="inline-radio-1"
                />
                <Form.Check
                  inline
                  label="No"
                  name="group3"
                  type="radio"
                  id="inline-radio-2"
                />
              </div>
            </Form.Group>

            <Form.Group
              class="d-flex mb-3"
              value={ChiFibriSeizure}
              onChange={(e) => setCFSeizure(e.target.value)}
            >
              <div key="inline-radio">
                <Form.Label class="px-3">Childhood Fibrile Seizure</Form.Label>
                <br />
                <Form.Check
                  inline
                  label="Yes"
                  name="group4"
                  type="radio"
                  id="inline-radio-1"
                />
                <Form.Check
                  inline
                  label="No"
                  name="group4"
                  type="radio"
                  id="inline-radio-2"
                />
              </div>
            </Form.Group>

            <Form.Group
              class="d-flex mb-3"
              value={ChiEnce}
              onChange={(e) => setCEnce(e.target.value)}
            >
              <div key="inline-radio">
                <Form.Label class="px-3">Childhood Encephalopathy</Form.Label>
                <br />
                <Form.Check
                  inline
                  label="Yes"
                  name="group5"
                  type="radio"
                  id="inline-radio-1"
                />
                <Form.Check
                  inline
                  label="No"
                  name="group5"
                  type="radio"
                  id="inline-radio-2"
                />
              </div>
            </Form.Group>

            <Form.Group
              class="d-flex mb-3"
              value={Neonatal}
              onChange={(e) => setNeonatal(e.target.value)}
            >
              <div key="inline-radio">
                <Form.Label class="px-3">Neonatal Hypoglycemia</Form.Label>
                <br />
                <Form.Check
                  inline
                  label="Yes"
                  name="group6"
                  type="radio"
                  id="inline-radio-1"
                />
                <Form.Check
                  inline
                  label="No"
                  name="group6"
                  type="radio"
                  id="inline-radio-2"
                />
              </div>
            </Form.Group>

            <Form.Group
              class="d-flex mb-3"
              value={Kernicterus}
              onChange={(e) => setkernicterus(e.target.value)}
            >
              <div key="inline-radio">
                <Form.Label class="px-3">Kernicterus</Form.Label>
                <br />
                <Form.Check
                  inline
                  label="Yes"
                  name="group7"
                  type="radio"
                  id="inline-radio-1"
                />
                <Form.Check
                  inline
                  label="No"
                  name="group7"
                  type="radio"
                  id="inline-radio-2"
                />
              </div>
            </Form.Group>

            <Form.Group
              class="mb-3"
              value={comments}
              onChange={(e) => setcomments(e.target.value)}
            >
              <Form.Label class="d-flex justify-content-between">
                Any other specific comments
              </Form.Label>
              <Form.Control
                as="textarea"
                rows="6"
                placeholder="Enter comments here"
              />
            </Form.Group>
            <Form.Group
              class="mb-3"
              value={PHCDoctor}
              onChange={(e) => setPHCD(e.target.value)}
            >
              <Form.Label class="d-flex justify-content-between">
                PHC Doctor
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="PHC Doctor Name autofilled though Login ID"
              />
            </Form.Group>

            <Form.Group
              class="mb-3"
              value={asha}
              onChange={(e) => setAsha(e.target.value)}
            >
              <Form.Label class="d-flex justify-content-between">
                Assigned Asha Worker
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Asha worker Name and ID form Region"
              />
            </Form.Group>

            <Form.Group class="mb-3">
              <Form.Label class="d-flex justify-content-between">
                Emergency contact name
              </Form.Label>
              <Form.Control type="text" placeholder="Emergency contact name" />
            </Form.Group>
            <Form.Group class="mb-3">
              <Form.Label class="d-flex justify-content-between">
                contact number
              </Form.Label>
              <Form.Control type="number" placeholder="contact number" />
            </Form.Group>
            <Form.Group class="mb-3">
              <Form.Label class="d-flex justify-content-between">
                Alternate Emergency contact name
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Alternate Emergency contact name"
              />
            </Form.Group>
            <Form.Group class="mb-3">
              <Form.Label class="d-flex justify-content-between">
                contact number
              </Form.Label>
              <Form.Control
                type="number"
                placeholder="Alternate contact number"
              />
            </Form.Group>
            <Form.Group class="mb-3">
              <Form.Label class="d-flex justify-content-between">
                Medicine name
              </Form.Label>
              <Form.Control
                type="Text"
                placeholder="It is to be given in the following circumstances: ▪ Any tonic clonic seizures lasting for >3 minutes. 
▪ During or after any seizure to prevent more  seizures from occurrence 
▪ After 2 or more seizures occur within 12/24 hours. 
▪ Repeat dose after 20 minutes if I am still having a  seizure and no other help is available "
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Button
            variant="primary"
            type="submit"
            onClick={() => handleSubmit()}
          >
            Click here to submit form
          </Button>
        </Row>
      </div>
      <button>Generate Pdf method1</button>
    </div>
  );
};
export default PatientRegForm;
