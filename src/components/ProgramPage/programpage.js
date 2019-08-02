import React from "react";
import Layout from "../../components/FrontLayout";
import BlogHeader from "../../components/BlogHeader";
import SignupSection from "../../components/SignupSection";
import ProgramOverview from "../../components/ProgramOverview";
import fetchAllPages from "../../hooks/fetchAllPages";
import css from "./programpage.module.scss";

const ProgramPage = ({ program }) => {
  const data = fetchAllPages();
  const aboutRe = new RegExp(`^/programs/about-${program}`);
  const courseRe = new RegExp(`^/courses/${program}`);

  const about = data.allMarkdownRemark.edges.find(i =>
    i.node.frontmatter.path.match(aboutRe)
  ).node;

  const courses = data.allMarkdownRemark.edges
    .filter(i => i.node.frontmatter.path.match(courseRe))
    .map(i => {
      i.node.frontmatter.date = new Date(i.node.frontmatter.date);
      return i;
    })
    .sort((a, b) =>
      a.node.frontmatter.date > b.node.frontmatter.date ? 1 : -1
    );

  about.frontmatter.siteUrl = `https://academy.knowit.no/programs/${program}/`;
  about.frontmatter.path = `/programs/${program}`;

  return (
    <Layout data={data.site.siteMetadata}>
      <section id="main" className={css.courseInfoSection}>
        <BlogHeader data={about} />
        <div
          className={css.aboutProgram}
          dangerouslySetInnerHTML={{ __html: about.html }}
        />
        <ProgramOverview courses={courses} title="Kursoversikt" />
        <SignupSection />
      </section>
    </Layout>
  );
};

export default ProgramPage;
