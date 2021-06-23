import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import CustomButton from "./Button/Button";
import InputField from "./Input/Input";
import Section from "./Section";
import Text from "./Typography/Text";

const Btn = styled(CustomButton)`
  border-radius: 0px 100px 100px 0px;
`;

const Input = styled(InputField)`
  border-radius: 100px 0 0 100px;
  padding-left: 20px;
`;

const InputWrapper = styled.div`
  flex: 1;
  padding: 0;
`;

export default function Newsletter() {
  return (
    <Section background="success" pt="70px" pb="70px">
      <Container>
        <Row>
          <Col sm={12} md={6}>
            <Text size="30" white weight="700">
              Sign Up To Newsletter
            </Text>
            <Text size="20" mb="30" white>
              Subscribe to receive info on our latest news
            </Text>
          </Col>
          <Col sm={12} md={6}>
            <Row>
              <InputWrapper>
                <Input background="white" />
              </InputWrapper>
              <Btn background="text">Subscribe</Btn>
            </Row>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
