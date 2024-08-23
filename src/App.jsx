import { Auth } from "./components/Auth";
import { Chat } from "./components/Chat";
import "./App.css";
import { useState } from "react";
import Cookies from "universal-cookie";


import { AppWrapper } from "./components/AppWrapper";

const cookies = new Cookies();

export default function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token")); //sets view for with and without authentication
  const [room, setRoom] = useState("");
  const [isInChat, setIsInChat] = useState(null);




  if (!isAuth) {
    return (
      <AppWrapper
        isAuth={isAuth}
        setIsAuth={setIsAuth}
        setIsInChat={setIsInChat}
      >
        <Auth setIsAuth={setIsAuth} />
      </AppWrapper>
    );
  }
  return (
    <AppWrapper isAuth={isAuth} setIsAuth={setIsAuth} setIsInChat={setIsInChat}>
      {isInChat ? (
        <Chat room={room} />
      ) : (
        <div className="room">
          <label>Enter room name</label>
          <input onChange={(e) => setRoom(e.target.value)} />
          <button onClick={() => setIsInChat(true)}>Enter Chat</button>
        </div>
      )}
    </AppWrapper>
  );
}
