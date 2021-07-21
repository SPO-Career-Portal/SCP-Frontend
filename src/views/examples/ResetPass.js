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
import axios from "axios";

const BASE_URL="http://127.0.0.1:8000"


const ResetPassword=()=> {

  const [oldPassword, setOldPassword]= useState('');
  const [newPassword, setNewPassword]=useState('');
  const [confirmNewPassword, setConfirmNewPassword]=useState('');
  const [checkPasswords, setcheckPasswords]=useState('');
  const [isDisabled, setIsdisabled]= useState(true)

   const onSubmit = async()=> {

    try {
       await axios.post(BASE_URL+"/user/resetpass/code=<str:token>/",{
        new_password1: newPassword,
        new_password2: confirmNewPassword,
        old_password: oldPassword,
      })
      .then(function(response){alert(response.data)})
      .catch(function(err){alert(err)});
    }
    catch{
      alert("Something went wrong");
    }

  };
  const confirmnewpassword = async (e) => {
    var class_valid = "is-valid form-control";
    var class_invalid = "is-invalid form-control";

    setConfirmNewPassword(e.value);
    if(e.value!==newPassword){
      setcheckPasswords('New Passwords did not match!');
      e.className=class_invalid;
    }else{
      setcheckPasswords(' ');
      setIsdisabled(false);
      e.className=class_valid;
    }
 };

  return (
    <>
      <center><br></br><br></br><br></br>
      <Col lg="6" md="8">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">

            <Form role="form" >
            <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input required valid
                    type="password"
                    placeholder="Old Password"
                    onChange ={(e) => setOldPassword(e.target.value)}
                    autoComplete="off"
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
                  <Input required valid
                    type="password"
                    placeholder="New Password"
                    onChange ={(e) => setNewPassword(e.target.value)}
                    autoComplete="off"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative-2" id="ConfirmNewPassword">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-check-bold" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input required valid
                    class="is-invalid from-control"
                    onChange={(e) => confirmnewpassword(e.target)}
                    placeholder="Confirm Your Password"
                    type="password"
                    autoComplete="off"
                  />
                  <FormFeedback invalid >{checkPasswords}</FormFeedback>
                </InputGroup>
              </FormGroup>
                  
                 
              <div className="text-center">
                <Button className="mt-4"
                        id="submit"
                        disabled={isDisabled}
                        color="primary"
                        type="submit"
                        onClick={ (e) => onSubmit(e)}
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

export default ResetPassword;
