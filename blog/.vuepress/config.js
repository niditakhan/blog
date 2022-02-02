module.exports = {
  title: "Nomadic Settler",
  description: "Trying to figure things out as they come, or at least ponder over them- obsessively.",
  base: "/blog",
  theme: "casper",
  head: [["link", { rel: "icon", href: "/favicon.png" }]],
  markdown: {
    anchor: {
      permalink: false,
      permalinkBefore: false
    }
  },
  themeConfig: {
    cover: "https://defaultcustomheadersdata.files.wordpress.com/2016/07/dch_header31.jpg?resize=1440,600",
    logo: "https://avatars.githubusercontent.com/u/96299443",
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
        text: "Media",
        link: "/media"
      }
    ],

    footer: [
      {
        text: "Latest Posts",
        link: "/posts"
      },
      {
        text: "Instagram",
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
      github: "https://github.com/niditakhan",
      twitter: "https://twitter.com/nido07",
      instagram: "https://www.instagram.com/nidaqasimm/",
    },
    defaultAuthor: {
      link: "https://www.instagram.com/nidaqasimm/",
      name: "Nida Khan",
    },
    search: false
  }
};