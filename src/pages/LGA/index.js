import React from "react";
import { Col } from "react-bootstrap";
import styled from "styled-components";
import Newsletter from "../../components/Newsletter";
import Section from "../../components/Section";
import Text from "../../components/Typography/Text";
import { colors } from "../../jss/colors";
import Hero from "./components/Hero";
import LgaTable from "./components/Table";
import lgaData from "./variable";

const SectionOuter = styled.div`
  padding: 0px 15px;
  @media all and (min-width: 996px) {
    padding: 0px 70px;
  }
  background: ${colors.grey};
`;

const SectionInner = styled(Section)`
  padding: 40px 40px;
  @media all and (min-width: 996px) {
    padding: 40px 100px;
  }
`;

export default function LgaPage() {
  return (
    <>
      <Hero />
      <SectionOuter>
        <SectionInner background="white">
          <Col xs={11} md={9} xl={7} className=" mx-auto mb-5">
            <Text size="25" mb="20px" weight="600" align="center">
              Local Government Data
            </Text>
            <Text size="18" align="center">
              This page page showcase the total number of local goverment in each state of Nigeria
            </Text>
          </Col>
          <LgaTable data={lgaData} />
        </SectionInner>
      </SectionOuter>
      <Newsletter />
    </>
  );
}
