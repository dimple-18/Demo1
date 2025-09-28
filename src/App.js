import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

const NotFound = () => (
  <main id="main" style={{ padding: "2rem" }}>
    <h2>Page not found</h2>
  </main>
);

export default function App() {
  return (
    <Routes>
        <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
