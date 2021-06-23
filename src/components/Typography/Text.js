import React from "react";
import styled from "styled-components";
import { colors } from "../../jss/colors";

const TextItem = styled.p`
  color: ${(props) =>
    props.primary
      ? colors.primary
      : props.success
      ? colors.success
      : props.danger
      ? colors.danger
      : props.white
      ? colors.white
      : props.color
      ? colors[props.color]
      : colors.text};
  font-size: ${(props) => (props.size ? props.size + "px" : "16px")};
  line-height: ${(props) => (props.size ? Number(props.size) + 6 + "px" : props.height ? props.height + "px" : "20px")};
  font-weight: ${(props) => (props.weight ? props.weight : "400")};
  text-align: ${(props) => (props.align !== undefined ? props.align : "left")};
  display: ${(props) => (props.inline !== undefined ? "inline" : "block")};
  margin-bottom: ${({ mb }) => mb || "5px"};
  margin-right: ${({ mr }) => mr};
  margin-left: ${({ ml }) => ml};
  margin-top: ${({ mt }) => mt};
  /* width: max-content; */
  word-wrap: break-word;
  @media all and (max-width: 996px) {
    color: ${(props) =>
      props.navlink !== undefined
        ? "#fff"
        : props.primary
        ? colors.primary
        : props.success
        ? colors.success
        : props.danger
        ? colors.danger
        : props.white
        ? colors.white
        : props.color
        ? colors[props.color]
        : colors.text} !important;
    font-size: ${(props) => (props.size ? Number(props.size) - 2 + "px" : "14px")};
    line-height: ${(props) => (props.size ? Number(props.size) + 4 + "px" : props.height ? Number(props.height) - 2 + "px" : "18px")};
  }

  @media all and (max-width: 766px) {
    font-size: ${(props) => (props.size ? Number(props.size) - 1 + "px" : "13px")};
    line-height: ${(props) => (props.size ? Number(props.size) + 3 + "px" : props.height ? Number(props.height) - 1 + "px" : "17px")};
  }

  @media all and (max-width: 520px) {
    font-size: ${(props) => (props.size ? Number(props.size) - 0.5 + "px" : "12.5px")};
    line-height: ${(props) => (props.size ? Number(props.size) + 2.5 + "px" : props.height ? Number(props.height) - 0.5 + "px" : "17.5px")};
  }
`;

export default function Text({ children, ...rest }) {
  return <TextItem {...rest}>{children}</TextItem>;
}
