import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import styled from "styled-components";
import CustomButton from "../../../components/Button/Button";
import CardWrapper from "../../../components/Card/Card";
import Section from "../../../components/Section";
import Text from "../../../components/Typography/Text";
import { colors } from "../../../jss/colors";

const CardOuter = styled(CardWrapper)`
  padding-left: 70px;
  padding-top: 50px;
  padding-bottom: 50px;
  cursor: pointer;
  :hover {
    background: ${colors.success};
    p {
      color: ${colors.white} !important;
    }
    img {
      filter: brightness(0) invert(1);
    }
  }

  @media all and (max-width: 766px) {
    padding-left: 20px;
    > div {
      flex-direction: column;
      align-items: center;
    }
    p {
      text-align: center !important;
    }
  }
`;

const Icon = styled.img`
  width: 70px;
`;

const CardText = styled(Text)`
  width: unset;
`;

export default function PoliticalData() {
  const history = useHistory();
  return (
    <Section>
      <Container>
        <Col xs={12} md={8} className="m-auto">
          <Text
            color="primaryDark"
            size="25"
            mb="20px"
            weight="700"
            align="center"
          >
            Get Potential Political Data here
          </Text>
          <Text size={18} align="center">
            On our platform, informatons are placed in a precised place
            accordingly. Get started to update yourself on politics
          </Text>

          <div className=" d-flex justify-content-center mt-5">
            <CustomButton linkTo="/government-arms" background="primaryDark">
              Read More
            </CustomButton>
          </div>
        </Col>

        <Row className="mt-5">
          <Col xs={12} md={6}>
            <CardOuter
              onClick={() => history.push("/interactive-data/presidency")}
            >
              <Row>
                <Icon src="/images/icons/person.svg" />
                <CardText color="primaryDark" size="25" ml="20px" weight="700">
                  Presidency
                </CardText>
              </Row>

              <Text size="18" mt="20px">
                Get the updated information on the president’s profile page
              </Text>
            </CardOuter>
          </Col>
          <Col xs={12} md={6} onClick={() => history.push("/parties-info")}>
            <CardOuter>
              <Row>
                <Icon src="/images/icons/political-parties.svg" />
                <CardText size="25" mb="20px" weight="700">
                  Political Parties
                </CardText>
              </Row>

              <Text size="18" mt="20px">
                New Tendencies about political party in Nigeria
              </Text>
            </CardOuter>
          </Col>
          <Col xs={12} md={6}>
            <CardOuter
              onClick={() => history.push("/interactive-data/governorship")}
            >
              <Row>
                <Icon src="/images/icons/governorship.svg" />
                <CardText size="25" mb="20px" weight="700">
                  Governorship
                </CardText>
              </Row>

              <Text size="18" mt="20px">
                Get the updated information on the president’s profile page
              </Text>
            </CardOuter>
          </Col>
          <Col xs={12} md={6}>
            <CardOuter onClick={() => history.push("/lga-info")}>
              <Row>
                <Icon src="/images/icons/local-gov.svg" />
                <CardText size="25" mb="20px" weight="700">
                  Local Government
                </CardText>
              </Row>

              <Text size="18" mt="20px">
                All news on politics all over Nigeria in one click
              </Text>
            </CardOuter>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
