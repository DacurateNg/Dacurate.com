import React from "react";
import { Container } from "react-bootstrap";
import FaqList from "../../../components/FAQ";
import Section from "../../../components/Section";
import Text from "../../../components/Typography/Text";

export default function FAQ() {
  const items = [
    {
      ques: "Who Owns Dacurate ?",
      ans: "Dacurate is run by some young active Nigerians who are tired of being tired. We are tired of complaining and decided to take an action.",
    },
    {
      ques: "How Does It Work ?",
      ans:
        "Dacurate is a political data bank. We curate political information and data from the 4th republic (1999 – date). Users view the data and can download it to understand the political landscape.",
    },
    {
      ques: "How Can I Support The Project ?",
      ans:
        "You can support in various ways. 1. With Resources: Money or other resources (e.g. infrastructures) you believe will help us achieve our objective of educating the populace. 2. Volunteering: You can join the team by providing your time and skillset to help the team. 3. Share Opportunities: If you see any opportunity you believe will help our cause, kindly send us an email.",
    },
  ];
  return (
    <Section pt="85px" pb="95px">
      <Container>
        <Text size="25" mb="25px" align="center" weight="700">
          FAQ Questions
        </Text>

        <div>
          {items.map((item, index) => (
            <FaqList key={index.toString()} question={item.ques} answer={item.ans} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
