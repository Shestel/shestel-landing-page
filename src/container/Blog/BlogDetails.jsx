import React, { useState, useEffect } from "react";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import Footer from "../../components/Footer/Footer";
import "./BlogDetails.css";
import {
  FacebookShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  RedditShareButton,
  WhatsappIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  TelegramIcon,
  RedditIcon,
} from "react-share";
// import Comment from "../../components/Comment/Comment";
import Navbar from "../../components/Navbar/Navbar";
import CustomLoader from "../../components/CustomLoader/CustomLoader";
// import { DiscussionEmbed } from "disqus-react";
// import Giscus from "@giscus/react";
import Mailing from "../../components/Mailing/Mailing";
// import { ReactCusdis } from "react-cusdis";
import { Helmet } from "react-helmet";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [tags, setTags] = useState([]);

  const shareUrl = `https://shestel.com/blog/${id}`;

  useEffect(() => {
    const getBlogsData = async () => {
      const blogRef = collection(db, "blogs");
      const blogs = await getDocs(blogRef);
      setBlogs(blogs.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      let tags = [];
      blogs.docs.map((doc) => tags.push(...doc.get("tags")));
      let uniqueTags = [...new Set(tags)];
      setTags(uniqueTags);
    };

    getBlogsData();
  }, []);

  useEffect(() => {
    id && getBlogDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const getBlogDetail = async () => {
    const docRef = doc(db, "blogs", id);
    const blogDetail = await getDoc(docRef);
    setBlog(blogDetail.data());
  };

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  // useEffect(() => {
  //   const DISQUS_SCRIPT = 'disq_script'
  //   const sd = document.getElementById(DISQUS_SCRIPT)
  //   if (!sd) {
  //     var disqus_config = function() {
  //       this.page.url = `https://shestel.com/blog/${id}`;
  //       this.page.identifier = blog.id
  //     }

  //     const d = document
  //     const s = d.createElement('script')
  //     s.src = 'https://www-shestel-com.disqus.com/embed.js';// REPLACE THIS LINE WITH YOUR DISQUS LINE
  //     s.id = DISQUS_SCRIPT
  //     s.async = true
  //     s.setAttribute('data-timestamp', +new Date())

  //     d.body.appendChild(s)
  //   } else {
  //     window.DISQUS.reset({
  //       reload: true,
  //       config: disqus_config,
  //     })
  //   }
  // }, [])

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
                src={`https://www.googletagmanager.com/gtag/js?id=G-NGGECRKPSW`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag("js", new Date());

          gtag("config", "G-NGGECRKPSW");
          `,
                }}
              />
            </head> */}
            <title>Shestel | {blog?.title}</title>
          </Helmet>
          <Navbar />

          <div className="blog__details--container">
            <div className="blog__details--cover">
              <img src={blog?.imgUrl} alt={blog?.title} />
            </div>
            <div className="blog__details--description">
              <div className="blog__details--tag">
                {blog?.tags.map((tag) => (
                  <span key={tag.id}>{tag}</span>
                ))}
              </div>
              <div className="blog__details--title">
                <h2>{blog?.title}</h2>
              </div>
              <div className="blog__details--written">
                <p>By {blog?.writtenBy} </p>
                <span>{blog?.timestamp.toDate().toDateString()}</span>
              </div>
              <div className="blog__details--share">
                <FacebookShareButton
                  url={shareUrl}
                  quote={blog?.title}
                  // hashtag={"#portfolio..."}
                >
                  <FacebookIcon size={40} round={true} />
                </FacebookShareButton>
                <WhatsappShareButton
                  url={shareUrl}
                  title={blog?.title}
                  // hashtag={"#portfolio..."}
                >
                  <WhatsappIcon size={40} round={true} />
                </WhatsappShareButton>
                <TwitterShareButton
                  url={shareUrl}
                  title={blog?.title}
                  hashtag={blog?.tags}
                >
                  <TwitterIcon size={40} round={true} />
                </TwitterShareButton>
                <LinkedinShareButton
                  url={shareUrl}
                  title={blog?.title}
                  // hashtag={"#portfolio..."}
                >
                  <LinkedinIcon size={40} round={true} />
                </LinkedinShareButton>
                <TelegramShareButton
                  url={shareUrl}
                  title={blog?.title}
                  // hashtag={"#portfolio..."}
                >
                  <TelegramIcon size={40} round={true} />
                </TelegramShareButton>
                <RedditShareButton
                  url={shareUrl}
                  title={blog?.title}
                  // hashtag={"#portfolio..."}
                >
                  <RedditIcon size={40} round={true} />
                </RedditShareButton>
              </div>
            </div>
            <div className="blog__details--content">
              <div
                className="blog__details--description-p"
                dangerouslySetInnerHTML={{
                  __html: blog?.description,
                }}
              ></div>
            </div>
            {/* <DiscussionEmbed
              shortname="shestel-com"
              config={{
                // url: `https://shestel.com/blog/${blog.id}`,
                url: `https://localhost:3000/blog/https://cors-anywhere.herokuapp.com/corsdemo`,
                identifier: id,
                // title: blog.title,
              }}
            /> */}
            {/* <Giscus
              src="https://giscus.app/client.js"
              repo="Shestel/shestel-landing-page"
              repoId="R_kgDOILfkaw"
              category="General"
              categoryId="DIC_kwDOILfka84CR8mL"
              mapping="url"
              strict="0"
              reactionsEnabled="1"
              emitMetadata="0"
              inputPosition="bottom"
              theme="light"
              lang="en"
              crossorigin="anonymous"
              loading="lazy"
              async
            /> */}

            {/* <Comment /> */}
            {/* <div className="cudis__container">
              <ReactCusdis
                attrs={{
                  host: "https://cusdis.com",
                  appId: "d58fe715-ed28-43cf-a702-384a54a3cebf",
                  pageId: blog?.id,
                  pageTitle: blog?.title,
                  pageUrl: `https://shestel.com/blog/${id}`,
                }}
              />
            </div> */}
            <div id="graphcomment"></div>
          </div>
          <Mailing />
          <Footer />
        </>
      )}
    </>
  );
};

export default BlogDetails;
