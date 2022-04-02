import React from "react";
import { connect, styled } from "frontity";
import { getPostsByCatID } from "../helpers/getCatByID";
import CatPost from "./cat-post";

const Home = ({ state, actions, libraries, catnum, ...props }) => {
  const data = state.source.get(state.router.link);
  const Html2React = libraries.html2react.Component;
  const item = data.items.map((item) => state.source[item.type][item.id]);
  const catID = item.map((item) => item.categories[0]);
  const catName = catID.map((cat) => state.source.category[cat].name);
  const catNum = 2;

  return (
    <Items>
      <PostBody>
        <CatPost catnum={catNum} {...props} />
      </PostBody>
      <Pagination>
        {data.previous && (
          <button onClick={() => actions.router.set(data.previous)}>
            &#171; Prev
          </button>
        )}
        {data.next && (
          <button onClick={() => actions.router.set(data.next)}>
            Next &#187;
          </button>
        )}
      </Pagination>
    </Items>
  );
};

export default connect(Home);

const Items = styled.div`
  & > a {
    display: block;
    margin: 50px 0;
    font-size: 1.2em;
    color: #073c9d;
    text-decoration: none;
  }

  a: hover {
    color: black;
    text-decoration: underline;
  }
`;

const PostBody = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  background-color: #f7f8fc;
  font-family: "Roboto", sans-serif;
  color: #10182f;
`;

const Pagination = styled.div`
  padding-top: 1.5em;

  & > button {
    background: #eee;
    text-decoration: none;
    padding: 0.5em 1em;
    color: #888;
    border: 1px solid #aaa;
    font-size: 0.8em;
    margin-right: 2em;
  }
  & > button:hover {
    cursor: pointer;
  }
`;
