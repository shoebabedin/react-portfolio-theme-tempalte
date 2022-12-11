import React from "react";
import { toast, ToastContainer } from "react-toastify";

const About = () => {
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
      <section className="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12 col-sm-12">
              <div className="img">
                <img
                  className="img-fluid"
                  src={require("./../../assets/images/about/image.webp")}
                  alt=""
                />
                <div className="about-contact">
                  <ul>
                    <li>
                      <p>Name</p>
                      <h4>Richard Brian</h4>
                    </li>
                    <li>
                      <p>Birth Date</p>
                      <h4>22 Jan 1995</h4>
                    </li>
                    <li>
                      <p>Phone</p>
                      <h4>+947 0455 445</h4>
                    </li>
                    <li>
                      <p>Email</p>
                      <h4>richard@gmail.com</h4>
                    </li>
                    <li>
                      <p>Nationality</p>
                      <h4>United States</h4>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12">
              <div className="right">
                <h4>About Me</h4>
                <h2>World leading UI/UX designer</h2>
                <p>
                  I'm a Freelance UI/UX Designer and Developer based in London,
                  England. I strives to build immersive and beautiful web
                  applications through carefully crafted code and user-centric
                  design. I am focused on crafting clean & user‑friendly
                  experiences.
                </p>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={notify}
                >
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
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default About;
