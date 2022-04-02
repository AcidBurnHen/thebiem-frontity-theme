const settings = {
  name: "react-thebiem-app",
  state: {
    frontity: {
      url: "https://test.frontity.org",
      title: "Thebiem",
      description: "Top 10s And Recommendations",
    },
  },
  packages: [
    {
      name: "thebiem-theme",
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://thebiem.com",
          categoryBase: "/",
        },
        wpSource: {
          isWpCom: true,
          prefix: "/wp-json",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
