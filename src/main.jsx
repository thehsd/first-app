import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import HomeView from "./views/home/home-view.jsx";
import PostListView from "./views/post/post-list-view.jsx";
import NotFoundView from "./views/not-found/not-found-view.jsx";
import SubRouteView from "./views/post/sub-route.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeView />} />
      {/* posts */}
      <Route path="/posts" element={<PostListView />}>
        <Route path="/posts/:id" element={<SubRouteView />} />
      </Route>

      {/* notfound */}
      <Route path="*" element={<NotFoundView />} />
    </Routes>
  </BrowserRouter>
);
