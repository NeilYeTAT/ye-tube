"use client";

import { trpc } from "../trpc/client";

export const ClientPage = () => {
  const [data] = trpc.hello.useSuspenseQuery({
    text: "none",
  });
  return <div>ClientPage says: {data.greeting}</div>;
};
