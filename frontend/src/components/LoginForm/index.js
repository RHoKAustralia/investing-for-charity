import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Login extends React.Component {
  render() {
    return (
      <Form className="loginForm">
      <h3 className="formTitle">Administrator</h3>
      <hr/>
        <FormGroup>
          <Label>Username:</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="email" />
        </FormGroup>
        {' '}
        <FormGroup>
          <Label>Password:</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password" />
        </FormGroup>  
        {' '}
        <Button color="success" className="loginFormButton">Login</Button>
      </Form>
    );
  }
}  