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
import React, {useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../actions/userActions";

import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,
  FormFeedback,
} from "reactstrap";


const Register=()=> {
  
  const [password, setPassword]= useState('');
  const [confirmpassword, setConfirmpassword]=useState('');
  const [pass, passState]=useState('');
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState('')
  const [isDisabled, setIsdisabled]= useState(true)

  const validateEmail = async (e) => {
    var class_valid = "is-valid form-control";
    var class_invalid = "is-invalid form-control";
    
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@iitk.ac.in/.test(e.value)
    ){
      setEmail(e.value);
      setEmailError("  ");
      e.className=class_valid;
    }
    else{
      setEmailError("invalid iitk email");
      e.className=class_invalid;
    }
  }
  
  const onRegister = async (e)=> {
   
    if(setEmailError==="valid email"&& password==confirmPassword){
      if (e) e.preventDefault();
    try{
      const user ={
        email: email,
        password: password
      };

      await dispatch(register(user.email,user.password));
    }catch (err) {
      console.log("Error while registering");
    }
    }else{
      setIsdisabled(false);
    }
       
  };
  const confirmPassword = async (e) => {
    var class_valid = "is-valid form-control";
    var class_invalid = "is-invalid form-control";

    setConfirmpassword(e.value);
    if(e.value!==password){
      passState('Passwords did not match!');
      e.className=class_invalid;
    }else{
      passState(' ');
      setIsdisabled(false);
      e.className=class_valid;
    }
  };
 
  const dispatch = useDispatch();
  
  return ( 
    <>
      <Col lg="6" md="8">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
           
            <Form role="form" >
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input required valid
                    placeholder="IITK Email ID"
                    type="email"
                    autoComplete="off"
                    onChange={(e) => validateEmail(e.target)}
                  />
                  <FormFeedback invalid>{emailError}</FormFeedback>
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input required valid
                    type="password"                
                    placeholder="Password"
                    onChange ={(e) => setPassword(e.target.value)}
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
                  <Input required valid
                    class="is-invalid from-control"
                    onChange={(e) => confirmPassword(e.target)}
                    placeholder="Confirm Your Password"
                    type="password"
                    autoComplete="off"
                  />
                  <FormFeedback invalid>{pass}</FormFeedback>
                </InputGroup>
              </FormGroup>
              
              <div className="text-center">
                <Button className="mt-4" 
                        id="submit"
                        disabled={isDisabled}
                        color="primary" 
                        type="submit"
                        onClick={ (e) => onRegister(e)}
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
