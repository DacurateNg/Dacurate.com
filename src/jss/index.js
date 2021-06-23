import styled from "styled-components";

export const ShowMobile = styled.div`
  @media all and (min-width: 996px) {
    display: none;
  }
`;

export const HideMobile = styled.div`
  @media all and (max-width: 996px) {
    display: none;
  }
`;

export const HideSm = styled.div`
  @media all and (min-width: 996px) {
    display: none;
  }

  @media all and (max-width: 521px) {
    display: none;
  }
`;
