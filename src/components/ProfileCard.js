import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #ebebeb;
  border-radius: 5px;
`;

const Icon = styled.a`
  width: 25px;
  height: 25px;
  padding: 10px;
  background: transparent;
  border: 0;
  box-shadow: 0;
  margin: 3px;
  img {
    width: 20px;
  }
`;

export default function ProfileCard({ img }) {
  return (
    <Wrapper>
      <img src={img} alt="" className="w-100" />
      <div className="d-flex justify-content-between align-content-center px-3">
        <Icon>
          <img src="/images/icons/share.svg" alt="" />
        </Icon>
        <div className="d-flex justify-content-between align-content-center">
          <Icon>
            <img src="/images/icons/linkedin.svg" alt="" />
          </Icon>
          <Icon>
            <img src="/images/icons/twitter.svg" alt="" />
          </Icon>
          <Icon>
            <img src="/images/icons/fb.svg" alt="" />
          </Icon>
          <Icon>
            <img src="/images/icons/ig.svg" alt="" />
          </Icon>
        </div>
      </div>
    </Wrapper>
  );
}
