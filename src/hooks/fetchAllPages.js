import { useStaticQuery, graphql } from "gatsby";

const fetchAllPages = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
            description
            ogImage
          }
        }
        allMarkdownRemark {
          edges {
            node {
              html
              frontmatter {
                title
                path
                date
                endDate
                description
                image
                teacher
                updated
                confirmed
                author
              }
            }
          }
        }
      }
    `
  );
  return data;
};

export default fetchAllPages;
