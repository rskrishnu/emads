import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Header from './header.js'
import './style.css'

class AshaEntryForm extends Component{
    render() {
        return (
          <div classname='form'>
          <div className="form-body">
          <Header dataFromParent = "Seizure Entry Form"></Header>
          <Form.Group class="mb-3">
            <Form.Label class="d-flex justify-content-between">Name of Patient</Form.Label>
            <Form.Control type="text" 
                          placeholder="Auto retrived name of patient" disabled='1'/>
            <Form.Label class="d-flex justify-content-between">EMADS ID</Form.Label>
            <Form.Control type="text" 
                          placeholder="This ID is autoretrived by EMADS system" disabled='1'/>
            <Form.Label class="d-flex justify-content-between">Treating PHC Doctor</Form.Label>
            <Form.Control type="text" 
                          placeholder="This is autoretrived by EMADS system" disabled = '1'/>
          </Form.Group>
          <a href=''> Enter Medication Adherence Report (Popup floating form)</a>
          <br></br>
          <a href =''>Copy Seizure Diary Entries (Popup floating form)</a>
          <Form.Group class="mb-3">
            <Form.Label class="d-flex justify-content-between">Schooling Advice</Form.Label>
            <Form.Control type="text" 
                          placeholder="(May be dropdown)"/>
            <Form.Label class="d-flex justify-content-between">Marriage Advice</Form.Label>
            <Form.Control type="text" 
                          placeholder="(May be dropdown)"/>
            <Form.Label class="d-flex justify-content-between">Work Advice</Form.Label>
            <Form.Control type="text" 
                          placeholder="(May be dropdown)"/>
            <Form.Label class="d-flex justify-content-between">Driving Advice</Form.Label>
            <Form.Control type="text" 
                          placeholder="(May be dropdown)"/>
            <br></br>
            <CardGroup>
              <Card class="mt-3">
                <Card.Body>
                <Card.Text>
                  Inputs for Women with Epilepsy
                </Card.Text>
                <Form.Label class="d-flex justify-content-between">Pre-Pregnancy Pack</Form.Label>
                <Form.Control type="text" 
                              placeholder="(May be dropdown)"/>
                <Form.Label class="d-flex justify-content-between">Follic Acid USe</Form.Label>
                <Form.Control type="text" 
                              placeholder="(May be dropdown)"/>
                <Form.Label class="d-flex justify-content-between">Post-Pregnancy Pack</Form.Label>
                <Form.Control type="text" 
                              placeholder="(May be dropdown)"/>
                </Card.Body>
              </Card>
            </CardGroup>
            <br></br>
            <Form.Group class="mb-3">
              <Form.Label class="d-flex justify-content-between">Any other specific comments</Form.Label>
              <Form.Control as="textarea" rows="6"
                            placeholder="Enter comments here"/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Click here to submit form
            </Button>
          </Form.Group>
          </div>
          </div>
        );
      }   
}

export default AshaEntryForm;