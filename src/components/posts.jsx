import { useEffect, useState } from "react";

const Posts = () => {
  const [postList, setPostList] = useState([]);
  const [reload, setReload] = useState(false);
  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => response.json())
      .then((json) => {
        setPostList(json);
        setReload(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [reload]);

  //   fetchData();
  console.log("postList re-render");

  return (
    <div>
      <button
        onClick={() => {
          setReload(true);
        }}
      >
        {" "}
        reload data
      </button>
      {postList.map((post) => {
        return <div key={post.id}>{post.title}</div>;
      })}
    </div>
  );
};

export default Posts;
