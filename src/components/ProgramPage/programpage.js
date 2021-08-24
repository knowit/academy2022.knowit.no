import React from 'react'
import Layout from '../../components/FrontLayout'
import BlogHeader from '../../components/BlogHeader'
import SignupSection from '../../components/SignupSection'
import ProgramOverview from '../../components/ProgramOverview'
import FetchAllPages from '../../hooks/fetchAllPages'
import * as css from './programpage.module.scss'

function parseIsoString(s) {
  const b = s.split(/\D+/)
  return new Date(...b)
}

const ProgramPage = ({ program }) => {
  const data = FetchAllPages()
  const aboutRe = new RegExp(`^/programs/about-${program}`)
  const courseRe = new RegExp(`^/courses/${program}`)

  const about = data.allMarkdownRemark.edges.find((i) =>
    i.node.frontmatter.path.match(aboutRe)
  ).node

  const courses = data.allMarkdownRemark.edges
    .filter((i) => i.node.frontmatter.path.match(courseRe))
    .map((i) => {
      i.node.frontmatter.date = parseIsoString(i.node.frontmatter.date)
      return i
    })
    .sort((a, b) =>
      a.node.frontmatter.date > b.node.frontmatter.date ? 1 : -1
    )

  about.frontmatter.siteUrl = `https://academy.knowit.no/programs/${program}/`
  about.frontmatter.path = `/programs/${program}`

  console.log('program page: about', about)

  return (
    <Layout data={about.frontmatter}>
      <section id="main" className={css.gridContainer}>
        <div className={css.blogArticle}>
          <BlogHeader data={about} />
          <div
            className={css.aboutProgram}
            dangerouslySetInnerHTML={{ __html: about.html }}
          ></div>
          <ProgramOverview courses={courses} title="Kursoversikt" />
        </div>
      </section>
      <SignupSection />
    </Layout>
  )
}

export default ProgramPage
