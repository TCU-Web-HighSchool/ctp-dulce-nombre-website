import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Academic from "./pages/Academic";
import Admissions from "./pages/Admissions";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import JobBoard from "./pages/JobBoard";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Scholarships from "./pages/Scholarships";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "academic", element: <Academic /> },
      { path: "admissions", element: <Admissions /> },
      { path: "news", element: <News /> },
      { path: "news/:newsId", element: <NewsDetail /> },
      { path: "job-board", element: <JobBoard /> },
      { path: "faq", element: <FAQ /> },
      { path: "scholarships", element: <Scholarships /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
