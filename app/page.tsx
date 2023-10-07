"use client";

import UserCard from "@/components/UserCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export default function Home() {
  const getUserData = async () => {
    const res = await axios.get("/api/users");
    const responseData = await res.data;
    return responseData;
  };
  const { data, isLoading, isError } = useQuery({
    queryKey: ["user"],
    queryFn: async () => await getUserData(),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error to Fetch Data..</div>;
  }
  console.log(data);
  return (
    <div className="container  py-4 mx-auto flex flex-wrap ">
      {data.map((user: any, index: number) => (
        <UserCard user={user} key={index} />
      ))}
    </div>
  );
}
