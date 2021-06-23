import React from "react";
import { useParams } from "react-router";
import Section from "../../components/Section";
import FAQ from "../GovernmentArms/components/Faq";
import DataTabs from "./components/DataTabs";
import DateData from "./components/DateData";
import Profile from "./components/Profile";
import variable from "./variable";

export default function DataPage() {
  const { index } = useParams();
  const data = variable[index === "presidency" ? 0 : 1];
  return (
    <>
      <Profile name={data.name} dob={data.dob} about={data.about} img={data.img} />
      <DataTabs data={data.tabs} />
      <Section background="primary" />

      {data.faq && <FAQ />}
      {data.dateData && <DateData data={data.dateData} />}
    </>
  );
}
