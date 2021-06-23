import { Col } from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import styled from "styled-components";
import Section from "../../../components/Section";
import Text from "../../../components/Typography/Text";
import { HideMobile } from "../../../jss";
import MobileDataTabs from "./MobileDataTabs";

const Wrapper = styled.div`
  padding: 0 40px;
  @media all and (min-width: 996px) {
    padding: 0 100px;
  }
`;

const TableWrapper = styled.div`
  width: 100%;
  overflow-x: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Table = styled.table`
  border: 0px;
  box-sizing: border-box;
  min-width: 100%;
`;
const Cell = styled.td`
  padding: ${({ cellPad }) => (cellPad ? "10px 20px" : 0)};
  border-left: 0px;
`;
const Row = styled.tr`
  border-top: 0px;
  background: ${({ bg, colored }) => (colored === undefined ? "transparent" : bg % 2 === 0 ? "#ECECEC" : "#F2f2f2")};
`;

export default function DataTabs({ data }) {
  return (
    <Section>
      <Wrapper>
        <HideMobile>
          <Tabs>
            <TabList>
              {data.map((item, index) => (
                <Tab>
                  <Text key={index.toString()} primary size="18" mb="5px">
                    {item.title}
                  </Text>
                </Tab>
              ))}
            </TabList>
            <div className="d-flex justify-content-center mt-5">
              <Col xs={10}>
                {data.map((item) => (
                  <TabPanel>
                    <Text size="18" align="justify">
                      {item.text}
                    </Text>

                    {item.list && (
                      <>
                        <Text mt="50px" weight="600" size="20">
                          {item.list.title}
                        </Text>

                        <div className="mt-4">
                          {item.list.items.map((item, index) => (
                            <Text size="18" key={index.toString()}>
                              {item}
                            </Text>
                          ))}
                        </div>
                      </>
                    )}

                    {item.table && (
                      <>
                        {item.table.title && (
                          <Text mb="20px" weight="600" size="20">
                            {item.table.title}
                          </Text>
                        )}

                        {item.table.text && (
                          <Text mb="20px" size="18">
                            {item.table.text}
                          </Text>
                        )}

                        <div className="mt-4">
                          <TableWrapper>
                            <Table>
                              {item.table.data.map((val, index) => (
                                <Row bg={index} key={index.toString()} colored={item.table.colored}>
                                  <Cell cellPad>{val[1]}</Cell>
                                  <Cell cellPad>{val[2]}</Cell>
                                </Row>
                              ))}
                            </Table>
                          </TableWrapper>
                        </div>
                      </>
                    )}
                  </TabPanel>
                ))}
              </Col>
            </div>
          </Tabs>
        </HideMobile>
        <MobileDataTabs data={data} />
      </Wrapper>
    </Section>
  );
}
