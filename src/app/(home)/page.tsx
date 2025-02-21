import { Suspense } from "react";
import { HydrateClient, trpc } from "../trpc/server";
import { ClientPage } from "./client";
import { ErrorBoundary } from "react-error-boundary";

export default async function Home() {
  // const data = await trpc.hello({ text: "none" });
  void trpc.hello.prefetch({ text: "none" });

  return (
    <div className="bg-pink-600 text-black">
      <HydrateClient>
        <Suspense fallback={<p>Loading...</p>}>
          <ErrorBoundary fallback={<p>error......</p>}>
            <ClientPage />
          </ErrorBoundary>
        </Suspense>
      </HydrateClient>
    </div>
  );
}
