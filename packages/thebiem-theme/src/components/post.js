import React from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";
import dayjs from "dayjs";

const Post = ({ state, libraries }) => {
  const Html2React = libraries.html2react.Component;

  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const author = state.source.author[post.author];

  const categories = post.categories.map((category) => {
    let cat = state.source.category[category];

    return (
      <>
        <Link key={cat.id} link={cat.link}>
          {cat.name}
        </Link>{" "}
      </>
    );
  });

  const postDate = dayjs(post.date).format("DD.MM.YY");

  return (
    <div>
      <h2>{post.title.rendered}</h2>
      <PostInfo>
        <p>
          <strong>Posted: </strong>
          {postDate}
        </p>
        <p>
          <strong>Author: </strong>
          {author.name}
        </p>
        <p>
          <strong>Categories: {categories} </strong>
        </p>
      </PostInfo>

      <Html2React html={post.content.rendered} />
    </div>
  );
};

export default connect(Post);

const PostInfo = styled.div`
  background-image: linear-gradient(to right, #f4f4f4, #fff);
  margin-bottom: 1em;
  padding: 0.5em;
  border-left: 4px solid lightseagreen;
  font-size: 0.8em;

  & > p {
    margin: 0;
  }
`;
