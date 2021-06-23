import React from "react";
import styled from "styled-components";
import colours from "../../assets/jss/colours";

const Line = styled.div`
  max-height: ${(props) => (props.vertical !== undefined ? "100%" : "2px")};
  max-width: ${(props) => (props.vertical !== undefined ? "2px" : "100%")};
  background-color: ${colours.secondary};
  margin: 0 5px;
  opacity: 0.6;
`;

function Divider({ ...rest }) {
  return <Line {...rest} />;
}

export default Divider;
