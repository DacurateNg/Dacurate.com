import React from "react";
import styled from "styled-components";
import GoBack from "../../../components/GoBack";
import { colors } from "../../../jss/colors";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 45px;
`;

const TopBanner = styled.div`
  position: absolute;
  width: 100%;
  height: 280px;
  background: ${colors.primary};
  z-index: 0;
  top: 0;
  @media all and (max-width: 996px) {
    height: 220px;
  }

  @media all and (max-width: 520px) {
    height: 130px;
  }
`;

const Img = styled.img`
  width: 70%;
  position: relative;
  z-index: 2;
  padding-top: 100px;
  @media all and (max-width: 996px) {
    width: 80%;
    padding-top: 80px;
  }
  @media all and (max-width: 520px) {
    width: 90%;
  }
`;

export default function PartiesHero() {
  return (
    <Wrapper>
      <TopBanner>
        <GoBack />
      </TopBanner>
      <Img src="/images/parties-hero.svg" alt="" />
    </Wrapper>
  );
}
