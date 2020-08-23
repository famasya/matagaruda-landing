import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";
import Posts from "../components/Posts";

const Post = (props) => (
  <Layout>
    <div>
      <h1>First Page</h1>
      <p>Posts count : {props.data.found}</p>
      <Posts posts={props.data.posts} />
    </div>
  </Layout>
);

export async function getStaticProps() {
  const results = await fetch(`${process.env.WP_BASE}/posts`);
  const data = await results.json();

  return {
    props: {
      data,
    },
  };
}

export default Post;
