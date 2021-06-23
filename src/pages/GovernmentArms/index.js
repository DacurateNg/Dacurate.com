import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CustomButton from "../../components/Button/Button";
import Newsletter from "../../components/Newsletter";
import Section from "../../components/Section";
import Text from "../../components/Typography/Text";
import { colors } from "../../jss/colors";
import FAQ from "./components/Faq";
import Hero from "./components/Hero";
import NavCards from "./components/NavCards";

export default function GovernmentArms() {
  return (
    <>
      <Hero />
      <NavCards />
      <Section pt="120px" style={{ background: colors.tetiary }} pb="120px">
        <Container>
          <Row className=" flex-column flex-md-row">
            <Col style={{ flex: "1" }}>
              <Text size="25" mb="9px" weight="500">
                You seek to get relevant interactive data, here you are
              </Text>
              <Text mb="15px">In one click, you will get confirmed interactive data on politics</Text>
            </Col>
            <CustomButton m="15px" mt="0px" background="white" color="text">
              Request
            </CustomButton>
          </Row>
        </Container>
      </Section>
      <FAQ />
      <Newsletter />
    </>
  );
}
