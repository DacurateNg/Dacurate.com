import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import CustomButton from "../../../components/Button/Button";
import Text from "../../../components/Typography/Text";
import HeroData from "./HeroData";

const Wrapper = styled.div`
  padding: 20px 80px;
  @media all and (max-width: 996px) {
    padding: 10px 40px;
  }
  @media all and (max-width: 520px) {
    padding: 10px;
  }
`;

const HeroImage = styled.div`
  width: 100%;
  background-image: url("/images/about-hero.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  border-radius: 15px;
`;

const HeroImageInner = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  padding: 150px 20px 130px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 15px;
`;

export default function AboutHero() {
  
  return (
    <Wrapper>
      <HeroImage>
        <HeroImageInner>
          <Col xs={12} md={6} lg={4} xl={3}>
            <Text white align="center" weight="700" size={35}>
              Databank for Politics
            </Text>
          </Col>

          <Col xs={12} md={8} lg={6} xl={5}>
            <Text white align="center" size={20}>
              Get quality insights into Nigeria’s Political Space
            </Text>
          </Col>

          <Col>
            <Row className=" align-items-center justify-content-center mt-5">
              <CustomButton linkTo="/government-arms" m="5px" background="white" color="text">
                Learn More
              </CustomButton>
            </Row>
          </Col>
        </HeroImageInner>
      </HeroImage>
      <Row className=" justify-content-center">
        <Col xs={11} md={11} xl={10}>
          <HeroData top="-30px" />
        </Col>
      </Row>
    </Wrapper>
  );
}
