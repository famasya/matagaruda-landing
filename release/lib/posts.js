import fetch from "isomorphic-unfetch";

export async function getAllPostIds() {
  const remoteData = await fetch(`${process.env.WP_BASE}/posts`);
  const posts = await remoteData.json();

  return posts.map((post) => {
    return {
      params: {
        id: `${post.id.toString()}-${post.slug}`,
      },
    };
  });
}

export async function getPostData(id) {
  id = id.split("-")[0];
  const remoteData = await fetch(`${process.env.WP_BASE}/posts/${id}`);
  const post = await remoteData.json();

  return {
    id,
    ...post,
  };
}
