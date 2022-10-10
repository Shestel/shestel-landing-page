import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, getDocs, doc } from "firebase/firestore";
import { auth } from "../../firebase";
import "../Blog/AdminBlog.css";
import SideNavbar from "../../components/Sidebar/SideNavbar";
import AdminNavbar from "./AdminNavbar";
import CustomLoader from "../../components/CustomLoader/CustomLoader";

const MailingList = () => {
  const [user, setUser] = useState(null);
  const [mail, setMail] = useState([]);

  const mailCollectionRef = collection(db, "mailing");

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
    const getMails = async () => {
      const data = await getDocs(mailCollectionRef);
      setMail(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getMails();
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
          <div className="dashboard__blog--wrapper">
            <h2>Mailing List</h2>
            <div className="dashboard__blog--child">
              <div className="dashboard__blog--contents">
                <h2>Name</h2>
                {mail?.map((item) => (
                  <p key={item.id}>{item.name}</p>
                ))}
              </div>
              <div className="dashboard__blog--contents">
                <h2>ID</h2>
                {mail?.map((item) => (
                  <p key={item.id}>{item.id}</p>
                ))}
              </div>
              <div className="dashboard__blog--contents">
                <h2>Email</h2>
                {mail?.map((item) => (
                  <p key={item.id}>{item.mail}</p>
                ))}
              </div>
              <div className="dashboard__blog--contents">
                <h2>Subscribed On</h2>
                {mail?.map((item) => (
                  <p key={item.id}>{item.timestamp.toDate().toDateString()}</p>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MailingList;
