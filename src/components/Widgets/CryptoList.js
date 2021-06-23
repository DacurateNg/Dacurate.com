import React from "react";
import CardBody from "../Card/CardBody";

export default function CryptoList() {
  return (
    <CardBody>
      <div style={{ height: 649, padding: 0, margin: 0, width: "100%" }}>
        <iframe
          title="cryptolist"
          src="https://widget.coinlib.io/widget?type=full_v2&theme=light&cnt=10&pref_coin_id=1505&graph=yes"
          width="100%"
          height="645px"
          scrolling="auto"
          marginwidth="0"
          marginheight="0"
          frameborder="0"
          border="0"
          style={{ border: 0, padding: 0, margin: 0 }}
        ></iframe>
      </div>
    </CardBody>
  );
}
