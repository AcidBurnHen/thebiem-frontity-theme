import Root from "./components";
import link from "@frontity/html2react/processors/link";
import image from "@frontity/html2react/processors/image";
import { allCategories } from "./config";

const thebiemTheme = {
  name: "thebiem-theme",
  roots: {
    theme: Root,
  },
  state: {
    theme: {
      isUrlVisible: false,
      featured: {
        showOnList: true,
      },
      colors: {
        blue: "#29407d",
        red: "#8E0303",
        purple: "#392257",
        orange: "#b55b16",
        green: "#4e9160",
        black: "black",
        darkred: "#540000",
        darkgreen: "#366342",
        darkblue: "#14224a",
        darkgray: "#3d3d3d",
        darkpink: "#664053",
      },
      filter: {
        isAnime: false,
        isManga: false,
        isWebtoon: false,
        isKorean: false,
      },
      autoPrefetch: "all",
    },
  },
  actions: {
    theme: {
      beforeSSR: async ({ state, actions }) => {
        await Promise.all(
          Object.keys(allCategories).map((category) =>
            actions.source.fetch(`/category/${category}`)
          )
        );
      },
      toggleUrl: ({ state }) => {
        state.theme.isUrlVisible = !state.theme.isUrlVisible;
      },
    },
  },
  libraries: {
    html2react: {
      processors: [link, image],
    },
  },
};

export default thebiemTheme;
