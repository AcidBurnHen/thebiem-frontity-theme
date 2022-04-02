import React from "react";
import { connect, styled, css } from "frontity";
import { getPostsByCatID } from "../helpers/getCatByID";
import Link from "@frontity/components/link";
import Image from "@frontity/components/image";
import dayjs from "dayjs";

const CatPost = ({ state, libraries, catnum, ...props }) => {
  const data = state.source.get(state.router.link);
  const postsPerCat = getPostsByCatID(state.source);
  const Html2React = libraries.html2react.Component;
  const [posts, category] = postsPerCat[catnum];

  return (
    <>
      <PostContainer catnum={catnum} {...props}>
        {posts.map((post) => {
          const author = state.source.author[post.author];
          const postDate = dayjs(post.date).format("DD.MM.YY");

          return (
            <PostCard key={post.id}>
              <CardHeader>
                <Image
                  css={css`
                    border-bottom: 2px solid black;
                  `}
                  alt={post.title.rendered}
                  src={post.jetpack_featured_media_url}
                />
              </CardHeader>
              <CardBody>
                <CardTag
                  css={css`
                    background-color: black};
                  `}
                >
                  {category.name}
                </CardTag>
                <Link
                  css={css`
                    color: black;
                  `}
                  key={post.id}
                  link={post.link}
                >
                  {post.title.rendered}
                </Link>
                <PostAuthor>
                  <Link key={author.id} link={author.link}>
                    <Image src={author.avatar_urls[48]} alt={author.name} />
                  </Link>
                  <AuthorInfo>
                    <h5>{postDate}</h5>
                    <small>Author: {author.name}</small>
                  </AuthorInfo>
                </PostAuthor>
              </CardBody>
            </PostCard>
          );
        })}
      </PostContainer>
    </>
  );
};

export default connect(CatPost);

const PostContainer = styled.div`
  display: flex;
  width: 1040px;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const PostCard = styled.div`
  margin: 10px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 300px;

  a {
    text-decoration: none;
    font-weight: bold;
  }
`;

const CardHeader = styled.span`
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  min-height: 175px;

  p {
    font-size: 13px;
    margin: 0 0 40px;
`;

const CardTag = styled.div`
  background: #cccccc;
  border-radius: 50px;
  font-size: 12px;
  margin: -10px 0 10px 0;
  color: #fff;
  padding: 2px 10px;
  text-transform: uppercase;
  cursor: pointer;
`;

const PostAuthor = styled.div`
  display: flex;
  margin-top: auto;

  img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
`;

const AuthorInfo = styled.div`
  h5 {
    margin: 0;
  }

  small {
    color: #545d7a;
  }
`;
