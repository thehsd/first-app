import { useContext, useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router";
import AuthContext from "../../context/auth-context";

const PostListView = () => {
  const [postsData, setPostsData] = useState([]);
  const { auth, logout, user, login } = useContext(AuthContext);

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
        <ul className=" flex flex-col gap-3">
          {postsData.map((post) => {
            return (
              <li key={post.id}>
                <NavLink
                  to={`/posts/${post.id}`}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "text-gray-700 rounded-sm p-1"
                      : isActive
                        ? "text-gray-950 rounded-sm p-1"
                        : "text-gray-500 rounded-sm p-1"
                  }
                >
                  {post.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </aside>
      <main className="col-start-3 col-end-12">
        <Outlet />
        <div>
          {auth ? (
            <>
              <p>{user.userName}</p>
              <br />
              <button onClick={logout}>Logout</button>
            </>
          ) : (
            <button onClick={login}>login</button>
          )}
        </div>
      </main>
    </div>
  );
};

export default PostListView;
