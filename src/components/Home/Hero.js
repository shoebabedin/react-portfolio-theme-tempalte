import React from "react";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <h4>Introduction</h4>
              <h2>UI/ UX Designer</h2>
              <p>
                I'm a Freelance UI/UX Designer and Developer based in London,
                England. I&rsquo;m specializing in creating stylish, modern
                websites, web services and online stores.
              </p>
              <div className="img">
                <img src={require("./../../assets/images/hero/hero.webp")} alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <img
                className="img-fluid float-end d-none d-lg-block"
                src={require("./../../assets/images/hero/icons.webp")}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
