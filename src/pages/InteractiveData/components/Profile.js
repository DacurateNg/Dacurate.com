import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import GoBack from "../../../components/GoBack";
import ProfileCard from "../../../components/ProfileCard";
import Text from "../../../components/Typography/Text";
import { colors } from "../../../jss/colors";

const TopBanner = styled.div`
  position: absolute;
  width: 100%;
  height: 290px;
  background: ${colors.primary};
  z-index: 0;
  top: 0;
`;

export default function Profile({ img, name, dob, about }) {
  return (
    <div style={{ marginBottom: 100, paddingTop: 80, position: "relative" }}>
      <TopBanner>
        <GoBack />
      </TopBanner>
      <div className="container" style={{ zIndex: 3, position: "relative" }}>
        <Row>
          <Col md={4}>
            <ProfileCard img={img} />
          </Col>

          <Col md={8}>
            <div className="reverse-white" style={{ marginBottom: 120, marginTop: 70 }}>
              <Text white size="35" weight="700" align="center">
                {name}
              </Text>

              <Text white size="20" align="center">
                {dob}
              </Text>
            </div>

            <Text primary size="25" weight="700" mb="20px">
              About {name && name.split(" ")[name.split(" ").lastIndex]}
            </Text>

            <Text size="18">{about}</Text>
          </Col>
        </Row>
      </div>
    </div>
  );
}
