"use client";

import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export default function Home() {
  const getUserData = async () => {
    const res = await axios.get("/api/users");
    const responseData = await res.data;
    return responseData;
  };
  const { data, isLoading, isError } = useQuery({
    queryKey: ['user'],
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
    <div>
      {data.map((item: any, index: number) => {
        return <ul key={index}>
          <li>{item.name}</li>
        </ul>;
      })}
    </div>
  );
}
