"use client";
import styles from "./page.module.css";
import { io } from "socket.io-client";
import { useState } from "react";
import ChatPage from "@/pages/ChatPage";
import ParticlesBg from "particles-bg";
import Login from "@/pages/Login/Login";
import NavBar from "@/components/NavBar";

export default function Home() {
  const [showChat, setShowChat] = useState(false);
  const [userName, setUserName] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);
  const [roomId, setroomId] = useState("");

  let socket: any;
  socket = io("http://localhost:3001");

  const handleJoin = () => {
    if (userName !== "" && roomId !== "") {
      console.log(userName, "userName", roomId, "roomId");
      socket.emit("join_room", roomId);
      setShowSpinner(true);
// You can remove this setTimeout and add your own logic
      setTimeout(() => {
        setShowChat(true);
        setShowSpinner(false);
      }, 4000);
    } else {
      alert("Please fill in Username and Room Id");
    }
  };

  return (
    <div>
      <NavBar />
      <Login styles={styles} showChat={showChat} 
      showSpinner={showSpinner} setUserName={setUserName} 
      setroomId={setroomId} handleJoin={handleJoin}/>
      <div style={{ display: !showChat ? "none" : "" }}>
        <ChatPage socket={socket} roomId={roomId} username={userName} />
      </div>
      <ParticlesBg type="circle" bg={{
        position: "fixed",
        zIndex: -1,
        top: 0,
        left: 0
      }}/>
    </div>
  );
} 