import React from "react";
import styled from "styled-components";
import Text from "../../../components/Typography/Text";
import { colors } from "../../../jss/colors";
const Wrapper = styled.div`
  width: 100%;
  overflow-x: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Table = styled.table`
  border: 1px solid #000000;
  box-sizing: border-box;
  min-width: 100%;
`;
const Header = styled.thead`
  background-color: ${colors.success};
`;
const Heading = styled.th`
  padding: 20px;
  border-left: 1px solid #000000;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  :first-child {
    border-left: 0px;
  }
`;
const Cell = styled.td`
  padding: ${({ cellPad }) => (cellPad ? "20px" : 0)};
  border-left: 1px solid #000000;
  :first-child {
    border-left: 0px;
  }
  min-width: max-content;
`;
const Row = styled.tr`
  padding: 20px;
  border-top: 1px solid #000000;
  :first-child {
    border-top: 0px;
  }
  min-width: 100%;
`;

const TextBg = styled(Text)`
  padding: 3px 15px;
  width: max-content;
  word-wrap: normal;
`;

const BgWrapper = styled.div`
  width: 100%;
  background: ${({ bg }) => (bg % 2 === 0 ? "rgba(200, 215, 254, 0.3)" : "rgba(124, 161, 255, 0.21)")};
`;

export default function LgaTable({ data }) {
  return (
    <Wrapper>
      <Table>
        <Header>
          <Row>
            <Heading>STATE</Heading>
            <Heading>LOCAL GOVERNMENT</Heading>
            <Heading>CHAIRMEN</Heading>
          </Row>
        </Header>
        <tbody>
          {data.map((item, index) => (
            <Row key={index.toString()}>
              <Cell cellPad={true}>
                <div className="d-flex justify-content-center">
                  <img src={`/images/lga/${item.field1}.svg`} alt="" />
                </div>
                <Text mt="15px" weight="500" align="center" size="18">
                  {item.state}
                </Text>
              </Cell>
              <Cell>
                {item.data.map((val, indx) => (
                  <BgWrapper bg={indx}>
                    <TextBg mb="0px" key={indx.toString()}>
                      {val.lga}
                    </TextBg>
                  </BgWrapper>
                ))}
              </Cell>
              <Cell>
                {item.data.map((val, indx) => (
                  <BgWrapper bg={indx}>
                    <TextBg mb="0px" key={indx.toString()}>
                      {val.chairmen}
                    </TextBg>
                  </BgWrapper>
                ))}
              </Cell>
            </Row>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
}
