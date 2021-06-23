import React, { useState } from "react";
import { Col, Container } from "react-bootstrap";
import styled from "styled-components";
import Section from "../../../components/Section";
import Text from "../../../components/Typography/Text";
import { HideMobile } from "../../../jss";
import { colors } from "../../../jss/colors";

const Card = styled.div`
  background: #ffffff;
  box-shadow: 0px 1px 16px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  padding: 30px 65px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    text-align: center !important;
  }
`;

const Carousel = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
`;
const ActiveWrapper = styled.div`
  position: relative;
  width: 100%;
  z-index: 4;
  > div {
    min-height: 240px;
  }
`;
const InactiveWrapper = styled.div`
  position: relative;
  width: 100%;
  z-index: 0;
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  > div {
    min-height: 200px;
  }
`;

const Indicator = styled.div`
  margin: 0 5px;
  margin-top: 30px;
  width: ${({ active }) => (active ? "15px" : "12px")};
  height: ${({ active }) => (active ? "15px" : "12px")};
  border-radius: 50%;
  background-color: ${({ active }) => (active ? colors.primaryDark : colors.white)};
`;

const LeftClick = styled.button`
  top: 0;
  bottom: 0;
  width: 50%;
  left: 0;
  position: absolute;
  z-index: 1;
  border: 0;
  background: transparent;
  outline: none;
  background: rgba(22, 199, 154, 0.6);
`;

const RighClick = styled.button`
  top: 0;
  bottom: 0;
  width: 50%;
  right: 0;
  position: absolute;
  z-index: 1;
  border: 0;
  background: transparent;
  outline: none;
  background: rgba(22, 199, 154, 0.6);
`;

const Flex = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 3;
`;

const ToFront = styled.div`
  width: 100%;
  position: relative;
  z-index: 3;
`;

export default function CustomCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderArr = [
    <Card>
      <Text mb="40px" weight="700" size="25">
        Curated Data
      </Text>
      <Text size="18">A central location to get political data from the highest political office in the land to lowest.</Text>
    </Card>,
    <Card>
      <Text mb="40px" weight="700" size="25">
        Election Insights
      </Text>
      <Text size="18">A platform that provides insights on patterns of the Nigerian elections.</Text>
    </Card>,
    <Card>
      <Text mb="40px" weight="700" size="25">
        ABC Data
      </Text>
      <Text size="18">Simple and clear data for everyone to understand how political leaders are elected.</Text>
    </Card>,
  ];

  const activeIndexHandler = (active, length = sliderArr.length) => {
    return {
      left: active - 1 >= 0 ? active - 1 : length - 1,
      right: active + 1 <= length - 1 ? active + 1 : 0,
    };
  };

  const handleRightClick = () => {
    setActiveIndex(activeIndex - 1 < 0 ? sliderArr.length - 1 : activeIndex - 1);
  };

  const handleLeftClick = () => {
    setActiveIndex(activeIndex + 1 > sliderArr.length - 1 ? 0 : activeIndex + 1);
  };
  return (
    <Section id="what-do-we-offer" style={{ position: "relative" }} background="success">
      <LeftClick onClick={handleLeftClick} />
      <RighClick onClick={handleRightClick} />
      <Container>
        <ToFront>
          <Text white size="25" mb="20px" weight="700" align="center">
            What do we offer you?
          </Text>
          <Text white size="20" mb="40px" align="center">
            Dacurate is a curating platform that educates the Nigerian citizens on politics.
          </Text>
        </ToFront>
        <Carousel>
          <Col className=" relative" xs={1} md={5}>
            <HideMobile>
              <InactiveWrapper right="-16%">{sliderArr[activeIndexHandler(activeIndex).left]}</InactiveWrapper>
            </HideMobile>
          </Col>
          <Col xs={11} md={5}>
            <ActiveWrapper>{sliderArr[activeIndex]}</ActiveWrapper>
          </Col>
          <Col className="relative" xs={1} md={5}>
            <HideMobile>
              <InactiveWrapper left="-16%">{sliderArr[activeIndexHandler(activeIndex).right]}</InactiveWrapper>
            </HideMobile>
          </Col>
        </Carousel>
        <Flex>
          {sliderArr.map((i, index) => (
            <Indicator active={activeIndex === index} />
          ))}
        </Flex>
      </Container>
    </Section>
  );
}
