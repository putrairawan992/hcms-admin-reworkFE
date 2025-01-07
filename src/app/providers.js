'use client';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect, useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';
import SidebarLayout from './components/sidebarLayout';

export function Providers({ children }) {
  const [isClient, setIsClient] = useState(false);
  const [queryClient] = useState(() => new QueryClient());
  const pathname = usePathname();
  const noSidebarRoutes = ['/login', '/register'];
  const shouldShowSidebar = useMemo(
    () => !noSidebarRoutes.includes(pathname),
    [pathname]
  );

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

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
