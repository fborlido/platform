import { createBrowserRouter } from "react-router-dom";
import Layout from "../HOC/Layout";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
