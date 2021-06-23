import React from "react";
import styled from "styled-components";
import { colors } from "../../jss/colors";

const Inputstyle = styled.input`
  width: 100%;
  height: 50px;
  padding: 5px ${(props) => (props.icon !== undefined ? "50px" : "10px")} 5px 10px;
  border-radius: 3px;
  border: 0;
  box-shadow: 0px 1.5px 3px rgba(0, 0, 0, 0.15);
  background: ${({ background }) => colors[background] || "rgba(231, 217, 234, 0.41)"};
  font-weight: 500;
  font-size: 15;
  color: ${({ color }) => colors[color] || colors.text};
`;

const Iconstyle = styled.div`
  position: absolute;
  right: 0;
  bottom: 8px;
  padding: 5px 10px;
`;
export default function InputField({ label, icon, ...rest }) {
  return (
    <div style={{ width: "100%", position: "relative" }}>
      <Inputstyle icon={icon} className="_input" placeholder={label} {...rest} />
      {icon && <Iconstyle>{icon}</Iconstyle>}
    </div>
  );
}
