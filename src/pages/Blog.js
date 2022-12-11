import React from "react";
import { Helmet } from "react-helmet";
import Head from "../components/about/Head";
import BlogItem from "../components/Blog/BlogItem";

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog</title>
      </Helmet>
      <Head title={"Latest News"} breadcum={"My Blog"} />
      <BlogItem />
    </>
  );
};

export default Blog;
