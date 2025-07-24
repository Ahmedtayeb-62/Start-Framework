import "./App.css";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { About } from "./Components/About/About.jsx";
import Home from "./Components/Home/Home.jsx";
import Error from "./Components/Error/Error.jsx";
import Layout from "./Components/Layout/Layout.jsx";
import { Portfolio } from "./Components/Portfolio/Portfolio.jsx";
import { Contact } from "./Components/Contact/Contact.jsx";

function App() {
  const router = createHashRouter([
    {
      path: "/Start-Framework",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "portfolio",
          element: <Portfolio />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "*",
          element: <Error />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
