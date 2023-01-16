/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { renderToString } from 'react-dom/server';





function SEO({ description, lang, meta, title, keywords, url, author }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            url
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  // Using react hook to get the current url of the page
  

  return renderToString(

      <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      url={url.renderToString}
      author={author}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
         {
          property: `og:locale`,
          content: "en_US",
        },
            {
          name: `robots`,
          content: "index, follow",
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:site_name`,
          content: `Home Comfort Air`,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          name: `pinterest`,
          content: `nopin`,
        },
       {
          property: `og:url`,
          content: `https://homecomfortair.net.au${url}` ,
        },
        {
          property: `og:type`,
          content: url === '/' ? 'website' : 'article',
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
         {
          property: `og:image`,
          content: 'https://res.cloudinary.com/ewebdesigns/image/upload/v1597993348/facebook-cover-3_rzv8bs.png',
        },
         {
          property: `og:image:width`,
          content: '800',
        },
         {
          property: `og:image:height`,
          content: '300',
        },
        {
          name: `article:publisher`,
          content: `https://www.facebook.com/Home-Comfort-Air`,
        },
        {
          name: `article:modified_time`,
          content: new Date().toISOString(),
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    >
    
    
      <script type="text/javascript" id="hs-script-loader" async defer src="//js-na1.hs-scripts.com/8357275.js"></script>

      </Helmet>
   
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  keywords: [],
  url: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
