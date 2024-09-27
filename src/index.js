import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import { Toaster } from 'react-hot-toast';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import routes from './constant/routes';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router=createBrowserRouter(routes)
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 1000,
      refetchOnWindowFocus: false,
      refetchOnmount: false,
      refetchOnReconnect: false,
      retry: 1,
    },
  },
});
// Please make sure to call this method only once!

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
  <QueryClientProvider client={queryClient}>

    <Toaster
      toastOptions={{
        duration: 2500,
      }}
      />
    <RouterProvider router={router} />
      </QueryClientProvider>
  </>
);


