import React, { useEffect, useState } from "react";
import { collection, getDocs, doc, query, orderBy } from "firebase/firestore";
import { db } from "../../firebase";
import { excerpt } from "../../utility/index";
import "./Blog.css";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { FcAlarmClock } from "react-icons/fc";
import Navbar from "../../components/Navbar/Navbar";
import CustomLoader from "../../components/CustomLoader/CustomLoader";
import { Helmet } from "react-helmet-async";
// import { Parser } from "html-to-react";

const Blog = () => {
  const [blog, setBlogs] = useState([]);

  const blogsCollectionRef = collection(db, "blogs");
  useEffect(() => {
    const q = query(blogsCollectionRef, orderBy("timestamp", "desc"));
    const getBlogs = async () => {
      // const data = await getDocs(blogsCollectionRef);
      const data = await getDocs(q);
      setBlogs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getBlogs();
  }, []);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <>
      {loading ? (
        <CustomLoader loading={loading} />
      ) : (
        <>
          <Helmet>
            {/* <head>
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-NGGECRKPSW"
            ></script>
             <script>
              window.dataLayer = window.dataLayer || [];
              function gtag() {
                dataLayer.push(arguments);
              }
              gtag("js", new Date());

              gtag("config", "G-NGGECRKPSW");
              
      
               </script>
            </head> */}
          </Helmet>
          <Navbar />

          <section className="blog__home--container">
            <div className="blog__home--top">
              <h2 className="heading-main-blog">Our Latest Posts.</h2>
            </div>
            <div className="blog__home--bottom">
              {blog?.map((blog) => (
                <div key={blog.id} className="blog__home--item">
                  <div className="blog__item--top">
                    <img src={blog.imgUrl} alt={blog.title} />
                  </div>
                  <div className="blog__item--middle">
                    {/* <div className="blog__item--middle__span">
                      {blog?.tags.map((tag) => (
                        <span className="heading-blog-category">{tag}</span>
                      ))}
                    </div> */}

                    <h2 className="heading-blog-title">{blog.title}</h2>
                  </div>
                  <div className="blog__item--bottom">
                    <div
                      className="blog__description"
                      dangerouslySetInnerHTML={{
                        __html: excerpt(blog.description, 250),
                      }}
                    ></div>
                    <div className="blog__written">
                      <div className="blog__written--content">
                        <p>Author: {blog.writtenBy}</p>
                        <span>
                          <FcAlarmClock
                            style={{ width: "20px", height: "20px" }}
                          />
                          {blog?.timestamp.toDate().toDateString()}
                        </span>
                      </div>
                      <Link to={`/blog/${blog.id}`}>
                        <button className="btn-read">Read More</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <Footer />
        </>
      )}
    </>
  );
};

export default Blog;
