import React from "react";
import styled from "styled-components";
import Text from "../../../components/Typography/Text";
import { colors } from "../../../jss/colors";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  left: ${({ left }) => left};
  @media all and (max-width: 667px) {
    left: unset;
  }
  margin-bottom: 50px;
`;

const StepBtn = styled.div`
  :active {
    box-shadow: unset;
  }
  border-radius: 1000px;
  height: 65px;
  width: 35%;
  padding: 20px;
  background: ${({ bg }) => colors[bg]};
  padding-right: 10%;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: ${({ bg }) => (bg === "success" ? colors.text : colors.white)};
  @media all and (max-width: 450px) {
    width: 38%;
  }
`;

const DescBtn = styled.div`
  :active {
    box-shadow: unset;
  }
  border-radius: 1000px;
  height: 65px;
  width: 65%;
  padding: 20px;
  position: relative;
  left: -9%;
  background: ${colors.tetiary};
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 65px;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: ${colors.primaryDark};
  @media all and (max-width: 450px) {
    left: -11%;
    overflow-y: auto;
    ::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none;
  }
`;

const Icon = styled.div`
  border-radius: 1000px;
  height: 60px;
  width: 60px;
  background-color: ${colors.white};

  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 9%;
  @media all and (max-width: 450px) {
    right: 11%;
  }
  img {
    width: 48%;
  }
`;

export default function HiwRow({ step, description, icon, bg, ...rest }) {
  return (
    <Wrapper {...rest}>
      <StepBtn bg={bg}>
        <Text weight="500" size="15" color={bg === "success" ? "primaryDark" : "white"}>
          Step {step}
        </Text>
      </StepBtn>
      <DescBtn>
        <Text weight="500" w>
          {description}
        </Text>
      </DescBtn>
      <Icon>
        <img src={icon} alt="" />
      </Icon>
    </Wrapper>
  );
}
