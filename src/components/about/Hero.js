import React from "react";
import { toast, ToastContainer } from "react-toastify";
import Typewriter from "typewriter-effect";

const Hero = () => {
  const notify = () => {
    toast("Downloading");
    // text content
    const texts = ["Hello, I ’m Richard Brian"];

    // file object
    const file = new Blob(texts, { type: "text/plain" });

    // anchor link
    const element = document.createElement("a");
    element.href = URL.createObjectURL(file);
    element.download = "Richard-Brian" + ".txt";

    // simulate link click
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };
  return (
    <>
      <section className="about_hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="img">
                <img
                  className="img-fluid"
                  src={require("./../../assets/images/about-hero/left-img.webp")}
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-7">
              <h4>
                Hello, I &rsquo;m Richard Brian -
                <Typewriter
                  className="typewrite"
                  options={{
                    strings: [
                      "Mobile App Designer",
                      "User Architecture",
                      "Web App Designer",
                      "Wireframe Design",
                      "Web Developer"
                    ],
                    autoStart: true,
                    loop: true
                  }}
                />
              </h4>
              <p>
                I design and develop services for customers of all sizes,
                specializing in creating stylish, modern websites, web services
                and online stores. I am focused on crafting clean &
                user‑friendly experiences.
              </p>
              <p>
                I approach both design and leadership with a focus on people,
                establishing empathy for the people who make and the people who
                use the products and services I help bring to life.
              </p>

              <h5>Expert in</h5>
              <ul>
                <li>
                  <span>
                    <img
                      src={require("./../../assets/images/about-hero/check.png")}
                      alt=""
                    />
                  </span>
                  Mobile App Design
                </li>
                <li>
                  <span>
                    <img
                      src={require("./../../assets/images/about-hero/check.png")}
                      alt=""
                    />
                  </span>
                  Prototype Design
                </li>
                <li>
                  <span>
                    <img
                      src={require("./../../assets/images/about-hero/check.png")}
                      alt=""
                    />
                  </span>
                  User Architecture
                </li>
                <li>
                  <span>
                    <img
                      src={require("./../../assets/images/about-hero/check.png")}
                      alt=""
                    />
                  </span>
                  Web App Design
                </li>
                <li>
                  <span>
                    <img
                      src={require("./../../assets/images/about-hero/check.png")}
                      alt=""
                    />
                  </span>
                  Wireframe Design
                </li>
                <li>
                  <span>
                    <img
                      src={require("./../../assets/images/about-hero/check.png")}
                      alt=""
                    />
                  </span>
                  Web Development
                </li>
              </ul>
              <button type="button" className="btn btn-danger" onClick={notify}>
                <span>
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.375 7.35986L8 9.98486L10.625 7.35986"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 2.98486V9.98486"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.5 9.98486V13.4849C13.5 13.6175 13.4473 13.7446 13.3536 13.8384C13.2598 13.9322 13.1326 13.9849 13 13.9849H3C2.86739 13.9849 2.74021 13.9322 2.64645 13.8384C2.55268 13.7446 2.5 13.6175 2.5 13.4849V9.98486"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                Download My CV
              </button>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Hero;
