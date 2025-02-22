"use client";

import { trpc } from "@/app/trpc/client";
import FilterCarousel from "@/components/filter-carousel";
import { useRouter } from "next/navigation";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export const CategoriesSection = ({ categoryId }: { categoryId?: string }) => {
  return (
    <Suspense fallback={<CategoriesSkeleton />}>
      <ErrorBoundary fallback={<p>Error...</p>}>
        <CategoriesSectionSuspense categoryId={categoryId} />
      </ErrorBoundary>
    </Suspense>
  );
};

const CategoriesSectionSuspense = ({ categoryId }: { categoryId?: string }) => {
  const [categories] = trpc.categories.getMany.useSuspenseQuery();
  const router = useRouter();

  const data = categories.map(({ name, id }) => ({
    value: id,
    label: name,
  }));

  const onSelect = (value: string | null) => {
    const url = new URL(window.location.href);

    if (value) {
      url.searchParams.set("categoryId", value);
    } else {
      url.searchParams.delete("categoryId");
    }

    router.push(url.toString());
  };

  return <FilterCarousel value={categoryId} data={data} onSelect={onSelect} />;
};

const CategoriesSkeleton = () => {
  return <FilterCarousel isLoading={true} data={[]} onSelect={() => {}} />;
};
