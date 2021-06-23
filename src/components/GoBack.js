import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useHistory } from "react-router";
import styled from "styled-components";

const BackButton = styled.button`
  position: absolute;
  top: 0px;
  left: 40px;
  color: white;
  z-index: 30;
  border: 0;
  background: transparent;
  display: flex;
  flex-direction: column;
`;

export default function GoBack() {
  const history = useHistory();

  return (
    <BackButton onClick={() => history.goBack()} transparent color="white">
      <FaLongArrowAltLeft style={{ fontSize: 34 }} />
      Back
    </BackButton>
  );
}
