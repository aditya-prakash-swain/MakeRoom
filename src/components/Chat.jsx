import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { auth, db } from "../firebaseConfig";
import "../styles/Chat.css"

export const Chat = ({ room }) => {
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const messageRef = collection(db, "messages");

 

  useEffect(() => {
    const queryMessages = query(
      messageRef,
      where("room", "==", room),
      orderBy("createdAt")
    );
    const unscribe = onSnapshot(queryMessages, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });

      setMessages(messages);
    });

    return () => unscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(newMessage);
    if (newMessage === "") return;

    await addDoc(messageRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      room,
    });
    setNewMessage("");
  };

  return (
    <div className="chat-app">
      <div className="header">
        <h1>Welcome to: {room.toUpperCase()}</h1>
      </div>
      <div className="messages">
        {messages.map((message) => (
          <div className="message" key={message.id}>
            <span className="user">{message.user}</span> {message.text}{" "}
          </div>
        ))}
      </div>
      <form className="new-message-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="new-message-input"
          placeholder="Type your message..."
          onChange={(e) => setNewMessage(e.target.value)}
          value={newMessage}
        />
        <button type="submit" className="send-button">
          Send
        </button>
      </form>
      
    </div>
  );
};
