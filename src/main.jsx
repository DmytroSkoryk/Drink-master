import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles/reset.scss";
import "./styles/styles.scss";

const router = createBrowserRouter(
  [
    {
      path: "/*",
      element: <App />,
    },
  ],
  { basename: import.meta.env.DEV ? "/" : "/Drink-master/" }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
