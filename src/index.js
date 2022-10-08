import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Spinner } from "./components";
import "./i18n.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback={<Spinner />}>
      <App />
    </Suspense>
  </React.StrictMode>
);
