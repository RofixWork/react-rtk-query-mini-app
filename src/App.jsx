import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import MainWrapper from "./layout/MainWrapper";
import PostDetails from "./pages/PostDetails";

const App = () => {
  return (
    <Routes>
      <Route element={<MainWrapper />}>
        <Route index element={<Home />} />
        <Route path="/post/:id" element={<PostDetails />} />
      </Route>
    </Routes>
  );
};

export default App;
