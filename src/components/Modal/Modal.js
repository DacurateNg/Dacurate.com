import React from "react";
import { Col, Modal, Row } from "react-bootstrap";
import CustomButton from "../Button/Button";
import Card from "../Card/Card";
import CardBody from "../Card/CardBody";
import CardFooter from "../Card/CardFooter";
import CardHeader from "../Card/CardHeader";

export default function CustomModal(props) {
  return (
    <Modal {...props} onHide={props.onClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body>
        <Card style={{ zIndex: 400 }}>
          {props.header && <CardHeader>{props.header}</CardHeader>}
          <CardBody>{props.children}</CardBody>
          <CardFooter>
            <Row className=" justify-content-evenly w-100">
              {props.onContinue !== undefined && (
                <Col xs={12} md={5}>
                  <div>
                    <CustomButton style={{ zIndex: 4000 }} block loading={props.loading} disabled={props.disabled} success onClick={props.onContinue}>
                      {props.approveText === undefined ? "Continue" : props.approveText}
                    </CustomButton>
                  </div>
                </Col>
              )}
              <Col xs={12} md={5}>
                <div>
                  <CustomButton style={{ zIndex: 4000 }} block tetiary onClick={props.onClose}>
                    {props.declineText === undefined ? "Close" : props.declineText}
                  </CustomButton>
                </div>
              </Col>
            </Row>
          </CardFooter>
        </Card>
      </Modal.Body>
    </Modal>
  );
}
