// "use client"

import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const UserCard = ({ user }: { user: any }) => {
  //   const handleDelete = async (
  //     e: React.MouseEvent<HTMLButtonElement>,
  //     id: string
  //   ) => {
  //     e.preventDefault();
  //     const deleteUser = await axios.delete("/api/users/delete", {
  //       data: { id },
  //     });

  //     console.log(deleteUser);
  //   };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({
      e,
      id,
    }: {
      e: React.MouseEvent<HTMLButtonElement>;
      id: string;
    }) => {
      e.preventDefault();
      return axios.delete("/api/users/delete", { data: { id } });
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries(["user"]);
    },
  });
  return (
    <div className="w-[20rem] rounded-md overflow-hidden shadow-xl bg-white m-2 p-3 border">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{user.username}</div>
        <p className="text-gray-700 text-base">{user.email}</p>
      </div>
      <div className="flex items-center justify-between ">
        <button className="bg-orange-300 py-2 px-4 rounded-lg ">Update</button>
        <button
          className="bg-red-300 py-2 px-4 rounded-lg "
          onClick={(e) => {
            mutation.mutate({ e, id: user._id });
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
