import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router";

const PostListView = () => {
  const [postsData, setPostsData] = useState([]);

  function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => response.json())
      .then((json) => setPostsData(json));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-12">
      <aside className="col-end-3">
        <ul>
          {postsData.map((post) => {
            return (
              <li key={post.id}>
                <Link to={`/posts/${post.id}`}>{post.title}</Link>
              </li>
            );
          })}
        </ul>
      </aside>
      <main className="col-start-3 col-end-12">
        <Outlet />
      </main>
    </div>
  );
};

export default PostListView;
