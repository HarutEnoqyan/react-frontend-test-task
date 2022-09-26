import React, { useState } from "react";
import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";
import moment from "moment/moment";
import { Button, Form, Container, Row, Col} from "react-bootstrap";

export const CreateEvent = () => {
  const [eventForm, setEventForm] = useState({})

  const inputChangeHandler = (e, name = '') => {
    if(e instanceof moment) {
      e = {
        target: {
          name: name,
          value: e.format()
        }
      }
    }
    
    setEventForm(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      };
    })
  }
 
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(eventForm)

  }

  return (
    <Container className="py-28">
      <Row>
        <Col>
          <h1 className="text-main-gradient text-center">Create My Event</h1>
        </Col>
      </Row>
      <Row>
        <Col >
          <Form onSubmit={submitHandler}>
            <Row>
              <Form.Group onChange={inputChangeHandler} className="mt-20" controlId="event-name">
                <Form.Label className="mb-1">Event Name</Form.Label>
                <Form.Control type="text" name="event_name" placeholder="Please enter Your event name"/>
              </Form.Group>

              <Form.Group onChange={inputChangeHandler} className="mt-20" controlId="host-name">
                <Form.Label className="mb-1" >Host Name</Form.Label>
                <Form.Control type="text" name="host_name" placeholder="Please enter Your host name"/>
              </Form.Group>

              <Form.Group className="mt-20" controlId="start-time">
                <Form.Label className="mb-1">Start</Form.Label>
                <Datetime onChange={(m) => inputChangeHandler(m, 'start_time')} id="start-time" initialValue={moment()}/>
              </Form.Group>

              <Form.Group className="mt-20" controlId="end-time">
                <Form.Label className="mb-1">End</Form.Label>
                <Datetime onChange={(m) => inputChangeHandler(m, 'end_time')} id="end-time" initialValue={moment()}/>
              </Form.Group>

              <Form.Group onChange={inputChangeHandler} className="mt-20" controlId="location">
                <Form.Label className="mb-1">Location</Form.Label>
                <Form.Control type="text" name="location" placeholder="Please enter event location"/>
              </Form.Group>

              <Form.Group onChange={inputChangeHandler} className="mt-20" controlId="event-photo">
                <Form.Label className="mb-1">Event Photo</Form.Label>
                <Form.Control type="file" name="photo" />
              </Form.Group>
          
              <Col className="mt-20 text-center">             
                <Button type="submit" variant="dark" className="bg-main-gradient border-0 align-items-center">
                  Next
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
//- Event name, Host name, Start and End time/date, Location and Event photo.