import Link from "next/link";
import ReactHtmlParser from "react-html-parser";

class Posts extends React.Component {
  render() {
    return (
      <div>
        {this.props.posts.map(function (post, idx) {
          return (
            <div key={idx}>
              <Link href="/post/[id]" as={`/post/${post.id}-${post.slug}`}>
                <h3>{post.title.rendered}</h3>
              </Link>
              {ReactHtmlParser(post.excerpt.rendered)}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Posts;
