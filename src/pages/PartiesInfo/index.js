import React from "react";
import PartiesInfo from "./components/Info";
import PartiesHero from "./components/PartiesHero";
import Newsletter from "../../components/Newsletter";

export default function PartiesInfoPage() {
  return (
    <>
      <PartiesHero />
      <PartiesInfo />
      <Newsletter />
    </>
  );
}
