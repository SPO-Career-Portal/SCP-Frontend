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
import { useDispatch } from "react-redux";
import { setPass } from "../../actions/userActions";

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

const SetPass = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pass, passState] = useState("");
  const [isDisabled, setIsdisabled] = useState(true);

  const onSubmit = async (e) => {
    if (password === confirmPassword) {
      if (e) e.preventDefault();
      try {
        const user = {
          password: password,
        };

        await dispatch(setPass(user.password));
      } catch (err) {
        console.log("Error while registering");
      }
    } else {
      setIsdisabled(true);
    }
  };
  const confirmpassword = async (e) => {
    var class_valid = "is-valid form-control";
    var class_invalid = "is-invalid form-control";

    setConfirmPassword(e.value);
    if (e.value !== password) {
      passState("Passwords did not match!");
      e.className = class_invalid;
    } else {
      passState(" ");
      setIsdisabled(false);
      e.className = class_valid;
    }
  };

  const dispatch = useDispatch();

  return (
    <>
      <Col lg="6" md="8">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <Form role="form">
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    required
                    valid
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="off"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup
                  className="input-group-alternative-2"
                  id="ConfirmPassword"
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-check-bold" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    required
                    valid
                    class="is-invalid from-control"
                    onChange={(e) => confirmpassword(e.target)}
                    placeholder="Confirm Your Password"
                    type="password"
                    autoComplete="off"
                  />
                  <FormFeedback invalid>{pass}</FormFeedback>
                </InputGroup>
              </FormGroup>

              <div className="text-center">
                <Button
                  className="mt-4"
                  id="submit"
                  disabled={isDisabled}
                  color="primary"
                  type="submit"
                  onClick={(e) => onSubmit(e)}
                >
                  Submit
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default SetPass;
