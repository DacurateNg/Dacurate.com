import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { colors } from "../../jss/colors";
import CustomButton from "../Button/Button";
import Section from "../Section";
import Text from "../Typography/Text";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const IconWrapper = styled.a`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.5px;
  margin-right: 10px;
  font-size: 16px;
  color: ${colors.text};
  fill: ${colors.text};
  background: ${colors.white};
  :nth-last-child() {
    margin-right: 0px;
  }
`;

const FooterWrapper = styled.footer`
  @media all and (max-width: 766px) {
    p {
      text-align: center !important;
    }
    .col_ {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default function Footer({ children, logged }) {
  return (
    <FooterWrapper>
      <Section background="primary" pt="30px" pb="25px">
        <Container>
          <Row className="flex-column-reverse flex-md-row">
            <Col
              className="col_"
              style={{ marginBottom: 20 }}
              xs={12}
              md={6}
              lg={3}
            >
              <Text white weight="500" size="20" mb="40px">
                Social Media
              </Text>
              <Row style={{ margin: 0 }}>
                <IconWrapper href="https://twitter.com/dacurateinsight">
                  <FaTwitter />
                </IconWrapper>
                <IconWrapper href="https://www.linkedin.com/company/dacurate-insights">
                  <FaLinkedinIn />
                </IconWrapper>
                <IconWrapper href="https://www.facebook.com/">
                  <FaFacebookF />
                </IconWrapper>
                <IconWrapper href="https://www.instagram.com/">
                  <FaInstagram />
                </IconWrapper>
              </Row>
            </Col>
            <Col
              className="col_"
              style={{ marginBottom: 20 }}
              xs={12}
              md={6}
              lg={3}
            >
              <Text white weight="500" size="20" mb="40px">
                Do you have a Question?
              </Text>

              <a href="mailto:info@dacurate.com">
                <CustomButton background="text">Click Here</CustomButton>
              </a>
            </Col>
            <Col className="col_" xs={12} lg={6}>
              <Row class="row-2">
                <Col
                  className="col_"
                  style={{ marginBottom: 20 }}
                  xs={12}
                  md={6}
                >
                  <Text white weight="500" size="20" mb="40px">
                    About Us
                  </Text>
                  <Text white>
                    Dacurate is a curating platform that educates the Nigerian
                    citizens on politics.
                  </Text>
                </Col>
                <Col
                  className="col_"
                  style={{ marginBottom: 20 }}
                  xs={12}
                  md={6}
                >
                  <Text white weight="500" size="20" mb="40px">
                    Want to Help Improve this Site?
                  </Text>
                  <CustomButton background="success">Donate</CustomButton>
                </Col>
              </Row>
            </Col>
          </Row>
          <Text white mt="100px" align="center" mr="0px" size="14">
            ©Copyright Dacurate {new Date().getFullYear()}, All Rights Reserved.
          </Text>
        </Container>
      </Section>
    </FooterWrapper>
  );
}
