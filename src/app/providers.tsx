import type { PropsWithChildren } from "react";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export function AppProviders({ children }: PropsWithChildren) {
  const [client] = useState(
  () =>
    new QueryClient({
      defaultOptions: {
        queries: {
          retry: 1,                 // 1️⃣ 에러나면 딱 1번만 더 찔러봐!
          refetchOnWindowFocus: false, // 2️⃣ 딴 사이트 들어갔다 와도 새로고침 하지마!
          staleTime: 60_000,        // 3️⃣ 한 번 가져온 데이터는 60초 동안 최신이라고 쳐주자!
        },
      },
    })
);

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}