import React, { useEffect, useState } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setLoading(true);
    };

    fetchData();
  }, []);
  return (
    <>
      <section className={`prelaoder ${loading && "loaded"}`}>
        <div className="frame">
          <div className="center">
            <div className="dot-1"></div>
            <div className="dot-2"></div>
            <div className="dot-3"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Preloader;
