import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import portfolioData from "../assets/data/portfolio.json";
import BlogItem from "../components/Blog/BlogItem";
import Client from "../components/Client/Client";
import Couter from "../components/Couter/Couter";
import About from "../components/Home/About";
import Hero from "../components/Home/Hero";
import PortfolioModal from "../components/Portfolio/PortfolioModal";
import PortfolioTabs from "../components/Portfolio/PortfolioTabs";
import Services from "../components/services/Services";
import Testimnial from "../components/Testimonial/Testimnial";

const Home = () => {
  const [show, setShow] = useState(false);
  // const [itemqtty, setItemqtty] = useState(3);

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      {/* hero */}
      <Hero />
      {/* hero */}

      {/* visitor */}
      <Couter />
      {/* visitor */}

      {/* about */}
      <About />
      {/* about */}

      {/* services */}
      <Services />
      {/* services */}

      {/* portfolio */}
      <section className="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h5>Portfolio</h5>
              <h2>Featured Projects</h2>
            </div>
            <PortfolioTabs
              setShow={setShow}
              show={show}
              data={portfolioData.slice(0, 8)}
            />
            <div className="col-md-12 text-lg-end text-md-center view-all-btn">
              <Link to="/portfolio" className="view-all">
                View All
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Modal --> */}
      <PortfolioModal setShow={setShow} show={show} />
      {/* portfolio */}

      {/* testimonial */}
      <Testimnial />
      {/* testimonial */}

      {/* Client */}
      <Client />
      {/* Client */}

      {/* Blog */}
      <BlogItem item={3} />
      {/* Blog */}
    </>
  );
};

export default Home;
