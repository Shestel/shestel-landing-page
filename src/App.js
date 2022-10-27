import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Blog from "./container/Blog/Blog";
import BlogDetails from "./container/Blog/BlogDetails";
import Home from "./container/Home/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "./firebase";
import Dashboard from "./container/Admin/Dashboard";
import AddEditBlog from "./container/Admin/AddEditBlog";
import Auth from "./container/Admin/Auth";
import Error404 from "./container/Error404/Error404";
import AdminMailing from "./container/Admin/AdminMailing";
import AdminBlog from "./container/Blog/AdminBlog";
import ScrollToTop from "./components/Scroll-to-top/index";
import { HelmetProvider } from 'react-helmet-async';


function App() {
  const [user, setUser] = useState(null);
  const [active, setActive] = useState();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <div className="app">
      <Router>
        <ToastContainer position="top-center" />
        <ScrollToTop />
        <HelmetProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/blog/:id" element={<BlogDetails />} />
          <Route exact path="/auth" element={<Auth />} />
          <Route exact path="/admin" element={<Dashboard user={user} />} />
          <Route exact path="/admin/all-blogs" element={<AdminBlog />} />
          <Route
            path="/create-blog"
            element={
              user?.uid ? <AddEditBlog user={user} /> : <Navigate to="/auth" />
            }
          />
          <Route
            path="/update-blog/:id"
            element={
              user?.uid ? (
                <AddEditBlog user={user} setActive={setActive} />
              ) : (
                <Navigate to="/auth" />
              )
            }
          />
          <Route
            path="/admin/mailing"
            element={
              user?.uid ? <AdminMailing user={user} /> : <Navigate to="/auth" />
            }
          />
          <Route exact path="*" element={<Error404 />} />
        </Routes>
        </HelmetProvider>
      </Router>
    </div>
  );
}

export default App;
