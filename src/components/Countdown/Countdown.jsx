import React, { useRef, useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, addDoc, doc, serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";
import "./Countdown.css";
import deadline from "../../assets/images/deadline.png";

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
    const countdownDate = new Date("December 6 2022 00:00:00").getTime();

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
      <h2 className="countdown__date">DECEMBER 6TH, 2022</h2>

      <div className="countdown__mailing">
        <h2>
          Join our Mailing List To Be The First To Know When Our Streaming App
          Launches.
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
              placeholder="Mailing address"
              onChange={(event) => {
                setMail(event.target.value);
              }}
              required
            />
            <button onClick={buildMail}>Join Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
