import React from "react";

async function getData() {
  const res = await fetch("http://localhost:3000/api/articles");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

// posts will be populated at build time by getStaticProps()
async function Article({ posts }) {
  const data = await getData();

  return (
    <ul>
      {data && data.map((item, _index) => <li key={_index}>{item.title}</li>)}

      {!data && "No "}
    </ul>
  );
}

export default Article;
