import "@/App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Layout from "@/ui/Layout";

import Home from "@/Pages/Home";
import Works from "@/Pages/Works";
import About from "@/Pages/About";
import DetailWork from "@/Pages/DetailWork";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Navigate replace to="home" />} />

          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="detail/:name" element={<DetailWork />} />
          <Route path="works" element={<Works />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
