import fetch from "isomorphic-unfetch";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Layout from "../../components/Layout";
import ReactHtmlParser from "react-html-parser";

const PostItem = (props) => {
  return (
    <Layout>
      <h3>Title: {props.data.title.rendered}</h3>
      {ReactHtmlParser(props.data.content.rendered)}
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  const data = await getPostData(params.id);
  return {
    props: {
      data,
    },
  };
}
export async function getStaticPaths() {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default PostItem;
