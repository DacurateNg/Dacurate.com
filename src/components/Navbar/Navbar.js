import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";
import CustomButton from "../Button/Button";
import Text from "../Typography/Text";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";
import { colors } from "../../jss/colors";
import Logo from "../Logo";
import ReactGA from "react-ga";
import useAnalyticsEventTracker from "../../Analytics/useAnalyticsEventTracker";

const Nav = styled.div`
  width: 100%;
  padding: 20px 80px;
  min-height: 84px;
  transition: all 0.5s;
  z-index: 997;
  background: ${colors.white};
  width: 100%;
  top: 0;
  z-index: 1000;
  @media all and (max-width: 996px) {
    padding: 10px 40px;
    background: ${colors.primaryDark};
    svg.logo_ {
      fill: ${colors.white};
    }
  }
  @media all and (max-width: 520px) {
    padding: 10px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

const LinkItem = styled.div`
  padding: ${(props) => (props.dash !== undefined ? "3px 0" : "0")};
  margin: ${(props) => (props.dash ? "40px 0 0 10px" : "0 0 0 30px")};
  &:hover .icon {
    transition: 0.7s ease all;
    transform: rotate(360deg);
    color: ${colors.success};
  }
  &:hover p,
  &:hover p.link {
    color: ${colors.success} !important;
  }
  @media all and (max-width: 996px) {
    padding: 20px 10px;
    margin-left: 0px;
    background-color: #fff;
    width: 100%;
    border-width: 1px 0 1px 0;
    border-style: solid;
    border-color: #eee;
    &:nth-child(2) {
      padding-top: 30px;
    }
    &:last-child {
      padding-bottom: 30px;
    }
  }
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media all and (max-width: 996px) {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.95);
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
    padding: 30px 0;
    z-index: 500;
    flex-direction: column;
    align-items: flex-start;
    left: ${(props) => (props.open === true ? "0" : "-120%")};
  }
`;

const LinkText = styled(Link)`
  text-decoration: none;
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

const ShowMobile = styled.div`
  @media all and (min-width: 996px) {
    display: none;
  }
`;

const HideMobile = styled.div`
  @media all and (max-width: 996px) {
    display: none;
  }
`;

// *******Google Analytics ***********//
const TRACKING_ID = "UA-185663476-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

export default function Navbar({
  showMenu,
  setShowMenu,
  links,
  dash,
  notFixed,
}) {
  const [fixed, setFixed] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 200) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  });
  const gaEventTracker = useAnalyticsEventTracker("Navitems");

  return (
    <Nav fixed={fixed} notFixed={notFixed}>
      <div>
        <Row dash={dash}>
          <div className="logo">
            <a href="/" onClick={() => gaEventTracker("homePage")}>
              <Logo />
            </a>
          </div>
          <ShowMobile>
            <Row style={{ margin: 0 }}>
              <IconWrapper
                href="https://www.twitter.com/"
                onClick={() => gaEventTracker("twitter")}
              >
                <FaTwitter />
              </IconWrapper>
              <IconWrapper
                href="https://www.linkedin.com/"
                onClick={() => gaEventTracker("linkedin")}
              >
                <FaLinkedinIn />
              </IconWrapper>
              <IconWrapper
                href="https://www.facebook.com/"
                onClick={() => gaEventTracker("facebook")}
              >
                <FaFacebookF />
              </IconWrapper>
              <IconWrapper
                href="https://www.instagram.com/"
                onClick={() => gaEventTracker("instagram")}
              >
                <FaInstagram />
              </IconWrapper>
            </Row>
          </ShowMobile>
          {links !== undefined && (
            <NavLinks dash={dash} open={showMenu}>
              {showMenu && (
                <Toggle
                  onClick={() => setShowMenu(false)}
                  style={{ marginLeft: "auto", marginBottom: 20 }}
                >
                  <VscChromeClose color={colors.danger} />
                </Toggle>
              )}

              {links.map((item, index) => (
                <LinkItem
                  dash={dash}
                  onClick={() => setShowMenu(false)}
                  key={index}
                >
                  {item.link === undefined ? (
                    <div>
                      {item.type === "btn" ? (
                        <Row>
                          {/* candidates button to link out of the homepage to candidates subdomain   "START" */}
                          {/* <LinkText> */}
                          <a
                            href="https://candidates.dacurate.com"
                            onClick={() => gaEventTracker("candidates")}
                            style={{
                              margin: "0 30px 0 0",
                            }}
                          >
                            <Text
                              navlnk
                              className="link"
                              weight={700}
                              size={dash !== undefined && 18}
                            >
                              Candidates
                            </Text>
                          </a>
                          {/* </LinkText> */}
                          {/* candidates button to link out of the homepage  to candidates subdomain "END" */}

                          <HideMobile>
                            <a
                              href="https://www.donate.dacurate.com/donate/"
                              onClick={() => gaEventTracker("donate")}
                            >
                              <CustomButton
                                outline={item.outline}
                                success
                                // onClick={item.onClick}
                              >
                                {item.title}
                              </CustomButton>
                            </a>
                          </HideMobile>
                        </Row>
                      ) : (
                        <Text
                          navink
                          className="link"
                          weight={700}
                          size={dash !== undefined && 20}
                        >
                          {item.title}
                        </Text>
                      )}
                    </div>
                  ) : (
                    <LinkText to={item.link}>
                      {item.type === "btn" ? (
                        <HideMobile onClick={() => gaEventTracker(item.title)}>
                          <CustomButton
                            outline={item.outline}
                            onClick={item.onClick}
                          >
                            {item.title}
                          </CustomButton>
                        </HideMobile>
                      ) : (
                        <Row>
                          {dash !== undefined && item.icon !== undefined && (
                            <item.icon
                              className="icon"
                              style={{ marginRight: 10, fontSize: 24 }}
                            />
                          )}
                          <Text
                            navlnk
                            className="link"
                            weight={700}
                            size={dash !== undefined && 18}
                          >
                            {item.title}
                          </Text>
                        </Row>
                      )}
                    </LinkText>
                  )}
                </LinkItem>
              ))}
            </NavLinks>
          )}
        </Row>
      </div>
    </Nav>
  );
}
