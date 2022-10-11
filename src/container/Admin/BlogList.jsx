import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { BsTrash } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
// import './AdminBlog.css'
import '../Blog/AdminBlog.css'

const BlogList = () => {
  const [user, setUser] = useState(null);
  const [blog, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const blogsCollectionRef = collection(db, "blogs");

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  useEffect(() => {
    const getBlogs = async () => {
      const data = await getDocs(blogsCollectionRef);
      setBlogs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getBlogs();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure wanted to delete that blog ?")) {
      try {
        setLoading(true);
        await deleteDoc(doc(db, "blogs", id));
        toast.success("Blog deleted successfully");
        setLoading(false);
        navigate("/admin");
      } catch (err) {
        console.log(err);
      }
    }
  };

  const userId = user?.uid;

  return (
    <>
      <div className="dashboard__blog--wrapper">
        <h2>All Blogs</h2>
        <div className="dashboard__blog--child">
          <div className="dashboard__blog--contents">
            <h2>Title</h2>
            {blog?.map((item) => (
              <p key={item.id}>{item.title}</p>
            ))}
          </div>
          <div className="dashboard__blog--contents">
            <h2>ID</h2>
            {blog?.map((item) => (
              <p key={item.id}>{item.id}</p>
            ))}
          </div>
          <div className="dashboard__blog--contents">
            <h2>Author</h2>
            {blog?.map((item) => (
              <p key={item.id}>{item.writtenBy}</p>
            ))}
          </div>
          <div className="dashboard__blog--contents">
            <h2>Written On</h2>
            {blog?.map((item) => (
              <p key={item.id}>{item.timestamp.toDate().toDateString()}</p>
            ))}
          </div>
          <div className="dashboard__blog--contents">
            <h2>Actions</h2>
            {userId &&
              blog?.map(
                (item) =>
                  item.userId === userId && (
                    <div className="dashboard__blog--icon">
                      <BsTrash
                        onClick={() => handleDelete(item.id)}
                        className="dashboard__home--icon"
                      />
                      <Link to={`/update-blog/${item.id}`}>
                        <AiOutlineEdit className="dashboard__home--icon" />
                      </Link>
                    </div>
                  )
              )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogList;
