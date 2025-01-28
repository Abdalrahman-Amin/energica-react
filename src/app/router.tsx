import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";
import { createBrowserRouter, Navigate, Outlet } from "react-router";
import { RouterProvider } from "react-router/dom";

import { paths } from "../config/paths";

const convert = (queryClient: QueryClient) => (m: any) => {
   const { clientLoader, clientAction, default: Component, ...rest } = m;
   return {
      ...rest,
      loader: clientLoader?.(queryClient),
      action: clientAction?.(queryClient),
      Component,
   };
};

const AppLayout = () => {
   return <Outlet />;
};

export const createAppRouter = (queryClient: QueryClient) =>
   createBrowserRouter([
      {
         element: <AppLayout />,
         children: [
            {
               path: "/",
               element: <Navigate to={paths.home.path} replace />,
            },
            {
               path: paths.home.path,
               lazy: () =>
                  import("./routes/HomePage.tsx").then(convert(queryClient)),
            },
            {
               path: "*",
               lazy: () =>
                  import("./routes/not-found.tsx").then(convert(queryClient)),
            },
         ],
      },
   ]);

export const AppRouter = () => {
   const queryClient = useQueryClient();

   const router = useMemo(() => createAppRouter(queryClient), [queryClient]);
   return <RouterProvider router={router} />;
};
