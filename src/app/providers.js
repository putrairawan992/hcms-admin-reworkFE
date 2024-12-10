"use client";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import SidebarLayout from "./components/sidebarLayout";

export function Providers({ children }) {
  const [isClient, setIsClient] = useState(false);
  const [queryClient] = useState(() => new QueryClient());
  const pathname = usePathname();

  // Set state to true when the component is mounted
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Prevent rendering before the client-side hydration
  }

  // Halaman tanpa sidebar
  const noSidebarRoutes = ["/login", "/register"];

  const shouldShowSidebar = !noSidebarRoutes.includes(pathname);

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        {shouldShowSidebar ? (
          <SidebarLayout>{children}</SidebarLayout>
        ) : (
          children
        )}
      </ChakraProvider>
    </QueryClientProvider>
  );
}
