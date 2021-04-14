import React, {useCallback, useContext} from 'react'
import {Card, Form, Button} from 'react-bootstrap'
import app from "../firebase.js";
import { withRouter, Redirect } from "react-router";
import { Link } from 'react-router-dom'
import { AuthContext } from "./AuthContext.js";

function Login({history}) {

    const handleLogin = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
          await app
            .auth()
            .signInWithEmailAndPassword(email.value, password.value);
          history.push("/");
        } catch (error) {
          alert(error);
        }
      }, [history]);

      const { currentUser } = useContext(AuthContext);
      if (currentUser) {
        return <Redirect to="/" />;
      }

    return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Sign Up here!</Card.Title>
                        <Form onSubmit={handleLogin}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="email"/>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password"/>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Log In
                            </Button>
                            </Form>
                    </Card.Body>
                </Card>
                <Link style={{padding:'1.25rem'}} to="/signup">
                    {"Don't have an account? Sign Up"}
                </Link>
            </div>
    )
}

export default withRouter(Login)
