import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./Global.css";
import App from "./App.tsx";
import ErrorPage from "./Routes/ErrorPage.tsx";
import Home from "./Routes/Home.tsx";
import Dashbord from "./Routes/Dashbord.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/dashbord",
        element: <Dashbord />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
