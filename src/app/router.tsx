import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";
import {
   createBrowserRouter,
   Navigate,
   Outlet,
   useLocation,
} from "react-router";
import { RouterProvider } from "react-router/dom";

import { paths } from "../config/paths";
import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";

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
   const location = useLocation();
   const excludeNavbarPaths = ["/login", "/register"];

   return (
      <>
         {!excludeNavbarPaths.includes(location.pathname) && <Navbar />}
         <Outlet />
         <Footer />
      </>
   );
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
                  import("./routes/landing.tsx").then(convert(queryClient)),
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
