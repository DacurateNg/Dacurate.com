import React from "react";
import styled from "styled-components";

const CardStyle = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.25);
  padding: 20px;
  border-radius: 6px;
  &:hover {
    box-shadow: 0px 13px 15px -5px rgba(103, 115, 153, 0.75);
    -webkit-box-shadow: 0px 13px 15px -5px rgba(103, 115, 153, 0.75);
    -moz-box-shadow: 0px 13px 15px -5px rgba(103, 115, 153, 0.75);
    opacity: 0.94;
  }
`;

export default function CardWrapper({ children, ...rest }) {
  return (
    <div
      style={{
        padding: "10px 5px",
        height: "100%",
      }}
    >
      <CardStyle {...rest}>{children}</CardStyle>
    </div>
  );
}
