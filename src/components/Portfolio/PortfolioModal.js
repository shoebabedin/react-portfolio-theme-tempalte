import React from "react";
import { Button, Modal } from "react-bootstrap";

const PortfolioModal = ({ show, setShow }) => {
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-dialog-scrollable"
      >
        <Modal.Header closeButton>
          <Button variant="secondary" onClick={handleClose}>
            Close
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.1875 4.8125L4.8125 17.1875"
                stroke="#D3114D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.1875 17.1875L4.8125 4.8125"
                stroke="#D3114D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </Modal.Header>
        <Modal.Body>
          <div className="grid-img">
            <img
              src={require("./../../assets/images/modal-image/item1.webp")}
              alt=""
            />
            <img
              src={require("./../../assets/images/modal-image/item2.webp")}
              alt=""
            />
            <img
              src={require("./../../assets/images/modal-image/item3.webp")}
              alt=""
            />
          </div>
          <div className="project-content">
            <div className="proejct-title d-flex align-items-center justify-content-between">
              <h4 className="title">Project Name : App Design</h4>
              <p className="date">Published: 16 Oct 2022</p>
            </div>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolore, porro rem quod illo quam, eum alias id, repellendus
                magni, quas. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Dolore, Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Dolore, porro rem quod illo quam,Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Dolore, porro rem
                quod illo quam,
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolore, porro rem quod illo quam, eum alias id, repellendus
                magni, quas. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Dolore,
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolore, porro rem quod illo quam, eum alias id, repellendus
                magni, quas. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Dolore, consectetur adipisicing elit. Dolore, porro rem
                quod illo quam, eum alias id, repellendus magni,
              </p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default PortfolioModal;
