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
} from "reactstrap";
import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000";

const ResetPasswordEmail = () => {
  const [roll, setRoll] = useState("");

  const onSubmit = async () => {
    try {
      await axios
        .post(BASE_URL + "/user/resetpassemail/", {
          roll: roll,
        })
        .then((response) => {
          alert(response.data);
        })
        .catch((err) => {
          alert("Please enter valid Roll Number");
        });
    } catch {
      alert("Something went wrong");
    }
  };

  return (
    <>
      <center>
        <Col lg="6" md="8">
          <br></br>
          <br></br>
          <br></br>
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <Form role="form">
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-circle-08" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      required
                      valid
                      placeholder="Roll no."
                      type="roll"
                      autoComplete="off"
                      onChange={(e) => setRoll(e.target.value)}
                    />
                  </InputGroup>
                </FormGroup>
                <div className="text-center">
                  <Button
                    className="mt-4"
                    id="submit"
                    color="primary"
                    type="submit"
                    onClick={onSubmit}
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </center>
    </>
  );
};

export default ResetPasswordEmail;
