import React from "react";
import { Col, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import styled from "styled-components";
import CardWrapper from "../../../components/Card/Card";
import Text from "../../../components/Typography/Text";
import { colors } from "../../../jss/colors";

const Box = styled.div`
  position: relative;
  width: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  background: ${colors.grey};
  padding: 25px 30px;
  position: relative;
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
`;

const CardOuter = styled(CardWrapper)`
  :hover {
    p {
      color: ${colors.white} !important;
    }
    background: ${colors.primary};
  }
`;

const Icon = styled.img`
  width: 60px;
`;

export default function HeroData({ top, bottom }) {
  const history = useHistory();

  return (
    <div>
      <Box>
        <Wrapper top={top} bottom={bottom}>
          <Row>
            <Col xs={12} md={6} lg={3}>
              <CardOuter>
                <Row className=" flex-nowrap align-items-center">
                  <Icon src="/images/icons/world.svg" />
                  <Col>
                    <Text size={16}>States</Text>
                    <Text size={18} weight="700">
                      36
                    </Text>
                  </Col>
                </Row>
              </CardOuter>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <CardOuter onClick={()=> history.push("/lga-info")} >
                <Row className="flex-nowrap align-items-center">
                  <Icon src="/images/icons/turn-right.svg" />
                  <Col>
                    <Text size={16}>Local governments</Text>
                    <Text size={18} weight="700">
                      774
                    </Text>
                  </Col>
                </Row>
              </CardOuter>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <CardOuter>
                <Row className="flex-nowrap align-items-center">
                  <Icon src="/images/icons/round-table.svg" />
                  <Col>
                    <Text size={16}>Senate Seats</Text>
                    <Text size={18} weight="700">
                      109 members
                    </Text>
                  </Col>
                </Row>
              </CardOuter>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <CardOuter>
                <Row className="flex-nowrap w-100 align-items-center">
                  <Icon src="/images/icons/team.svg" />
                  <Col>
                    <Text size={16}>House Of Representatives</Text>
                    <Text size={18} weight="700">
                      360 Members
                    </Text>
                  </Col>
                </Row>
              </CardOuter>
            </Col>
          </Row>
        </Wrapper>
      </Box>
    </div>
  );
}
