/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { error, event } from "jquery";
import React, { useEffect, useState } from "react";
import validator from 'validator'

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";




function checkpassword(x,y) {
  if(!x || !y) {
    document.getElementById("Passwordmatch").style.color="red"
    document.getElementById("Passwordmatch").innerHTML="Please set up your Password";
  }
  else if(x!==y) {
    document.getElementById("Passwordmatch").style.color="red";
    document.getElementById("Passwordmatch").innerHTML="Passwords did not match!";
    document.getElementById("submit").disabled=true;
  }
  else if(x===y){
    document.getElementById("submit").disabled=false;
    document.getElementById("Passwordmatch").innerHTML= "";

  }
}

function handlesubmit() {
  //api
  
}
const Register=()=> {
  const [password, setPassword]= useState('');
  const [confirmpassword, setConfirmpassword]=useState('');
  const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    var email = e.target.value
  
    if (!validator.isEmail(email)) {
      setEmailError('invalid!')
    } else {
      setEmailError('')
    }
  }
  
  return ( 
    <>
      <Col lg="6" md="8">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
           
            <Form role="form" onsubmit={()=> handlesubmit()}>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="IITK Email ID"
                    type="email"
                    autoComplete="off"
                    onChange={(e) => validateEmail(e)}
                  />
                   <div className="text-muted text-center mt-2 mb-4">
                       <span style={{
                          fontWeight: 'light',
                         color: 'red',
                         }}>{emailError}
                       </span>
                   </div>
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    type="password"                
                    placeholder="Password"
                    onChange ={event => setPassword(event.target.value)}
                    autoComplete="off"  
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative-2" id="ConfirmPassword">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-check-bold" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    
                    onChange={event => setConfirmpassword(event.target.value)}
                    placeholder="Confirm Your Password"
                    type="password"
                    autoComplete="off"
                    onKeyUp={()=> checkpassword(password,confirmpassword)}
                    
                  />
                </InputGroup>
              </FormGroup>
              <div id="Passwordmatch"></div>
              <div className="text-center">
                <Button className="mt-4" 
                        id="submit"
                        color="primary" 
                        type="submit"
                >
                  Register
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
    
  
};

export default Register;
