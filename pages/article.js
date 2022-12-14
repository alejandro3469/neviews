import React from "react";

// posts will be populated at build time by getStaticProps()
function Article({ posts }) {
  
  return (
    <ul>
      {posts && posts.map((post, _index) => <li key={_index}>{post.title}</li>)}

      {!posts && "No "}
    </ul>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("http://localhost:3000/api/articles");
  const posts = await res.json();
  console.log(posts);

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}

export default Article;
