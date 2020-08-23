import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";
import Posts from "../components/Posts";

const Post = (props) => (
  <Layout>
    <div>
      <h1>First Page</h1>
      <Posts posts={props.posts} />
    </div>
  </Layout>
);

export async function getStaticProps() {
  const results = await fetch(`${process.env.WP_BASE}/posts`);
  const data = await results.json();

  return {
    props: {
      posts: data,
    },
  };
}

export default Post;
