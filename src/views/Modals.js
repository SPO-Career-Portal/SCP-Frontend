import React from "react";
// import Navs from "./Navs";
import { Link, Route } from "react-router-dom";
import Apply from "./Submission";
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
  Modal,
  Row,
  Col
} from "reactstrap";

class Modals extends React.Component {
  state = {
    exampleModal: false
  };
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };
  render() {
    return (
      <>
        {/* Button trigger modal */}
        <Button
          color="info"
          type="button"
          size="sm"
          onClick={() => this.toggleModal("exampleModal")}
        >
          More
        </Button>
        {/* Modal */}
        <Modal
          className="modal-dialog-centered modal-info"
          contentClassName="bg-gradient-info"
          className="modal-dialog-centered"
          isOpen={this.state.exampleModal}
          toggle={() => this.toggleModal("notificationModal")}
        >
          <div className="modal-header modal-popout-bg"
            style={{
              backgroundImage: `url("https://assets.weforum.org/article/image/v2gQQH6Qq5EAJSemo1Yqie27aYBOHE4pSwA6jSkFHKg.jpg")`,
              backgroundSize: "100% 100%"
            }}>
            <h1 className="modal-title text-white display-2 ml-auto pt-5 pb-5" id="modal-title-notification" >
              {this.props.data.Name}
            </h1>
            <button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
              onClick={() => this.toggleModal("notificationModal")}
            >
              <span aria-hidden={true} className="text-white" onClick={() => this.toggleModal("exampleModal")}>×</span>
            </button>
          </div>
          <div className="modal-body mt-0 mb-0" >
            {/* <Navs data={this.props.data} /> */}
          </div>
          <ApplyButton data={this.props.data} />
        </Modal>
      </>
    );
  }
}

const ApplyButton = ({ data }) => {
  console.log(data)
  if (data.Eligibilty === true) {
    return (
      <div className="modal-footer">
        <Button
          className="mt-0"
          color="success"
          type="button"
          className="text-center"
          to={{
            pathname: "/admin/forms",
            state: {
              data: data,
            },
          }}
          tag={Link}
        >
          Apply
      </Button>
      </div>
    );
  }
  else
    return (<></>);
}

export default Modals;