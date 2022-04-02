import React from "react";
import { connect, Global, css, styled } from "frontity";
import Link from "@frontity/components/link";
import Switch from "@frontity/components/switch";

// Components
import Home from "./home";
import Post from "./post";
import Page from "./page";
import Loading from "./loading";
import Error from "./error";

const Root = ({ state, actions }) => {
  const data = state.source.get(state.router.link);

  return (
    <>
      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          html {
            font-family: system-ui, Verdana, Arial, sans-serif;
          }
        `}
      />

      <Header>
        <HeaderContent>
          <h1>Thebiem</h1>
          {state.theme.isUrlVisible ? (
            <>
              Current URL: {state.router.link}{" "}
              <Button onClick={actions.theme.toggleUrl}>&#x3c; Hide URL</Button>
            </>
          ) : (
            <Button onClick={actions.theme.toggleUrl}>Show URL &#x3e;</Button>
          )}
          <nav>
            <Menu>
              <Link link="/">Home</Link> <Link link="/about-us">About Us</Link>{" "}
              <Link link="/webtoon-top10">Webtoon</Link>{" "}
              <Link link="/manga">Manga</Link>
            </Menu>
          </nav>
        </HeaderContent>
      </Header>
      <hr />
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <Home when={data.isArchive} />
          <Post when={data.isPost} />
          <Page when={data.isPage} />
          <Error when={data.isError} />
        </Switch>
      </Main>
    </>
  );
};

export default connect(Root);

const Header = styled.header`
  background-color: black;
  color: white;
  a:hover {
    color: steelblue;
  }
`;

const HeaderContent = styled.div`
  max-width: 800px;
  padding: 2em 1em;
  margin: auto;
`;

const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  margin-top: 1em;
  & > a {
    margin-right: 1em;
    color: white;
    text-decoration: none;
  }
`;

const Main = styled.main`
  max-width: 800px;
  padding: 1em;
  margin: auto;

  img {
    max-width: 100%;
  }
  h2 {
    margin: 0.5em 0;
  }
  p {
    line-height: 1.25em;
    margin-bottom: 0.75em;
  }
  figcaption {
    color: #828282;
    font-size: 0.8em;
    margin-bottom: 1em;
  }
`;

const Button = styled.button`
  background: transparent;
  border: none;
  color: #aaa;

  :hover {
    cursor: pointer;
    color: #888;
  }
`;
