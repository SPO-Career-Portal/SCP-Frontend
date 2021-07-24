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
import React, { useState } from "react";

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
import { useDispatch } from "react-redux";
import { login } from "../../actions/userActions";
import { LOGIN } from "../../utils/requests";
import { compose } from "redux";
import axios from "axios";

const base_url = "http://127.0.0.1:8000/"

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState]= useState("");

  const onLogin = async (e) => {
    
    try {
      //dummy API(update this for sending credentials to backend)
       axios.defaults.withCredentials = true;
       const res = await axios.post("/user/auth/login/",{
          username:username,
          password: password,
       });
       if (res.data.code==401) {setState("Incorrect Username or Password!")  
       }
       else if(res.data.code==200){
         dispatch(login(username))
       }
      

    } catch (err) {
      setState("Something went Wrong!")
    }
  };

  const dispatch = useDispatch();
  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <p className="text-lead text-muted text-center">
              Sign in to start your session!
            </p>
            <Form role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    required
                    valid
                    placeholder="IITK Username"
                    type="text"
                    autoComplete="on"
                    onChange={(e) => setUsername(e.target.value)}
                  />
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
                    required
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
              <div className="text-center" style={{color : "Red"}}>{state}</div>
              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                />
                <label
                  className="custom-control-label"
                  htmlFor=" customCheckLogin"
                >
                  <span className="text-muted">Remember me</span>
                </label>
              </div>
              <div className="text-center">
                <Button
                  className="my-4"
                  color="primary"
                  type="button"
                  onClick={(e) => onLogin(e)}
                >
                  Sign in
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="12" className="text-right">
            <a
              className="text-light "
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Forgot password?</small>
            </a>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Login;
