import React from "react";
import { useParams } from "react-router-dom"; // Captura parametros de URL ( history, location, match, :ids)
import Post from "../data/Posts";
const Posts = () => {
  const { id } = useParams(); // Obtenemos el 'id' de params /post/1
  console.log(Post[id - 1]);
  return (
    <>
      {Post[id - 1] ? (
        <>
          <h1>Posts: {Post[id - 1].title}</h1>
          <p>{Post[id - 1].text}</p>
        </>
      ) : (
        <>
          <h3>No Post published</h3>
          {/* <Redirect to ="/" /> */}
        </>
      )}
    </>
  );
};

export default Posts;
