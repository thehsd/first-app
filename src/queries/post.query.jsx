import { useQuery } from "@tanstack/react-query";

const useGetPostList = () => {
  const fetcher = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.comm/posts/");
    const response = await data.json();
    return response;
  };

  return useQuery({
    queryKey: ["post-list"],
    queryFn: fetcher,
    ...{ refetchOnWindowFocus: false },
    retry: 2,
  });
};

export default useGetPostList;
