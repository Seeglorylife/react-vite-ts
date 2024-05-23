/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";

const About = lazy(() => import("../pages/about"));
const Home = lazy(() => import("../pages/home"));

const routes = [
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/",
    element: <Home />,
  },
];

export default routes;
