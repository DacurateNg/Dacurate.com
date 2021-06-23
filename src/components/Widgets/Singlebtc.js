import React from "react";

export default function Singlebtc({ id }) {
  return (
    <div
      style={{
        width: "100%",
        height: 220,
        backgroundColor: " #FFFFFF",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      <div style={{ height: "200px", padding: 0, margin: 0, width: "100%" }}>
        <iframe
          title={"crypocurrency" + id}
          src={`https://widget.coinlib.io/widget?type=single_v2&theme=light&coin_id=${id === undefined ? 859 : id}&pref_coin_id=1505`}
          width="100%"
          height="196px"
          scrolling="auto"
          marginwidth="0"
          marginheight="0"
          frameborder="0"
          border="0"
          style={{ border: 0, margin: 0, padding: 0, lineHeight: 14 }}
        ></iframe>
      </div>
    </div>
  );
}
