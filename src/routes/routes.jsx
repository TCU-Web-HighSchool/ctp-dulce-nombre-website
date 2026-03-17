import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Academic from "../pages/Academic";
import Admissions from "../pages/Admissions";
import News from "../pages/News";
import JobBoard from "../pages/JobBoard";
import FAQ from "../pages/FAQ";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "academic", element: <Academic /> },
      { path: "admissions", element: <Admissions /> },
      { path: "news", element: <News /> },
      { path: "job-board", element: <JobBoard /> },
      { path: "faq", element: <FAQ /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
