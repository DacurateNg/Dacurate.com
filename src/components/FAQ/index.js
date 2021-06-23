import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa";
import { colors } from "../../jss/colors";
import Text from "../Typography/Text";

const Holder = styled.button`
  width: 100%;
  min-height: max-content;
  border: 0;
  padding: 5px;
  margin-bottom: 15px;
  background-color: #fff;
  padding: 20px;
  cursor: pointer;
  border-radius: 6px;
  &:focus {
    box-shadow: 0px 13px 15px -5px rgba(103, 115, 153, 0.34);
    -webkit-box-shadow: 0px 13px 15px -5px rgba(103, 115, 153, 0.34);
    -moz-box-shadow: 0px 13px 15px -5px rgba(103, 115, 153, 0.34);
    opacity: 0.94;
  }
`;

const Question = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  padding-bottom: 7px;
  position: relative;
  overflow: hidden;
`;

const Span = styled.div`
  position: absolute;
  bottom: 0;
  height: 2px;
  background: ${colors.success};
  width: 100%;
  left: ${(props) => (props.toggle === true ? "0px" : "-300%")};
  /* overflow: hidden; */
`;

const AnswerHolder = styled.div`
  width: 100%;
  overflow: hidden;
  max-height: max-content;
`;

const Answer = styled.div`
  width: 100%;
  padding: 5px 0;
  animation-name: ${(props) => (props.toggle === true ? slideIn : slideOut)};
  animation-duration: 0.4s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  display: ${(props) => (props.toggle === true ? "block" : "none")};
`;

const Icon = styled.div`
  height: 20px;
  width: 20px;
  padding: 5px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function slideOut() {
  return keyframes`
      0% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
  to {
    display: none;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }`;
}

function slideIn() {
  return keyframes`
      0% {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    display: block;
  }
  to {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }`;
}

export default function FaqList({ question, answer }) {
  const [toggle, setToggle] = useState(false);
  return (
    <Holder
      onClick={() => {
        setToggle(!toggle);
      }}
    >
      <Question>
        <Text size={18} weight={600}>
          {question}
        </Text>
        <Icon toggle={toggle}>{toggle ? <FaMinus /> : <FaPlus />}</Icon>
        <Span toggle={toggle} />
      </Question>
      <AnswerHolder>
        <Answer toggle={toggle}>
          <Text>{answer}</Text>
        </Answer>
      </AnswerHolder>
    </Holder>
  );
}
