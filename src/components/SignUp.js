import React, {useCallback} from 'react'
import {Card, Form, Button} from 'react-bootstrap'
import app from "../firebase.js";
import { withRouter } from "react-router";
import { Link } from 'react-router-dom'

function SignUp({history}) {

    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
          await app
            .auth()
            .createUserWithEmailAndPassword(email.value, password.value);
          history.push("/");
        } catch (error) {
          alert(error);
        }
      }, [history]);

    return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Sign Up here!</Card.Title>
                        <Form onSubmit={handleSignUp}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="email"/>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password"/>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password Confirmation</Form.Label>
                                <Form.Control type="password" placeholder="Confirm Password" name="confirmPassword"/>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Sign Up
                            </Button>
                            </Form>
                    </Card.Body>
                </Card>
                <Link style={{padding: '1.25rem'}} href="/login">
                    {"Already have an account? Log in"}
                </Link>
            </div>
    )
}

export default withRouter(SignUp)
