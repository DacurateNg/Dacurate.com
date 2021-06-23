import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { colors } from "../../jss/colors";

const Button = styled.button`
  min-width: ${(props) => (props.block ? "100%" : "160px")};
  padding: 10px 20px;
  margin: ${({ m }) => m};
  margin-bottom: ${({ mb }) => mb};
  margin-right: ${({ mt }) => mt};
  margin-left: ${({ ml }) => ml};
  margin-top: ${({ mt }) => mt};
  min-height: 50px;
  max-height: ${({ fullHeight }) => (fullHeight ? "100%" : "50px")};
  max-width: max-content;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font: normal normal 600 16px/25px "Montserrat";
  letter-spacing: 0.8px;
  color: ${(props) =>
    props.color
      ? colors[props.color]
      : props.outline === undefined
      ? "#fff"
      : props.primary
      ? colors.primary
      : props.primaryDark
      ? colors.primaryDark
      : props.success
      ? colors.success
      : props.danger
      ? colors.danger
      : colors.primary};
  opacity: 1;
  transition: 0.45s ease all;
  background: 0% 0% no-repeat padding-box;
  background-color: ${(props) =>
    props.outline !== undefined
      ? "transparent"
      : props.background
      ? colors[props.background]
      : props.primary
      ? colors.primary
      : props.orange
      ? colors.orange
      : props.success
      ? colors.success
      : props.primaryDark
      ? colors.primaryDark
      : props.danger
      ? colors.danger
      : colors.primary};
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  border-width: ${(props) => (props.outline !== undefined ? "2,7px" : 0)};
  border-style: solid;
  border-color: ${(props) =>
    props.background
      ? colors[props.background]
      : props.primary
      ? colors.primary
      : props.orange
      ? colors.orange
      : props.success
      ? colors.success
      : props.danger
      ? colors.danger
      : colors.primary};
  position: relative;
  z-index: 1;
  &:hover {
    box-shadow: 0px 13px 15px -5px rgba(103, 115, 153, 0.75);
    -webkit-box-shadow: 0px 13px 15px -5px rgba(103, 115, 153, 0.75);
    -moz-box-shadow: 0px 13px 15px -5px rgba(103, 115, 153, 0.75);
    opacity: 0.94;
  }
  &:active {
    top: -200%;
    box-shadow: inset 0px 0px 12px rgba(0, 0, 0, 0.2);
    animation: 0.7s pulse 1 forwards;
  }
`;

// const Loader = styled.img`
//   position: absolute;
//   width: 60px;
// `;

export default function CustomButton(props) {
  const { loading, disabled, children, type, linkTo, onClick, ...rest } = props;
  const history = useHistory();
  return (
    <Button onClick={linkTo ? () => history.push(linkTo) : onClick} disabled={disabled === undefined ? loading : disabled} type={type} {...rest}>
      {loading === true ? null : children}
    </Button>
  );
}
