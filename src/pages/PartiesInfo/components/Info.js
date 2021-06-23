import React, { useState } from "react";
import styled from "styled-components";
import Section from "../../../components/Section";
import Text from "../../../components/Typography/Text";
import { colors } from "../../../jss/colors";
import "./carousel.css";
import OwlCarousel from "react-owl-carousel2";
import CustomButton from "../../../components/Button/Button";
import { FaEye } from "react-icons/fa";
import { Col, Row } from "react-bootstrap";
import CustomModal from "../../../components/Modal/Modal";

const Wrapper = styled.div`
  background: ${colors.white};
  padding: 30px;
`;

const SectionInner = styled.div`
  padding: 0 40px;
  @media all and (min-width: 996px) {
    padding: 0 100px;
  }
`;

const CardWrapper = styled.div`
  padding: 20px;
  background: ${colors.grey};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const InfoText = styled(Text)`
  width: max-content;
`;

const PartyCard = ({ img, party, onClick }) => (
  <CardWrapper>
    <img src={img} alt="" className="w-50 mb-3" />
    <Text mb="15px" align="center" size="25" weight="600">
      {party}
    </Text>

    <CustomButton onClick={onClick} style={{ padding: 8 }} background="white" color="secondary">
      View More <FaEye />
    </CustomButton>
  </CardWrapper>
);

const InfoCard = ({ img, chairman, senate, governorship, hor }) => (
  <CardWrapper>
    <Row className=" align-items-center justify-content-between w-100 mb-3">
      <InfoText size="19" weight="500">
        Chairman:
      </InfoText>

      <InfoText size="19">{chairman}</InfoText>
    </Row>
    <Row>
      <Col xs={12} sm={4}>
        <img src={img} className=" col-10" alt="" />
      </Col>
      <Col xs={12} sm={8} className=" h-100">
        <Row className=" align-items-center justify-content-between bg-white p-3">
          <InfoText size="19" weight="500">
            Senate:
          </InfoText>

          <InfoText size="19">{senate}</InfoText>
        </Row>
        <Row className="align-items-center justify-content-between bg-white p-3">
          <InfoText size="19" weight="500">
            Governorship:
          </InfoText>

          <InfoText size="19">{governorship}</InfoText>
        </Row>
        <Row className=" align-items-center justify-content-between bg-white p-3">
          <InfoText size="19" weight="500">
            House of Representative:
          </InfoText>
          <InfoText size="19">{hor}</InfoText>
        </Row>
      </Col>
    </Row>
  </CardWrapper>
);

export default function PartiesInfo() {
  const [apcModal, setApcModal] = useState(false);
  const [pdpModal, setPdpModal] = useState(false);
  const options = {
    // loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      996: {
        items: 2,
        nav: false,
      },
    },
  };
  return (
    <>
      <Section background="grey">
        <SectionInner>
          <Wrapper>
            <Text align="center" size="25" weight="600">
              Parties info
            </Text>

            <div className="mt-5">
              <OwlCarousel options={options}>
                <div className="item m-md-2">
                  <PartyCard onClick={()=> setApcModal(!apcModal)} img="/images/apc.svg" party="All Progressive Congress (APC)" />
                </div>
                <div className=" item m-3">
                  <PartyCard onClick={()=> setPdpModal(!pdpModal)} img="/images/pdp.svg" party="Peoples Democratic Party (PDP)" />
                </div>
              </OwlCarousel>
            </div>
          </Wrapper>
        </SectionInner>
      </Section>
      <Section>
        <SectionInner>
          <Text align="center" size="25" weight="600">
            Political parties representation
          </Text>

          <div className="mt-5">
            <OwlCarousel options={options}>
              <div className=" item m-3">
                <InfoCard img="/images/pdp.svg" chairman="Prince Uche Secondus" senate="43/109" governorship="13/36" hor="190/360" />
              </div>
              <div className="item m-3 ">
                <InfoCard img="/images/apc.svg" chairman="Mai Mala Buni (Caretaker)" senate="65/109" governorship="23/36" hor="151/360" />
              </div>
            </OwlCarousel>
          </div>
        </SectionInner>
      </Section>

      <CustomModal show={pdpModal} onClose={() => setPdpModal(!pdpModal)}>
        Founded in 1998 ahead of the 1999 elections, it was for 16 years the nation’s ruling party, producing four of the country’s post-military presidents and
        more governors and legislators than any other political party. It was defeated in the 2015 general elections by the APC and is now the major opposition
        party in Nigeria. Its political ideology is considered to be social conservative. The successive defections of governors and legislators to the newly
        created APC in the runup to the 2015 elections clearly demonstrated that the PDP was in crisis and its attempts to reorganise under a new Chairman ahead
        of the elections, never mind the problematic second-term ambition of then President Jonathan, were too little too late. Though once a national party,
        the party’s power base is primarily in the South-East and South-South regions as well as pockets of states in the North-Central/North-East.
      </CustomModal>

      <CustomModal show={apcModal} onClose={()=> setApcModal(!apcModal)} >
        Formed in February 2013 with the 2015 General Elections in mind, this party defeated the Peoples’ Democratic Party to become the ruling party in the
        country. The APC was created when three major opposition parties CPC, ACN and ANPP came together with a faction of APGA in a broad coalition, bringing
        roughly a third of the state governors and national legislators at the time together in a single opposition party. The party then undertook an
        aggressive membership drive which was rewarded by mass defections from a crisis-ridden PDP. With the party’s membership boosted by so many former PDP
        members, many of whom had had lacklustre performances in their executive or legislative roles, the initial excitement over the emergence of a powerful
        opposition to counter the PDP has given way to questions about the party’s legitimacy to bring reforms and whether it really had a unique agenda and
        ideology. In fact differing agendas and interests have repeatedly caused friction within the ranks of the APC and these power tussles reveal the
        weakness of the party – the party leadership has struggled to resolve these lingering rival interests and ambitions and unite the party. The APC
        currently holds majority in both houses of the National Assembly as well as majority of governors of the 36 states of the federation.
      </CustomModal>
    </>
  );
}
