module.exports = {
  //  flags: {
  //   PRESERVE_FILE_DOWNLOAD_CACHE: true,
  //   PRESERVE_WEBPACK_CACHE: true,
  //   FAST_DEV: true,
  //   DEV_SSR: true,
  // },
  siteMetadata: {
    title: ` `,
    description: `Discover Home Comfort Air residential air conditioning services throughout Brisbane, Ipswich, Gold Coast and Tweed Heads areas. Affordable sales, service and installations.`,
    keywords: `split, system, air, conditioning, service, installation, domestic, ducted, sales, `,
    url: `https://homecomfortair.net.au`,
    author: `HOME COMFORT AIR`,
    siteUrl: `https://homecomfortair.net.au`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `material icons`,
          `Nunito Sans\:300,400,400i,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Nunito Sans", "sans-serif"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-prettier-build`,
      options: {
        // default values
        types: ["html"],
        concurrency: 20,
        verbose: true,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://homecomfortair.net.au`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/slides`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:4200`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`product`],

        // Possibility to login with a strapi user, when content types are not publically available (optional).
        loginData: {
          identifier: "",
          password: "",
        },
      },
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        useAutoGen: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#0075c9`,
        theme_color: `#0075c9`,
        display: `minimal-ui`,
        icon: `src/images/avatar-42x42.png`, // This path is relative to the root of the site.
      },
    },
       {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -90,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-pinterest-twitter-facebook`,
      options: {
        // Use this to control how long you want this plugin to wait before initializing the Facebook and Twitter scripts
        // By default, this plugin will wait 1 second before initializing the social widgets to ensure that the page loads and the container elements for these widgets are created in the DOM
        // Value should be in milliseconds
        delayTimer: 1000, // default
        pinterest: {
          // Set this to false if you want to disable pinterest
          enable: true, // default
          // Set this to true to display a larger size button
          tall: true, // default
          // Set this to true to hide the pinterest text and display only a round 'P' button
          round: false, // default
        },
        twitter: {
          // Set this to false if you want to disable twitter
          enable: true, // default
          // Set this to the querySelector string of the container element where you want to display twitter timeline and follow button
          // If you do not define this, twitter timeline and follow button will not work
          // Fox example: `.twitter-container` or `#.twitter-timeline`
          containerSelector: null,
          // Set this to the twitter handle you want to use
          // Do not include `@` symbol here
          // If you do not define this, twitter timeline and follow button will not work
          handle: null, // default
          // Set this to false if you do not want to show follow button
          showFollowButton: true, // default
          // Set this to false if you do not want to show timeline
          showTimeline: true, // default
          // Set this to false if you do not want to show followers count
          // This only applies if `showLikeButton` is set to true
          showFollowerCount: true, // default
          // Set this to the number of most recent tweets you want to display in the timeline
          // This only applies if `showTimeline` is set to true
          timelineTweetCount: 1, // default
          // The pixel width of the plugin as a number
          // Do not include units such as 'px', 'rem', '%' etc here
          // Minimum allowed value is 220
          // If you leave this as null, then the widget will try to occupy all available container width
          width: null, // default
          // The pixel height of the plugin as a number
          // Do not include units such as 'px', 'rem', '%' etc here
          // Minimum allowed value is 200
          // If you leave this as null, then the widget will try to occupy all available container height
          height: null, // default
          // Hides the timeline header. Implementing sites must add their own Twitter attribution, link to the source timeline, and comply with other Twitter display requirements.
          noHeader: true, // default
          // Hides the timeline footer and Tweet composer link, if included in the timeline widget type.
          noFooter: true, // default
          // Removes all borders within the widget including borders surrounding the widget area and separating Tweets.
          noBorders: true, // default
          // Crops and hides the main timeline scrollbar, if visible. Please consider that hiding standard user interface components can affect the accessibility of your website.
          noScrollbar: true, // default
          // Removes the widget’s background color.
          transparent: true, // default
        },
        facebook: {
          // Set this to false if you want to disable facebook
          enable: true, // default
          // Set this to the querySelector string of the container element where you want to display facebook timeline and like button
          // If you do not define this, facebook timeline and like button will not work
          // Fox example: `.facebook-container` or `#.facebook-timeline`
          containerSelector: "Home-Comfort-Air-1713459065551004/",
          // Set this to the facebook profile or facebook page name you want to use
          // If you do not define this, facebook timeline and like button will not work
          // Do not include `@` symbol here
          profile: null, // default
          // The pixel width of the plugin as a number
          // Do not include units such as 'px', 'rem', '%' etc here
          // Minimum allowed value is 180 and Maximum allowed value is 500
          // If you leave this as null, the plugin will try to occupy all available container width
          width: null, // default
          // The pixel height of the plugin as a number
          // Do not include units such as 'px', 'rem', '%' etc here
          // Minimum allowed value is 70
          // If you leave this as null, the plugin will try to occupy all available container height
          height: null, // default
          // Tabs to render i.e. timeline, events, messages. Use a comma-separated list to add multiple tabs, i.e. timeline, events.
          tabs: "timeline, events, messages", // default
          // Hide cover photo in the header
          hideCover: false, // default
          // Show profile photos when friends like this, i.e. if you are logged in to Facebook, it will show the photos of your friends who have liked this page
          showFacepile: true, // default
          // Use the small header instead, i.e show a smaller cover photo
          smallHeader: false, // default
          // Try to fit inside the container width on page load
          // If the width of the parent element is bigger than the Page plugin's width it will maintain the value defined in width
          // No Dynamic Resizing - If you want to adjust the plugin's width on window resize, you manually need to rerender the plugin.
          adaptContainerWidth: true, // default
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-101330928-5`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
   {
  site {
    siteMetadata {
      siteUrl
    }
  }
  allSitePage {
    edges {
      node {
        path
        context {
      lastmoddate
        }
      }
    }
  }
}

`,
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: `monthly`,
              priority: 0.7,
              lastmod: edge.node.context.lastmoddate,
            }
          }),
      },
    },
     {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: "https://homecomfortair.net.au",
        sitemap: 'https://homecomfortair.net.au/sitemap.xml',
        policy: [{userAgent: '*', allow: '/'}]
      }
    }
  ],
}
