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
  FormFeedback,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { login } from "../../actions/userActions";
import { compose } from "redux";
import axios from "axios";

const base_url = "http://127.0.0.1:8000/"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
<<<<<<< HEAD
  const [validemail, setValidemail] = useState(false);

  const email_verification = async (target_email) => {
    var class_valid = "is-valid form-control";
    var class_invalid = "is-invalid form-control";

    target_email.className = class_invalid;
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@iitk.ac.in/.test(target_email.value)
    ) {
      setEmail(target_email.value);
      setValidemail(true);
      target_email.className = class_valid;
    } else {
      setValidemail(false);
      target_email.className = class_invalid;
    }
  };
=======
  const [state, setState]= useState("");
>>>>>>> b89a2e6791798a0df7361803a89c2285704f4e3f

  const onLogin = async (e) => {
    
    try {
<<<<<<< HEAD
      //dummy API
      const data = await LOGIN("users", email, password);

      // storing emailID in redux-store
      dispatch(login(data.email));
=======
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
      

>>>>>>> b89a2e6791798a0df7361803a89c2285704f4e3f
    } catch (err) {
      setState("Something went Wrong!")
    }
  };

  const dispatch = useDispatch();
  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-5">
            <div className="text-muted text-center mt-2 mb-3">
              <small>Sign in with</small>
            </div>
            <div className="btn-wrapper text-center">
              <Button
                className="btn-neutral btn-icon"
                color="default"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <span className="btn-inner--icon">
                  <img
                    alt="..."
                    src={
                      require("../../assets/img/icons/common/github.svg")
                        .default
                    }
                  />
                </span>
                <span className="btn-inner--text">Github</span>
              </Button>
              <Button
                className="btn-neutral btn-icon"
                color="default"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <span className="btn-inner--icon">
                  <img
                    alt="..."
                    src={
                      require("../../assets/img/icons/common/google.svg")
                        .default
                    }
                  />
                </span>
                <span className="btn-inner--text">Google</span>
              </Button>
            </div>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Or sign in with credentials</small>
            </div>
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
                    placeholder="IITK Email address"
                    type="email"
                    autoComplete="new-email"
                    onChange={(e) => email_verification(e.target)}
                  />
                  <FormFeedback invalid="true">Invalid Email ID</FormFeedback>
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
                  onClick={validemail ? (e) => onLogin(e) : undefined}
                >
                  Sign in
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Forgot password?</small>
            </a>
          </Col>
          <Col className="text-right" xs="6">
            <a className="text-light" href="/auth/register">
              <small>Create new account</small>
            </a>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Login;
