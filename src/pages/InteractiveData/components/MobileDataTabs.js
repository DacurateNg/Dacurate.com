import styled from "styled-components";
import FaqList from "../../../components/FAQ";
import Text from "../../../components/Typography/Text";
import { ShowMobile } from "../../../jss";

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

export default function MobileDataTabs({ data }) {
  return (
    <ShowMobile>
      {data.map((item, index) => (
        <FaqList
          question={
            <Text key={index.toString()} primary size="18" mb="5px">
              {item.title}
            </Text>
          }
          answer={
            <>
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
            </>
          }
        />
      ))}
    </ShowMobile>
  );
}
