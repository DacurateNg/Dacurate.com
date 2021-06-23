import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CustomButton from "../../components/Button/Button";
import Newsletter from "../../components/Newsletter";
import Section from "../../components/Section";
import Text from "../../components/Typography/Text";
// import BlogRow from "./components/BlogRow";
import CustomCarousel from "./components/CustomCarousel";
import AboutHero from "./components/Hero";
import HiwRow from "./components/HiwRow";
import InsightModal from "./components/InsightModal";
import PoliticalData from "./components/PoliticalData";

export default function HomePage() {
  const [state, setState] = React.useState(false);
  return (
    <>
      <AboutHero />
      <CustomCarousel />
      <PoliticalData />
      <Section>
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <img src="/images/hiw-sect.png" className="w-100" alt="" />
            </Col>
            <Col xs={12} md={6}>
              <Text weight="600" align="center" mb="80px" size="25">
                How does it work?
              </Text>
              <HiwRow bg="primary" icon="/images/icons/search.svg" step="One" description="Search for the data" left="-40px" />
              <HiwRow bg="success" icon="/images/icons/eyes.svg" step="Two" description="Have a preview of the data" left="-20px" />
              <HiwRow
                bg="primaryDark"
                icon="/images/icons/download.svg"
                step="Three"
                description="Download the data to understand the politic landscape"
                left="10px"
                style={{ marginBottom: 0 }}
              />
            </Col>
          </Row>
        </Container>
      </Section>
      <Section>
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6}>
              <Text weight="700" color="primaryDark" align="center" mb="15px" size="25">
                Interactive Data
              </Text>
              <Text align="center" mb="25px" size="18">
                Real time information are available at any time for the best update
              </Text>
              <div className="row justify-content-center align-items-center">
                <CustomButton onClick={() => setState(!state)} m="5px" secondary>
                  Download
                </CustomButton>
                <CustomButton m="5px" outline success>
                  Support
                </CustomButton>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <img src="/images/int-sect.png" alt="" className="w-100 h-100" />
            </Col>
          </Row>
        </Container>
      </Section>

      {/* <Section background="blogDark">
        <Container>
          <Text white align="center" mb="40px" weight="700" size="35">
            Blog
          </Text>
          <BlogRow
            img="/images/blog-1.png"
            title="Nigerian government spends equivalent of 83% of revenue to service debt"
            text="The Federal Government of Nigeria achieved a debt service to revenue ratio of 83% in 2020. This is according to the information contained in the budget implementation report of the government for the year ended December 2020."
          />
          <BlogRow
            swap
            img="/images/blog-2.png"
            title="House Asks Nigeria Government to Halt Disbursement of £4.2m Repatriated from UK"
            text="Nigeria’s House of Representatives has asked the Federal Government to halt the disbursement of the £4.2m – about 2.2 billion Naira that was seized from a former Delta State Governor James Ibori."
          />
        </Container>
      </Section> */}
      <Section />
      <Newsletter />
      <InsightModal state={state} setState={setState} />
    </>
  );
}
