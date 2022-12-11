import React, { useState } from "react";
import Moment from "react-moment";
import { useParams } from "react-router-dom";
import blogdata from "../../assets/data/blog.json";

const BlogDetails = () => {
  let params = useParams();
  const [itemShow, setItemShow] = useState(blogdata[params.id]);

  return (
    <>
      <section className="blog_details">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>{itemShow.title}</h2>
              <div className="published_date">
                <div className="published_by">
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M2.90625 20.2499C3.82775 18.6534 5.15328 17.3277 6.74958 16.406C8.34588 15.4843 10.1567 14.999 12 14.999C13.8433 14.999 15.6541 15.4843 17.2504 16.406C18.8467 17.3277 20.1722 18.6534 21.0938 20.2499"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <p>Published By {itemShow.published_by}</p>
                </div>
                <div className="date">
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.5 3.75H4.5C4.08579 3.75 3.75 4.08579 3.75 4.5V19.5C3.75 19.9142 4.08579 20.25 4.5 20.25H19.5C19.9142 20.25 20.25 19.9142 20.25 19.5V4.5C20.25 4.08579 19.9142 3.75 19.5 3.75Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.5 2.25V5.25"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.5 2.25V5.25"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.75 8.25H20.25"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <p>
                    <Moment
                      date={itemShow.published_date}
                      format="DD/MM/YYYY"
                    />
                  </p>
                </div>
              </div>
              <div className="cover_img">
                <img
                  className="img-fluid"
                  src={require(`./../../assets/images/blog/${itemShow.img}.webp`)}
                  alt=""
                />
              </div>
              <div className="content">
                <p className="text">{itemShow.desc}</p>

                <div className="tags">
                  {itemShow.comment_tag.map((item) => (
                    <a key={item.id} href={item.title} className="tag-item">
                      #{item.title}
                    </a>
                  ))}
                </div>
              </div>
              <div className="comments">
                <h4> {itemShow.comment.length} Comments</h4>
                <hr />
                {itemShow.comment.map((item) => (
                  <div key={item.id} className="commenting">
                    <div className="commenting-img">
                      <img
                        src={require(`../../assets/images/blog-details/${item.comment_img}.webp`)}
                        alt=""
                      />
                    </div>
                    <div className="commenting-text">
                      <div className="mob-flex">
                        <div className="mob-commenting-img">
                          <img
                            src={require(`../../assets/images/blog-details/${item.comment_img}.webp`)}
                            alt=""
                          />
                        </div>
                        <h4>{item.comment_ttl}</h4>
                      </div>
                      <p>{item.comment_text}</p>
                    </div>
                  </div>
                ))}

                <h4>Leave a Comment</h4>
                <form>
                  <div className="row">
                    <div className="col-12 mb-3">
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="5"
                        placeholder="Your comment here..."
                      ></textarea>
                    </div>

                    <div className="col-12 col-md-6 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                      />
                    </div>

                    <div className="col-12 col-md-6 mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                      />
                    </div>

                    <div className="col-12">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
