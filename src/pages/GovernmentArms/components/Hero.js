import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import { colors } from "../../../jss/colors";
import Text from "../../../components/Typography/Text";
import GoBack from "../../../components/GoBack";

const Wrapper = styled.div`
  background: ${colors.primaryDark};
`;

const WrapperInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 75px 60px 100px 60px;
  min-height: 340px;

  @media all and (min-width: 720px) {
    padding: 75px 100px 100px 100px;
  }

  @media all and (max-width: 520px) {
    padding: 75px 40px 100px 40px;
  }
`;

export default function Hero() {
  return (
    <Carousel>
      <Wrapper>
        <GoBack />
        <WrapperInner>
          <Text size="35" align="center" white weight="700">
            Welcome to Politics space
          </Text>

          <Text size={20} align="center" white mt="25px">
            Click on any of the box to get update
          </Text>
        </WrapperInner>
      </Wrapper>
      {/* <Wrapper>
        <WrapperInner>
          <Text size="35" align="center" white weight="700">
            Welcome to Politics space
          </Text>

          <Text size={20} align="center" white mt="25px">
            Find out more on politics related to political parties, governorship, presidency and local governements. As a citizen you have all the right to be
            aknowledge about politics in nigéria. click on any of the box to get update
          </Text>
        </WrapperInner>
      </Wrapper>
      <Wrapper>
        <WrapperInner>
          <Text size="35" align="center" white weight="700">
            Welcome to Politics space
          </Text>

          <Text size={20} align="center" white mt="25px">
            Find out more on politics related to political parties, governorship, presidency and local governements. As a citizen you have all the right to be
            aknowledge about politics in nigéria. click on any of the box to get update
          </Text>
        </WrapperInner>
      </Wrapper> */}
    </Carousel>
  );
}
