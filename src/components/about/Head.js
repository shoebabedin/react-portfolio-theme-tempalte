import React from "react";
import { Link, useHref } from "react-router-dom";

const Head = ({title, breadcum}) => {
  const ref = useHref('/contact');
  return (
    <>
      <section className="about_me">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>{title}</h2>
              {breadcum !== '/contact' && <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="#">{breadcum}</Link>
                  </li>
                </ol>
              </nav>}

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
