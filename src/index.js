import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Invoice from "./invoice/index";
import {Single} from "./invoice/index"
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Invoice />} />
        <Route path={"/:id"} element={<Single />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
