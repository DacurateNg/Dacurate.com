import React from "react";

export default function Converter({ theme }) {
  return (
    <div style={{ width: "100%", height: 335, backgroundColor: theme ? theme : "#fff", overflow: "hidden", boxSizing: "border-box" }}>
      <div style={{ height: 315, padding: 0, margin: 0, width: "100%" }}>
        <iframe
          src={`https://widget.coinlib.io/widget?type=converter&theme=${theme ? theme : "light"}`}
          width="100%"
          height="310px"
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
