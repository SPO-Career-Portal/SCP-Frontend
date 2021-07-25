import React, { useState } from "react";

// reactstrap components
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
  Row,
  Col,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { login } from "../../actions/userActions";
import axios from "axios";

const base_url = "http://127.0.0.1:8000/";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [admin, setAdmin] = useState(false);
  const [state, setState] = useState("");

  const onLogin = async (e) => {
    //dummy API(update this for sending credentials to backend)
    axios.defaults.withCredentials = true;
    if (admin) {
      await axios
        .post(base_url + "admin/login/", {
          username: username,
          password: password,
        })
        .then((res) => {
          if (res.status === 200) {
            dispatch(login(username, admin));
          }
        })
        .catch((err) => {
          console.log(err);
          setState("Incorrect username or password");
        });
    } else {
      await axios
        .post(base_url + "user/auth/login/", {
          username: username,
          password: password,
        })
        .then((res) => {
          if (res.status === 200) {
            dispatch(login(username, admin));
          }
        })
        .catch((err) => {
          console.log(err);
          setState("Incorrect username or password");
        });
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
              <div className="text-center" style={{ color: "red" }}>
                {state}
              </div>
              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                  onChange={(e) => setAdmin(!admin)}
                />
                <label
                  className="custom-control-label"
                  htmlFor=" customCheckLogin"
                >
                  <span className="text-light" style={{ color: "white" }}>
                    Admin Login
                  </span>
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
