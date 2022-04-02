import { connect, styled, css } from "frontity";
import React from "react";
import Link from "@frontity/components/link";
import Image from "@frontity/components/image";
import dayjs from "dayjs";

const HomePost = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <>
      {data.items.map((item) => {
        const post = state.source[item.type][item.id];
        const author = state.source.author[post.author];
        const postDate = dayjs(post.date).format("DD.MM.YY");

        const categories = post.categories.map((category) => {
          const catName = state.source.category[category].name;

          return catName;
        });

        let catColor = post.categories.map((category) => {
          const name = state.source.category[category].name;

          let color = state.theme.colors.black;

          if (name == "Anime" || name == "Anime List" || name == "Anime FAQ") {
            return (color = state.theme.colors.red);
          } else if (
            name == "Korean" ||
            name == "K-Drama" ||
            name == "K-Movies" ||
            name == "K-Pop"
          ) {
            return (color = state.theme.colors.darkgreen);
          } else if (name == "Webtoon List" || name == "Manhwa") {
            return (color = state.theme.colors.green);
          } else if (
            name == "Manga" ||
            name == "Manga List" ||
            name == "Manga News"
          ) {
            return (color = state.theme.colors.blue);
          } else if (name == "Light Novels" || name == "Taiwanese Drama") {
            return (color = state.theme.colors.darkblue);
          } else if (name == "Japan" || name == "Japanese Mythology") {
            return (color = state.theme.colors.darkred);
          } else if (name == "Cartoons" || name == "Graphic Novels") {
            return (color = state.theme.colors.orange);
          } else if (name == "Movie Lists" || name == "TV") {
            return (color = state.theme.colors.darkgray);
          } else if (
            name == "Chinese" ||
            name == "Manhua" ||
            name == "Donghua" ||
            name == "C-Drama"
          ) {
            return (color = state.theme.colors.purple);
          } else if (name == "Turkish Drama") {
            return (color = state.theme.colors.darkpink);
          }

          return color;
        });

        return (
          <PostCard key={post.id}>
            <CardHeader>
              <Image
                css={css`
                  border-bottom: 2px solid ${catColor};
                `}
                alt={post.title.rendered}
                src={post.jetpack_featured_media_url}
              />
            </CardHeader>
            <CardBody>
              <CardTag
                css={css`
                  background-color: ${catColor};
                `}
              >
                {categories[0]}
              </CardTag>
              <Link
                css={css`
                  color: ${catColor};
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
    </>
  );
};

export default connect(HomePost);

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
