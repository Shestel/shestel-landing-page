import React, { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc, doc, serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";
import "./Mailing.css";
import Modal from "../Modal/Modal";
import ReCAPTCHA from 'react-google-recaptcha'


const Mailing = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  // const [openModal, setOpenModal] = useState(false);

  const mailCollectionRef = collection(db, "mailing");

  const createMail = async () => {
    await addDoc(mailCollectionRef, {
      name: name,
      mail: mail,
      timestamp: serverTimestamp(),
    });
    toast.success("Thank you for Subscribing!");
    // setOpenModal(true);
  };

  return (
    <div className="mailing__container">
      <div className="mailing__content">
        <h2>Join Our Mailing List</h2>
        <p>Be the first one testing the features of our content community platform.</p>
      </div>
      <div className="mailing__form">
        <div>
          <input
            type="text"
            placeholder="Please Enter your Name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
            required
          />
          <input
            type="email"
            name="email"
            value={mail}
            placeholder="Email Address"
            onChange={(event) => {
              setMail(event.target.value);
            }}
            required
          />
          <ReCAPTCHA
            sitekey="6Lc70esgAAAAAEtyUSSA-nCxMuE_EjDOc3hoKbtn"/>
          <button onClick={createMail}>Join Now</button>
          {/* <Modal open={openModal} onClose={() => setOpenModal(false)} /> */}
        </div>
      </div>
    </div>
  );
};

export default Mailing;
