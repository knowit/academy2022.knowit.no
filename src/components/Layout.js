import React from "react"
import Helmet from "react-helmet"

const Layout = ({ children, data }) => {
  return (
    <div>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <meta name="description" content={data.site.siteMetadata.description} />
        <meta
          name="keywords"
          content="Knowit, Knowit Academy, Knowit Academy Norway, Recruitment, Personal Development, Career Path"
        />
        <meta property="og:title" content={data.site.siteMetadata.title} />
        <meta
          property="og:description"
          content={data.site.siteMetadata.description}
        />
        <meta property="og:url" content={data.site.siteMetadata.siteUrl} />
        <meta property="og:image" content={data.site.siteMetadata.ogImage} />
        <link rel="canonical" href="https://academy.knowit.no/" />
        <html lang="nb" />
      </Helmet>
      {children}
    </div>
  )
}

export default Layout
