import React from "react";

export default function CryptoChart({ id, theme }) {
  return (
    <div style={{ width: "100%", height: 560, backgroundColor: theme ? theme : "#fff", overflow: "hidden", boxSizing: "border-box" }}>
      <div style={{ height: 540, padding: 0, margin: 0, width: "100%" }}>
        <iframe
          src={`https://widget.coinlib.io/widget?type=chart&theme=${theme ? theme : "dark"}&coin_id=${id === undefined ? 859 : id}&pref_coin_id=1505`}
          width="100%"
          height="536px"
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
