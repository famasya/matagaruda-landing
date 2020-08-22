import fetch from "isomorphic-unfetch";
import Layout from "../../components/Layout";
import PostItem from "../../components/PostItem";

const Post = (props) => (
  <Layout>
    <div>
      <h1>First Page</h1>
      <p>Posts count : {props.found}</p>
      <p>
        <PostItem />
      </p>
    </div>
  </Layout>
);

Post.getInitialProps = async () => {
  const results = await fetch("https://api.matagaruda.org/posts");
  const data = await results.json();

  return {
    found: data.found,
    posts: data.posts,
  };
};

export default Post;
