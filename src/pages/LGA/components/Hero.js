import React from "react";
import styled from "styled-components";
import { colors } from "../../../jss/colors";
import { Col, Container } from "react-bootstrap";
import InputField from "../../../components/Input/Input";
import { BiSearchAlt } from "react-icons/bi";
import CustomButton from "../../../components/Button/Button";
import Text from "../../../components/Typography/Text";
import GoBack from "../../../components/GoBack";

const TopBanner = styled.div`
  width: 100%;
  height: 260px;
  background: ${colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputWrapper = styled.div`
  flex: 1;
  padding: 0;
`;

const LeftBtn = styled(CustomButton)`
  border-radius: 12px 0px 0px 12px;
  background: #e9e9e9;
  @media all and (max-width: 560px) {
    padding: 10px;
    min-width: max-content;
  }
`;

const RightBtn = styled(CustomButton)`
  border-radius: 0px 12px 12px 0px;
  background: #091429;
  min-width: max-content;
`;

export default function LgaDataHero() {
  return (
    <div style={{ position: "relative" }}>
      <TopBanner>
        <GoBack />
        <Container>
          <div className=" d-flex w-100 m-0">
            <LeftBtn color="primary">Search</LeftBtn>
            <InputWrapper>
              <InputField style={{ background: "#fff", borderRadius: 0 }} />
            </InputWrapper>
            <RightBtn>
              <BiSearchAlt size="34px" />
            </RightBtn>
          </div>

          <Col xs={10} md={8} xl={4} className=" m-auto">
            <Text white size="20" align="center" mt="20px">
              Make a quick serach on a state, about any local government
            </Text>
          </Col>
        </Container>
      </TopBanner>
    </div>
  );
}
