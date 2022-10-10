import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { useNavigate, useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { toast } from "react-toastify";
import "./Comment.css";
import user from "../../assets/images/user.png";
const Comment = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const [userComment, setUserComment] = useState([]);
  const commentsCollectionRef = collection(db, "comments");

  //   const { id } = useParams();

  const createComment = async () => {
    await addDoc(commentsCollectionRef, {
      name: name,
      comment: comment,
      timestamp: serverTimestamp(),
    });
    toast.success("Thank you for your comment!");
  };

  useEffect(() => {
    const getComment = async () => {
      const data = await getDocs(commentsCollectionRef);
      setUserComment(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getComment();
  }, []);

  return (
    <div className="comment__container">
      <h2>Comments ({userComment.length})</h2>
      <div className="comment__allcomment">
        {userComment && userComment.length !== 0 ? (
          userComment.map((com) => {
            return (
              <div id={com.id} className="comments__wrapper">
                <div className="comment__child">
                  <div className="comment--image">
                    <img src={user} alt="usericon" />
                  </div>
                  <div className="comment__info">
                    <h2>{com.name}</h2>
                    <p>{com.comment}</p>
                  </div>
                </div>

                <div className="comment__timestamp">
                  <p>{com.timestamp.toDate().toDateString()}</p>
                </div>
              </div>
            );
          })
        ) : (
          <>
            <h2>No Comments yet</h2>
          </>
        )}
      </div>
      <div className="comment__new">
        <h2>Leave a Comment</h2>
        <input
          type="text"
          placeholder="Please Enter your Name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
          className="comment__input"
        />
        <textarea
          value={comment}
          cols="30"
          rows="10"
          placeholder="Leave a Comment"
          onChange={(event) => {
            setComment(event.target.value);
          }}
          className="comment__description"
        ></textarea>
        <button onClick={createComment} className='btn--leave'>Leave a Comment</button>
      </div>
    </div>
  );
};

export default Comment;
