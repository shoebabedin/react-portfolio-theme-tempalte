import React from "react";
import Slider from "react-slick";
// slick
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
// slick

const Testimnial = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  return (
    <>
      <section className="testimonial">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h5>Testimonials</h5>
              <h2>What people say</h2>

              <Slider {...settings} className="testimnial_slider">
                <div className="slider_item">
                  <p>
                    “These people really know what they are doing! Great
                    customer support availability and supperb kindness. I am
                    very happy that I've purchased this liscense!!!
                  </p>
                  <div className="testimonial_item">
                    <div className="title">
                      <div className="img">
                        <img
                          className="img-fluid"
                          src={require("./../../assets/images/testimonial/person.webp")}
                          alt=""
                        />
                      </div>
                      <div className="name">
                        <h4>Richard Harry</h4>
                        <p>Fashion Designer</p>
                      </div>
                    </div>
                    <div className="quote">
                      <img
                        className="img-fluid"
                        src={require("./../../assets/images/testimonial/quote.webp")}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="slider_item">
                  <p>
                    “These people really know what they are doing! Great
                    customer support availability and supperb kindness. I am
                    very happy that I've purchased this liscense!!!
                  </p>
                  <div className="testimonial_item">
                    <div className="title">
                      <div className="img">
                        <img
                          className="img-fluid"
                          src={require("./../../assets/images/testimonial/person3.webp")}
                          alt=""
                        />
                      </div>
                      <div className="name">
                        <h4>Robin Hazer</h4>
                        <p>CEO, Google Inc.</p>
                      </div>
                    </div>
                    <div className="quote">
                      <img
                        className="img-fluid"
                        src={require("./../../assets/images/testimonial/quote.webp")}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="slider_item">
                  <p>
                    “These people really know what they are doing! Great
                    customer support availability and supperb kindness. I am
                    very happy that I've purchased this liscense!!!
                  </p>
                  <div className="testimonial_item">
                    <div className="title">
                      <div className="img">
                        <img
                          className="img-fluid"
                          src={require("./../../assets/images/testimonial/person.webp")}
                          alt=""
                        />
                      </div>
                      <div className="name">
                        <h4>Richard Harry</h4>
                        <p>Fashion Designer</p>
                      </div>
                    </div>
                    <div className="quote">
                      <img
                        className="img-fluid"
                        src={require("./../../assets/images/testimonial/quote.webp")}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="slider_item">
                  <p>
                    “These people really know what they are doing! Great
                    customer support availability and supperb kindness. I am
                    very happy that I've purchased this liscense!!!
                  </p>
                  <div className="testimonial_item">
                    <div className="title">
                      <div className="img">
                        <img
                          className="img-fluid"
                          src={require("./../../assets/images/testimonial/person3.webp")}
                          alt=""
                        />
                      </div>
                      <div className="name">
                        <h4>Robin Hazer</h4>
                        <p>CEO, Google Inc.</p>
                      </div>
                    </div>
                    <div className="quote">
                      <img
                        className="img-fluid"
                        src={require("./../../assets/images/testimonial/quote.webp")}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimnial;
