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
} from "reactstrap";



const Register=()=> {

  const [roll, setRoll] = useState("");



  const onSubmit = async (e)=> {
    try{
      const user ={
        roll: roll,
      };

     const result= await dispatch(register(user.roll));
     
     if (result=="202_ACCEPTED"){
      alert("check yor mail for link to set password");
     }
    else{
      alert("Something went wrong");
    }
    }catch (err) {
      console.log("Error while registering");
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
                      <i className="ni ni-circle-08" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input required valid
                    placeholder="IITK Roll no."
                    type="roll"
                    autoComplete="off"
                    onChange ={(e) => setRoll(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
              <div className="text-center">
                <Button className="mt-4"
                        id="submit"
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
    </>
  );
};

export default Register;
