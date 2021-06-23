import React from "react";
import styled from "styled-components";
import { colors } from "../jss/colors";

const SectionStyle = styled.section`
  padding-top: ${({ pt }) => pt || "40px"};
  padding-bottom: ${({ pb }) => pb || "40px"};
  background: ${({ background }) => colors[background] || "#FAFAFA"};
`;
export default function Section({ children, ...rest }) {
  return <SectionStyle {...rest}>{children}</SectionStyle>;
}
