import { BrowserRouter, Route, Routes } from "react-router";
import HomeView from "./views/home/home-view.jsx";
import PostListView from "./views/post/post-list-view.jsx";
import NotFoundView from "./views/not-found/not-found-view.jsx";
import SubRouteView from "./views/post/sub-route.jsx";
import PostsListHomeView from "./views/post/posts-home-view.jsx";
import MainLayout from "./layouts/main-layout.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5000,
        gcTime: 10000,
        retry: 3,
        retryDelay: 500,
      },
    },
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<HomeView />} />
              {/* posts */}
              <Route path="/posts" element={<PostListView />}>
                <Route index element={<PostsListHomeView />} />
                <Route path="/posts/:id" element={<SubRouteView />} />
              </Route>

              {/* notfound */}
              <Route path="*" element={<NotFoundView />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
};

export default App;
