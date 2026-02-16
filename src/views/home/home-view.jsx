import React from "react";
import Input from "../../components/ui/input";
import { useForm } from "react-hook-form";
import useCreateUserMutation from "../../queries/user.query";

const HomeView = () => {
  const { mutate, isPending } = useCreateUserMutation();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: 0,
      username: "",
      email: "",
      password: "",
    },
  });
  const onSubmitForm = (data) => {
    mutate(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <br /> <br />
        {/* id */}
        <Input {...register("id")} type="number" placeholder={"enter id"} />
        <br /> <br />
        {/* username */}
        <Input
          {...register("username")}
          type="text"
          placeholder={"enter username"}
        />
        <br /> <br />
        {/* email */}
        <Input {...register("email")} type="text" placeholder={"enter email"} />
        <br /> <br />
        {/* password */}
        <Input
          {...register("password")}
          type="password"
          placeholder={"enter password"}
        />
        <br />
        <br />
        <button className="bg-green-400 rounded-md border-none p-3 cursor-pointer">
          {isPending ? "submitting" : "submit"}
        </button>
      </form>
    </div>
  );
};

export default HomeView;
