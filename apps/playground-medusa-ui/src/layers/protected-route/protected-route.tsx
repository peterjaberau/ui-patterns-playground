'use client';
import { Spinner } from '@medusajs/icons';
import { useEffect, useState } from 'react';
import { SearchProvider } from '@/providers/search-provider';
import { SidebarProvider } from '@/providers/sidebar-provider';
import { useRouter } from 'next/navigation';

const userPreset = {
  id: 'user_01JQ6CPMV9Y5TNBSJHSF72MF17',
  first_name: 'Peter',
  last_name: 'Jaber',
  email: 'peterjaberau@gmail.com',
  avatar_url: null,
  metadata: {},
  created_at: '2025-03-25T10:13:52.105Z',
  updated_at: '2025-03-25T10:15:24.681Z',
  deleted_at: null,
};

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(userPreset);
  const [isLoading, setIsLoading] = useState(true); // Set true initially
  const router = useRouter();

  useEffect(() => {
    // Simulate an async user check (you could replace this with actual auth logic)
    setTimeout(() => {
      // Simulate user fetching and set user (or null if no user)
      setUser(userPreset); // Update with actual logic to fetch user data
      setIsLoading(false); // Set loading to false once done
    }, 1000); // Mock delay for loading state
  }, []);

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login'); // Redirect to login if no user
    }
  }, [isLoading, user, router]); // Only rerun when loading or user changes

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Spinner className="text-ui-fg-interactive animate-spin" />
      </div>
    );
  }

  // If the user exists, render the protected route content
  return (
    <SidebarProvider>
      <SearchProvider>{children}</SearchProvider>
    </SidebarProvider>
  );
};
