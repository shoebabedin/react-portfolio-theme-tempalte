import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { toast, ToastContainer } from "react-toastify";
import Head from "../components/about/Head";
import Testimnial from "../components/Testimonial/Testimnial";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [notifymessage, setNotifyMessage] = useState(false);

  const notify = () => toast(notifymessage);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, phone, subject, message);
    if (name && email && phone && subject && message !== "") {
      setNotifyMessage(true);
      toast("Successfully send our message");
    }
  };
  return (
    <>
      <Helmet>
        <title>Contact</title>
      </Helmet>

      <Head title={"Contact Us"} breadcum={"Contact"} />

      {/* contact  */}
      <section className="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="comments">
                <h4>
                  Get In <span>Touch</span>
                </h4>
                <hr />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="comments">
                <h5>Contact Info</h5>
                <p>
                  Always available for freelance work if the right project comes
                  along, Feel free to contact me!
                </p>
                <div className="contact-item">
                  <span>
                    <svg
                      width="38"
                      height="38"
                      viewBox="0 0 38 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.9997 20.1666C21.577 20.1666 23.6663 18.0772 23.6663 15.4999C23.6663 12.9226 21.577 10.8333 18.9997 10.8333C16.4223 10.8333 14.333 12.9226 14.333 15.4999C14.333 18.0772 16.4223 20.1666 18.9997 20.1666Z"
                        stroke="#D3114D"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M30.6663 15.4999C30.6663 25.9999 18.9997 34.1666 18.9997 34.1666C18.9997 34.1666 7.33301 25.9999 7.33301 15.4999C7.33301 12.4057 8.56217 9.43826 10.7501 7.25034C12.938 5.06242 15.9055 3.83325 18.9997 3.83325C22.0939 3.83325 25.0613 5.06242 27.2493 7.25034C29.4372 9.43826 30.6663 12.4057 30.6663 15.4999V15.4999Z"
                        stroke="#D3114D"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <div>
                    <h4>Location</h4>
                    <p>Avon str. 22, NYC, USA</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span>
                    <svg
                      width="38"
                      height="38"
                      viewBox="0 0 38 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.5781 6.1665C25.557 6.69759 27.3614 7.73983 28.8102 9.18862C30.259 10.6374 31.3012 12.4418 31.8323 14.4207"
                        stroke="#D3114D"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M22.3691 10.6729C23.5593 10.9889 24.6448 11.614 25.5155 12.4848C26.3863 13.3555 27.0114 14.441 27.3275 15.6312"
                        stroke="#D3114D"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.8223 18.4844C15.0228 20.9636 17.0275 22.9631 19.5098 24.1573C19.6929 24.244 19.8954 24.2815 20.0974 24.2662C20.2994 24.2508 20.4939 24.1832 20.6618 24.0698L24.3077 21.6344C24.4688 21.5251 24.6549 21.4585 24.8487 21.4406C25.0425 21.4228 25.2377 21.4543 25.416 21.5323L32.241 24.4636C32.4743 24.5606 32.6692 24.7317 32.7956 24.9504C32.9221 25.1691 32.9732 25.4234 32.941 25.674C32.7247 27.3623 31.9006 28.914 30.6229 30.0387C29.3452 31.1634 27.7015 31.784 25.9993 31.7844C20.7392 31.7844 15.6945 29.6948 11.9751 25.9753C8.25559 22.2559 6.16602 17.2112 6.16602 11.9511C6.1664 10.2489 6.78699 8.60518 7.91168 7.32749C9.03636 6.04981 10.5881 5.22571 12.2764 5.00939C12.527 4.9772 12.7813 5.02828 13 5.15477C13.2187 5.28125 13.3898 5.47613 13.4868 5.70939L16.4181 12.549C16.4943 12.7245 16.5262 12.916 16.511 13.1068C16.4957 13.2975 16.4338 13.4816 16.3306 13.6427L13.8952 17.3469C13.7868 17.5144 13.7231 17.707 13.7104 17.9061C13.6976 18.1053 13.7361 18.3044 13.8223 18.4844V18.4844Z"
                        stroke="#D3114D"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <div>
                    <h4>Call Me</h4>
                    <p>+77 022 155 02 02</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span>
                    <svg
                      width="38"
                      height="38"
                      viewBox="0 0 38 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 14.3333V29.5C5 29.8094 5.12292 30.1062 5.34171 30.325C5.5605 30.5438 5.85725 30.6667 6.16667 30.6667H31.8333C32.1428 30.6667 32.4395 30.5438 32.6583 30.325C32.8771 30.1062 33 29.8094 33 29.5V14.3333L19 5L5 14.3333Z"
                        stroke="#D3114D"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M33 14.3333L21.5521 22.4999H16.4479L5 14.3333"
                        stroke="#D3114D"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <div>
                    <h4>Email Me</h4>
                    <p>example@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="comments">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-12 col-md-6 mb-3">
                      <input
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>

                    <div className="col-12 col-md-6 mb-3">
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                    <div className="col-12 col-md-6 mb-3">
                      <input
                        onChange={(e) => setPhone(e.target.value)}
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Phone"
                        required
                      />
                    </div>

                    <div className="col-12 col-md-6 mb-3">
                      <input
                        onChange={(e) => setSubject(e.target.value)}
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Subject"
                        required
                      />
                    </div>
                    <div className="col-12 mb-3">
                      <textarea
                        onChange={(e) => setMessage(e.target.value)}
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="5"
                        placeholder="Message..."
                        required
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={notify}
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* contact  */}
      <ToastContainer />
      {/* testimonial */}
      <Testimnial />
    </>
  );
};

export default Contact;
