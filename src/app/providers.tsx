import type { PropsWithChildren } from "react";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export function AppProviders({ children }: PropsWithChildren) {
  const [client] = useState(
  () =>
    new QueryClient({
      defaultOptions: {
        queries: {
          retry: 1,                 //  에러면 1번 리트 
          refetchOnWindowFocus: false, // 새로고침 안함
          staleTime: 60_000,        // 60초동안 채신 
        },
      },
    })
);

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}