import { useMutation } from "@tanstack/react-query";

const useCreateUserMutation = () => {
  const mutator = async (user) => {
    const req = await fetch("https://fakestoreapi.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const response = await req.json();
    return response;
  };
  return useMutation({
    mutationFn: mutator,
  });
};

export default useCreateUserMutation;
