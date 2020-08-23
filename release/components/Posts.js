import Link from "next/link";
import ReactHtmlParser from "react-html-parser";

class Posts extends React.Component {
  render() {
    return (
      <div>
        {this.props.posts.map(function (post, idx) {
          return (
            <div key={idx}>
              <Link href="/post/[id]" as={`/post/${post.ID}-${post.slug}`}>
                <h3>{post.title}</h3>
              </Link>
              {ReactHtmlParser(post.excerpt)}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Posts;
