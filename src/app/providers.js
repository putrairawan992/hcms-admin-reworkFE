"use client";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import SidebarLayout from "./components/sidebarLayout";

export function Providers({ children }) {
  const [isClient, setIsClient] = useState(false);
  const [queryClient] = useState(() => new QueryClient());

  // Set state to true when the component is mounted
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Prevent rendering before the client-side hydration
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <SidebarLayout>
          {children}
        </SidebarLayout>
      </ChakraProvider>
    </QueryClientProvider>
  );
}
