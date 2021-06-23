import React from "react";
import { Col, Row } from "react-bootstrap";
import Text from "../../../components/Typography/Text";

export default function BlogRow({ text, title, img, swap }) {
  return (
    <Row className={(swap ? "flex-row-reverse" : "") + " align-items-center mb-5"}>
      <Col xs={12} md={6}>
        <img src={img} className="w-100" alt="" />
      </Col>

      <Col xs={12} md={6}>
        <Text size="30" weight="700" white mb="25px">
          {title}
        </Text>
        <Text size="18" white>
          {text}
        </Text>
      </Col>
    </Row>
  );
}
