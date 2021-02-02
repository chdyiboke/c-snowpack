import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from './App.jsx';

window.addEventListener("load", () =>
  ReactDOM.render(<React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("app"))
);