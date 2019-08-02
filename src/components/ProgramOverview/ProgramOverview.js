import React from "react";
import InfoHeader from "../../components/InfoHeader";
import css from "./ProgramOverview.module.scss";

const ProgramOverview = ({ courses, title }) => {
  const courseInfo = courses.map(i => {
    const data = i.node;
    const frontmatter = i.node.frontmatter;

    return (
      <InfoHeader data={data} key={frontmatter.path} showDescription={true} />
    );
  });

  return (
    <div className={css.programOverview}>
      <h2>{title}</h2>
      {courseInfo}
    </div>
  );
};

export default ProgramOverview;
