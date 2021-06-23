import React, { useState } from "react";
import styled from "styled-components";
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { colors } from "../../jss/colors";
import Navbar from "../Navbar/Navbar";
import { Row } from "react-bootstrap";
import Text from "../Typography/Text";
import { FaBars } from "react-icons/fa";
import CustomButton from "../Button/Button";

const HeaderWrapper = styled.div`
  @media all and (max-width: 996px) {
    padding: 10px;
    background: ${colors.primaryDark};
  }
`;

const Btn = styled(CustomButton)`
  @media all and (max-width: 720px) {
    max-width: 60px;
    min-height: max-content;
    padding: 3px 10px !important;
  }
  @media all and (max-width: 520px) {
    max-width: 60px;
    min-height: max-content;
    font-size: 14px;
  }
`;

const TopHeader = styled.div`
  background: ${colors.primary};
  border-bottom: 1px solid #eee;
  padding: 10px 80px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  /* overflow-x: scroll; */
  @media all and (max-width: 996px) {
    padding: 10px 20px;
    background: ${colors.white};
  }

  @media all and (max-width: 520px) {
    padding: 10px;
    p {
      font-size: 12px !important;
    }
  }
  @media all and (max-width: 620px) {
    .p-c-wrapper {
      flex-direction: column;
    }
  }
`;

const IconWrapper = styled.a`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.5px;
  margin-right: 10px;
  font-size: 16px;
  color: ${colors.text};
  fill: ${colors.text};
  background: ${colors.white};
  :nth-last-child() {
    margin-right: 0px;
  }
`;

const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  color: ${colors.white};
  fill: ${colors.white};
  font-size: 14px;
  @media all and (max-width: 996px) {
    > p {
      color: ${colors.text} !important;
    }
    fill: ${colors.text};
    color: ${colors.text};
  }
`;

const Toggle = styled.button`
  border: 0;
  outline: none;
  padding: 5px;
  max-width: max-content;
  text-align: center;
  color: ${colors.primary};
  font: normal normal 600 29px/25px "Montserrat";
  letter-spacing: 0.8px;
  background: transparent;
  visibility: ${({ open }) => (open ? "hidden" : null)};
  &:active {
    top: -200%;
    box-shadow: inset 0px 0px 12px rgba(0, 0, 0, 0.2);
    animation: 0.7s pulse 1 forwards;
    outline: none;
  }
  @media all and (min-width: 996px) {
    display: none;
  }
`;

export const ShowMobile = styled.div`
  @media all and (min-width: 996px) {
    display: none;
  }
`;

export const HideMobile = styled.div`
  @media all and (max-width: 996px) {
    display: none;
  }
`;

export const HideSm = styled.div`
  @media all and (min-width: 996px) {
    display: block;
  }

  @media all and (max-width: 521px) {
    display: none;
  }
`;
function Header(props) {
  const { links, notFixed, dash } = props;
  const [showMenu, setShowMenu] = useState(false);
  return (
    <HeaderWrapper>
      <TopHeader>
        <Toggle open={showMenu} onClick={() => setShowMenu(true)}>
          <FaBars />
        </Toggle>

        <HideMobile>
          <Row style={{ margin: 0 }}>
            <IconWrapper href="https://twitter.com/dacurateinsight">
              <FaTwitter />
            </IconWrapper>
            <IconWrapper href="https://www.linkedin.com/company/dacurate-insights">
              <FaLinkedinIn />
            </IconWrapper>
            <IconWrapper href="https://www.facebook.com/">
              <FaFacebookF />
            </IconWrapper>
            <IconWrapper href="https://www.instagram.com/">
              <FaInstagram />
            </IconWrapper>
          </Row>
        </HideMobile>
        <HideSm>
          <ContactWrapper className="p-c-wrapper" style={{ margin: 0 }}>
            <ContactWrapper style={{ marginRight: 20 }}>
              <FiPhoneCall />
              <Text white ml="5px" mb="0px" size="15" weight="300">
                +234 816 720 8963
              </Text>
            </ContactWrapper>

            <ContactWrapper style={{ margin: 0 }}>
              <FaEnvelope />
              <a href="mailto:info@dacurate.com">
                <Text white ml="5px" mb="0px" size="15" weight="300">
                  info@dacurate.com
                </Text>
              </a>
            </ContactWrapper>
          </ContactWrapper>
        </HideSm>
        <ShowMobile>
          <Btn background="success">Donate</Btn>
        </ShowMobile>
      </TopHeader>
      <div style={{ width: "100%" }}>
        <Navbar dash={dash} setShowMenu={setShowMenu} showMenu={showMenu} notFixed={notFixed} links={links} />
      </div>
    </HeaderWrapper>
  );
}

export default Header;
