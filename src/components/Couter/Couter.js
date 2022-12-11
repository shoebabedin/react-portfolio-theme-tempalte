import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Couter = () => {
  return (
    <>
      <section className="visitors">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-6">
              <div className="text-center">
                <p>
                  <CountUp start={0} end={4132} duration={2}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start}>
                        <span className="counter" ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  +
                </p>
                <p>Happy Clients</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6">
              <div className="text-center">
                <p>
                  <CountUp start={0} end={1530} duration={2}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start}>
                        <span className="counter" ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  +
                </p>
                <p>Project Completed</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6">
              <div className="text-center">
                <p>
                  <CountUp start={0} end={24} duration={2}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start}>
                        <span className="counter" ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  +
                </p>
                <p>Years Of Experience</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6">
              <div className="text-center">
                <p>
                  <CountUp start={0} end={150} duration={2}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start}>
                        <span className="counter" ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  +
                </p>
                <p>Awards Won</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Couter;
