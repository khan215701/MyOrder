import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./assets/css/app.min.css";
import "./assets/css/icons.min.css";
import "./assets/libs/morris.js06/morris.min.js";
import "./assets/libs/raphael/raphael.min.js";
import "bootstrap/dist/css/bootstrap.css";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
