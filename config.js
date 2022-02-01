module.exports = {
    title: "Nomadic Settler",
    description: "Nida's Blog",
    base: "/",
    theme: "casper",
    head: [["link", { rel: "icon", href: "/favicon.png" }]],
    markdown: {
      anchor: {
        permalink: false,
        permalinkBefore: false
      }
    },
    themeConfig: {
      cover: "/images/cover.jpg",
      logo: "/images/logo.png",
      nav: [
        {
          text: "Home",
          link: "/"
        },
        {
          text: "Posts",
          link: "/posts"
        },
        {
          text: "Category",
          link: "/category/some-category"
        },
        {
          text: "Page",
          link: "/a-page.html"
        }
      ],
  
      footer: [
        {
          text: "Latest Posts",
          link: "/posts"
        },
        {
          text: "Facebook",
          link: "https://facebook.com/"
        },
        {
          text: "Twitter",
          link: "https://twitter.com"
        },
        {
          text: "Github",
          link: "https://github.com/"
        }
      ],
      social: {
        github: "https://github.com",
        twitter: "https://twitter.com",
        facebook: "https://facebook.com",
        xing: "https://xing.de",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com"
      },
      defaultAuthor: {
        link: "https://alexander.heimbu.ch",
        name: "Default Author",
        gravatar: "2bfa103a13c88b5ffd26da6f982f11df"
      },
      search: false
    }
  };