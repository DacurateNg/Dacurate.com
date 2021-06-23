import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export default function Layout({ headless, children }) {
  const history = useHistory();
  const [links] = useState([
    { link: "/", title: "Home" },
    { link: "/#what-do-we-offer", title: "About" },
    { link: "/government-arms", title: "Government Arms" },
    { link: "/#election-insight", title: "Elections insight" },
    { link: "/contact", title: "Contact" },
    {
      type: "btn",
      onClick: () => history.push("/donate"),
      title: "Donate",
    },
  ]);
  return (
    <div>
      <Header topheader={!headless} links={links} />
      {children}
      <Footer />
    </div>
  );
}
