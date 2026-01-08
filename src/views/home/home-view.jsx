import { Link } from "react-router";

const HomeView = () => {
  return (
    <div>
      <Link to={"/posts"}> go to post page</Link>
    </div>
  );
};

export default HomeView;
