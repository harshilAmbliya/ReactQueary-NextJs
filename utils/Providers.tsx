"use client"


import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
type Props = {
  children: React.ReactNode;
};

const Providers = (props: Props) => {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      {props.children}
    </QueryClientProvider>
  );
};

export default Providers;
