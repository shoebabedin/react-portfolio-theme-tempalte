import React from "react";
import { Helmet } from "react-helmet";
import Head from "../components/about/Head";
import Hero from "../components/about/Hero";
import Experience from "../components/experience/Experience";
import RecentProejct from "../components/recent-project/RecentProejct";
import Services from "../components/services/Services";
import Testimnial from "../components/Testimonial/Testimnial";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      {/* about title */}
      <Head title={"About Me"} breadcum={"About"} />
      {/* about hero */}
      <Hero />

      {/* Experience */}
      <Experience />

      {/* Recent Proejct */}
      <RecentProejct />

      {/* services */}
      <Services />

      {/* testimonial */}
      <Testimnial />
    </>
  );
};

export default About;
