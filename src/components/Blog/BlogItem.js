import React from "react";
import { Link } from "react-router-dom";
import blogdata from "../../assets/data/blog.json";

const BlogItem = ({ item }) => {
  // const [itemShow, setItemShow] = useState();

  return (
    <>
      <section className="blogs">
        <div className="container">
          d
          <div className="row">
            <div className="col-md-12 text-center">
              <h5>Blogs</h5>
              <h2>Latest Updates</h2>
            </div>
            {blogdata.slice(0, item).map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6 mb-md-3">
                <Link to={`/blog-details/${item.id}`}>
                  <div className="slider_items">
                    <img
                      className="img-fluid"
                      src={require(`./../../assets/images/blog/${item.img}.webp`)}
                      alt=""
                    />
                    <div className="content">
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item">
                            <Link to="#">{item.published_by}</Link>
                          </li>
                          <li className="breadcrumb-item">
                            <Link to="#">{item.comment_category}</Link>
                          </li>
                          <li className="breadcrumb-item" aria-current="page">
                            <Link to="#">{item.comment.length} comments</Link>
                          </li>
                        </ol>
                      </nav>
                      <Link to={`/blog-details/${item.id}`}>
                        <h4>
                          {item.title.slice(0, 29)}
                          {item.title.length > 29 && "..."}
                        </h4>
                        <p>{item.desc.slice(0, 118)}</p>
                      </Link>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogItem;
