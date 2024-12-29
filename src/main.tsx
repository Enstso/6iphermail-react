import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*
ReactDOM.render(
  <App />,
  document.getElementById('root')
);*/
