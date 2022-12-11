import React from "react";
import Slider from "react-slick";
import client from "./../../assets/data/client.json";

const Client = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
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
      <section className="trusted_client">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h5>Trusted Clients</h5>
              <h2>Happy People</h2>

              <Slider {...settings} className="trusted_client_slider">
                {client.map((item) => (
                  <div key={item.id} className="slider_item">
                    <img
                      className="img-fluid"
                      src={require(`./../../assets/images/trusted-client/${item.img}.webp`)}
                      alt=""
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Client;
