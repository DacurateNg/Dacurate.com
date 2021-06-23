import React from "react";
import { Col } from "react-bootstrap";
import styled from "styled-components";
import Text from "../../../../components/Typography/Text";
import { colors } from "../../../../jss/colors";

const Wrapper = styled.div`
  padding-bottom: 20px;
  height: 100%;
`;

const Card = styled.div`
  padding: 20px 13px;
  background: ${colors.grey};
  width: 100%;
  height: 100%;
  border-radius: 12px;
`;

export default function DateDataCard({ date, data }) {
  return (
    <Wrapper>
      <Card>
        <Text success size="20">
          {date.day} {date.month}
        </Text>
        <Text color="primaryDark" size="35" mb="30px" weight="600">
          {date.year}
        </Text>

        <Col className="m-auto" xs={11}>
          <Text align="justify" size="18">
            {data}
          </Text>
        </Col>
      </Card>
    </Wrapper>
  );
}
