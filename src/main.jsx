import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import HomeView from "./views/home/home-view.jsx";
import PostListView from "./views/post/post-list-view.jsx";
import NotFoundView from "./views/not-found/not-found-view.jsx";
import SubRouteView from "./views/post/sub-route.jsx";
import PostsListHomeView from "./views/post/posts-home-view.jsx";
import MainLayout from "./layouts/main-layout.jsx";
import ProductsView from "./views/products/products-view.jsx";
import BasketView from "./views/basket/basket-view.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomeView />} />
        <Route path="/products" element={<ProductsView />} />
        <Route path="/basket" element={<BasketView />} />
        {/* posts */}
        <Route path="/posts" element={<PostListView />}>
          <Route index element={<PostsListHomeView />} />
          <Route path="/posts/:id" element={<SubRouteView />} />
        </Route>

        {/* notfound */}
        <Route path="*" element={<NotFoundView />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
