import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// bootstrap css & js
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// bootstrap css & js
import "react-toastify/dist/ReactToastify.css";
import BlogDetails from "./components/BlogDetails/BlogDetails";
import Layout from "./components/Layout/Layout";
import NoPage from "./components/NoPage/NoPage";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog-details/:id" element={<BlogDetails />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
