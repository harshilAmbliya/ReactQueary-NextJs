// AddUsers.tsx
"use client";
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
interface formDataTypes {
  username: string;
  email: string;
  password: string;
}
const AddUsers = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();

  //   };
  const queryClient = useQueryClient();

  const mutationData = useMutation({
    mutationFn: ({
      e,
      formData,
    }: {
      e: React.MouseEvent<HTMLButtonElement>;
      formData: formDataTypes;
    }) => {
      e.preventDefault();
      return axios.post("/api/users/create", { formData });
    },
    onSuccess() {
      queryClient.invalidateQueries(["user"]);
      router.push("/");
    },
    onError: (error: any) => {
      console.log(error);
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6">User Registration</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-400"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300"
            onClick={(e) => {
              mutationData.mutate({
                e,
                formData: {
                  username: formData.username,
                  email: formData.email,
                  password: formData.password,
                },
              });
            }}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUsers;
