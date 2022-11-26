import React, { useRef, useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, addDoc, doc, serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";
import "./Countdown.css";
import deadline from "../../assets/images/deadline.png";
import ReCAPTCHA from 'react-google-recaptcha'

const Countdown = () => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  const [name, setName] = useState("");
  const [mail, setMail] = useState("");

  const mailCollectionRef = collection(db, "mailing");

  const buildMail = async () => {
    await addDoc(mailCollectionRef, {
      name: name,
      mail: mail,
      timestamp: serverTimestamp(),
    });
    toast.success("Thank you for Subscribing!");
  };

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("December 11 2022 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        // Stop Timer
        clearInterval(interval.current);
      } else {
        // update timer
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    const clearme = interval.current;
    startTimer();
    return () => {
      clearInterval(clearme);
    };
  });

  return (
    <section className="countdown__container">
      <img src={deadline} alt="Countdown Timer" />
      <div className="counter__child">
        <div>
          <h2>{days}</h2>
          <p>Days</p>
        </div>
        <span>:</span>
        <div>
          <h2>{hours}</h2>
          <p>Hours</p>
        </div>
        <span>:</span>
        <div>
          <h2>{minutes}</h2>
          <p>Mins</p>
        </div>
        <span>:</span>
        <div>
          <h2>{seconds}</h2>
          <p>Secs</p>
        </div>
      </div>
      <h2 className="countdown__date">DECEMBER 11th, 2022</h2>
      <h2 className="counter__h2">
        Do you want to be a beta tester, build your content community and share the movies you love, engage with friends and discover fascinating TV series?
      </h2>
      <br />

      <div className="countdown__mailing">
        <h2 className="countdown__launch">Launching soon</h2>
        <h2>
          Join our mailing list, we would love to have you.
        </h2>

        <div className="countdown__form">
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
              sitekey="6Lc70esgAAAAAEtyUSSA-nCxMuE_EjDOc3hoKbtn" />
            {/* <div className='g-recaptcha' data-sitekey='6Lc70esgAAAAAEtyUSSA-nCxMuE_EjDOc3hoKbtn'></div> */}
            <button onClick={buildMail}>Join Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
