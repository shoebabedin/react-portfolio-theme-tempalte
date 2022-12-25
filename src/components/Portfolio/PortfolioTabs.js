import React from "react";

const PortfolioTabs = (props) => {
  const { setShow, data } = props;

  const handleShow = (id) => {
    setShow(true);
    props.getData(id);
  };

  return (
    <>
      {data.map((item) => (
        <div key={item.id} className="col-lg-3 col-md-4 mb-3">
          <div className="img">
            <img
              className="img-fluid"
              src={require(`./../../assets/images/portfolio/${item.img}.webp`)}
              alt=""
            />
            <div className="overlay" onClick={() => handleShow(item)}>
              <div>
                <p>{item.title}</p>
                <button>Details</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PortfolioTabs;
