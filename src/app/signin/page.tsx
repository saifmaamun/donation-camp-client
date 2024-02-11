"use client";
import { Button, Divider, message } from "antd";
import React, { useCallback } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";

import Link from "next/link";
import { useSignUpMutation } from "@/redux/features/user/userApi";
import { usePathname, useRouter } from "next/navigation";
// import { createUser } from "@/utils/actions/create-user";

type TForm = {
  username: string;
  email: string;
  password: string;
};
const Signin = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [signUp, { data, isLoading, isError, isSuccess, status }] =
    useSignUpMutation({});

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<TForm>();

  // sign in function
  const onSubmit = async (data: TForm) => {
    const { ...res } = data;

    const credential = {
      email: res.email,
      password: res.password,
    };
    await signUp(credential).then(() => router.push("/login"));
    // const res = await createUser(data);
    if (!isError && !isLoading) {
      message.success("User created successfully");
    }
  };

  return (
    <div className="">
      <div className="lg:p-10 md:p-6 p-2 shadow-xl bg-white max-w-lg my-12 mx-auto">
        <h1 className="text-2xl text-center mb-8">Register</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4 w-full">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full mt-2 p-3 border border-gray-500 rounded-md"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Provide a valid email",
                },
              })}
            />
            {errors.email?.type === "required" && (
              <span className="label-text-alt text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="label-text-alt text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="mb-4 w-full">
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full mt-2 p-3 border border-gray-500 rounded-md"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
                minLength: {
                  value: 6,
                  message: "Password should be contains 6 characters",
                },
              })}
            />
            {errors.password?.type === "required" && (
              <span className="label-text-alt text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="label-text-alt text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>

          <Button type="primary" block size="large" htmlType="submit">
            Register
          </Button>
        </form>
        <p className="text-sm pt-2 font-semibold ">
          Already have a account?
          <Link className="text-sky-500 underline ml-2" href="/login">
            Please Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
