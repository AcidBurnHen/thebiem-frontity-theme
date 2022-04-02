import { allCategories } from "../config";

const getPosts = ({ post }, categoryId) =>
  Object.keys(post)
    .map((postID) => post[postID])
    .filter(({ categories }) => categories.includes(parseInt(categoryId)));

export const getPostsByCatID = (source) => {
  return Object.values(allCategories).map((categoryId) => {
    const posts = getPosts(source, categoryId).slice(0, 4);
    const category = source.category[categoryId];
    return [posts, category];
  }, []);
};
