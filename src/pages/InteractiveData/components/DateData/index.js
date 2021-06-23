import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import Section from "../../../../components/Section";
import Text from "../../../../components/Typography/Text";
import DateDataCard from "./DateDataCard";

const Wrapper = styled.div`
  padding: 0 40px;
  @media all and (min-width: 996px) {
    padding: 0 100px;
  }
`;

export default function DateData({ data }) {
  return (
    <Section background="white">
      <Wrapper>
        <Text size="25" align="center" weight="600" mb="45px">
          Important Dates
        </Text>
        <Row>
          {data.map((item, index) => (
            <Col xs={12} md={6}>
              <DateDataCard key={index.toString()} date={item.date} data={item.data} />
            </Col>
          ))}
        </Row>
      </Wrapper>
    </Section>
  );
}
