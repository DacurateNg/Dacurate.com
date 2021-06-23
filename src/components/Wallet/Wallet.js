import { useStoreState } from "easy-peasy";
import React from "react";
import { Link } from "react-router-dom";
import { colors } from "../../jss/colors";
import { Section } from "../../pages/components";
import Card from "../Card/Card";
import CardBody from "../Card/CardBody";
import Icons from "../Icons/Icons";
import Text from "../Typography/Text";
import Title from "../Typography/Title";

export default function Wallet({ balance, noProfile }) {
  const { currentUser } = useStoreState((state) => state.auth);

  return (
    <Section className="pb-0  px-md-0  pt-md-3">
      <Card className="p-2" style={{ background: colors.primary }}>
        <CardBody className="px-5 _row flex-column flex-md-row justify-content-between">
          {noProfile === undefined ? (
            <Link to="/profile">
              <div className="_row">
                <Icons size={24} name="FaUserCircle" fa primary />
                <Text className="mt-1">{currentUser !== null ? currentUser.firstName + " " + currentUser.lastName.substring(0, 1) + "." : "Profile"}</Text>
              </div>
            </Link>
          ) : (
            <div></div>
          )}
          <div className="_row">
            <Icons size={24} name="FaWallet" fa primary />
            <div className="mt-2 _row">
              <Text align="right" inline weight={600} size={14}></Text>
              <Title size={18} inline primary>
                ${currentUser !== null ? Number(currentUser.wallet).toFixed(2) : 0.0}
              </Title>
            </div>
          </div>
        </CardBody>
      </Card>
    </Section>
  );
}
