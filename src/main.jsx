import React from "react";
import ReactDOM from "react-dom/client";

import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";

import initData from "./assets/roadmapInitialData.json";
import App from "./App";
import FieldMenu from "./pages/FieldMenu/FieldMenu";
import Roadmap from "./pages/Roadmap/Roadmap";
import SignIn from "./pages/Signin/SignIn";
import SignUp from "./pages/Signup/SignUp";
import NotFound from "./pages/NotFound/NotFound";
import Testing from "./pages/Testing/testing";
import MentorPage from "./pages/MentorPage/MentorPage";
import Scholarships from "./pages/Scholarships/Scholarships";
import "./index.css";

console.log("init data in main ", initData);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Navigate to="/fields" replace />} />
      <Route path="fields" element={<FieldMenu data={initData} />} />
      <Route path="roadmap/:id" element={<Roadmap data={initData} />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="mentor" element={<MentorPage />} />
      <Route path="scholar" element={<Scholarships />} />
      <Route path="testing" element={<Testing />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
