import React from "react";
import AcademyLogoBanner from "../components/AcademyLogoBanner";
import AboutAcademy from "../components/AboutAcademy";

const IndexPage = () => (
  <div id="IndexPage">
    <AcademyLogoBanner />
    <div className="inline">
      <AboutAcademy />
    </div>
  </div>
);

export default IndexPage;
