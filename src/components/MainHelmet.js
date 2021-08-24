import React from 'react'
import { Helmet } from 'react-helmet'

const MainHelmet = ({ metadata }) => (
  <Helmet>
    <title>{metadata.title}</title>
    <meta name="description" content={metadata.description} />
    <meta
      name="keywords"
      content="Knowit, Knowit Academy, Knowit Academy Norway, Recruitment, Personal Development, Career Path"
    />
    <meta name="author" content={metadata.author} />
    <meta property="og:title" content={metadata.title} />
    <meta property="og:description" content={metadata.description} />
    <meta property="og:url" content={metadata.siteUrl} />
    <meta property="og:image" content={metadata.ogImage} />
    <link rel="canonical" href="https://academy.knowit.no/" />
    <html lang="no" />
  </Helmet>
)

export { MainHelmet }
