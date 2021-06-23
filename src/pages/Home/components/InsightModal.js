import React from "react";
import { Modal, Row } from "react-bootstrap";
import styled from "styled-components";
import CustomButton from "../../../components/Button/Button";

const Header = styled.div`
  width: 100%;
  padding: 30px;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 24px;
  color: #000000;
  text-align: center;
`;

const Body = styled.div`
  padding: 10px 30px;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 24px;
  color: #000000;
  @media all and (max-width: 996px) {
    padding: 10px 80px;
  }
`;

const TextArea = styled.textarea`
  margin-top: 25px;
  margin-bottom: 35px;
  width: 100%;
  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 15px 20px;
`;

const InputField = styled.input`
  margin-top: 25px;
  width: 100%;
  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 15px 20px;
`;

export default function InsightModal(props) {
  const { state, setState } = props;
  return (
    <Modal show={state} {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Header id="contained-modal-title-vcenter"> Please fill this form to Download Presidency insight</Header>
      </Modal.Header>
      <Modal.Body>
        <Body>
          <p>Location:</p>
          <TextArea rows={6} placeholder="Type in your location" />
          <p>Job Description:</p>
          <InputField placeholder="Enter your job description" />
        </Body>
      </Modal.Body>
      <Modal.Footer>
        <Row className="justify-content-evenly w-100" >
          <CustomButton primary>Download</CustomButton>
          <CustomButton onClick={() => setState(!state)} background="grey" color="text">
            Job Close
          </CustomButton>
        </Row>
      </Modal.Footer>
    </Modal>
  );
}
