import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import styled from "styled-components";
import CustomButton from "../../../components/Button/Button";
import CardWrapper from "../../../components/Card/Card";
import CardBody from "../../../components/Card/CardBody";
import Section from "../../../components/Section";
import Text from "../../../components/Typography/Text";

const Card = styled(CardWrapper)`
  border-radius: 0 100px;
  :nth-child(even) {
    border-radius: 100px 0;
  }
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: transparent;
  }
`;

const Icon = styled.img`
  max-width: 60%;
  min-width: 55px;
  margin: auto;
  margin-bottom: 20px;
`;

export default function NavCards() {
  const history = useHistory();

  const redirect = (link) => history.push(link);
  return (
    <Section pb="90px">
      <Container>
        <Row>
          <Col sm={12} md={6}>
            <Card>
              <CardBody>
                <Icon src="/images/icons/person.svg" />
                <Text size="15" mb="20px" align="center" weight="700">
                  Presidency
                </Text>
                <CustomButton onClick={()=> redirect("/interactive-data/presidency")} >Fnd out more</CustomButton>
              </CardBody>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <CardBody>
                <Icon src="/images/icons/political-parties.svg" />
                <Text size="15" mb="20px" align="center" weight="700">
                  Political Parties
                </Text>
                <CustomButton onClick={()=> redirect("/parties-info")} >Fnd out more</CustomButton>
              </CardBody>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <CardBody>
                <Icon src="/images/icons/local-gov.svg" />
                <Text size="15" mb="20px" align="center" weight="700">
                  Local Government
                </Text>
                <CustomButton onClick={()=> redirect("/lga-info")} > Fnd out more</CustomButton>
              </CardBody>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <CardBody>
                <Icon src="/images/icons/governorship.svg" />
                <Text size="15" mb="20px" align="center" weight="700">
                  Governorship
                </Text>
                <CustomButton onClick={()=> redirect("/interactive-data/governorship")} >Fnd out more</CustomButton>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
