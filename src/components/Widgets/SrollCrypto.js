import React from "react";
import styled from "styled-components";

const SlideHolder = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 300;
  width: 100%;
`;

export default function ScrollCrypto({ ...rest }) {
  return (
    <SlideHolder {...rest} >
      <div style={{ height: 40, padding: "10px 0", margin: 0, width: "100%" }}>
        <iframe
          title="scroll-crypt"
          src="https://widget.coinlib.io/widget?type=horizontal_v2&theme=light&pref_coin_id=1505&invert_hover="
          width="100%"
          height="36px"
          scrolling="auto"
          marginwidth="0"
          marginheight="0"
          frameborder="0"
          border="0"
          style={{ border: 0, padding: 0, margin: 0 }}
        ></iframe>
      </div>
    </SlideHolder>
  );
}
