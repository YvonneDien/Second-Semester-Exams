import React from "react";
import {Form} from "react-bootstrap";
import {Button} from "react-bootstrap";
//import GoogleButton from "react-google-button";

const Login= () => {
return(
  <>
    <div className="p-4 box">
      <h2 className="mb-3">Firebase Auth Login</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail" >
          <Form.Control type="email" placeholder="Email address"  />
      </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Pasword" />
              </Form.Group>

              <div className="d-grid gap-2">
                <Button variant="primary" type="submit">
                  Log In
                  </Button>
                </div>
      </Form>
              </div>;
  </>
                
)
  
};
    export default Login;