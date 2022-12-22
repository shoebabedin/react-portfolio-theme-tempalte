import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Head from "../components/about/Head";
import PortfolioModal from "../components/Portfolio/PortfolioModal";
import PortfolioTabs from "../components/Portfolio/PortfolioTabs";
import portfolioData from "./../assets/data/portfolio.json";

const Portfolio = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(portfolioData);
  const [filterData, setFilterData] = useState(portfolioData);
  const [select, setSelect] = useState("All Projects");

  useEffect(() => {}, [filterData]);

  const getData = (item) => {
    console.log(item);
  };

  const handleFilter = (title) => {
    setSelect(title)
    title === "All Projects"
      ? setFilterData(data)
      : setFilterData(data.filter((item) => item.category === title));
  };

  return (
    <>
      <Helmet>
        <title>Portfolio</title>
      </Helmet>

      {/* Head title */}
      <Head title={"Portfolio Work"} breadcum={"Portfolio"} />

      <div className="gallery-area pt-100 pb-70 portfolio">
        <div className="container">
          <h2>Showcasing some of my best work</h2>
          <div className="shorting-menu">
            {[
              "All Projects",
              "Development",
              "Website Design",
              "Mobile App Design"
            ].map((item, i) => (
              <button
                key={i}
                className={`filter ${item === select ? 'active' : ''}`}
                onClick={() => handleFilter(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="shorting">
            <div className="row">
              <PortfolioTabs
                setShow={setShow}
                show={show}
                data={filterData}
                getData={getData}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Modal --> */}
      <PortfolioModal setShow={setShow} show={show} />
    </>
  );
};

export default Portfolio;
