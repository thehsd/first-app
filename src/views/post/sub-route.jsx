import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const SubRouteView = () => {
  const [postData, setPostData] = useState(null);
  const { id } = useParams();
  console.log("  ~ id : ", id);

  function fetchData() {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((json) => setPostData(json));
  }

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div className="bg-sky-200 p-5 rounded-md m-2 flex flex-col gap-3">
      <p> post id {postData?.id}</p>
      <p>{postData?.title}</p>
      <p>{postData?.body}</p>
    </div>
  );
};

export default SubRouteView;
