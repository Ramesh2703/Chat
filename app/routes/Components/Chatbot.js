import React, { useState } from "react";
import Chatmessage from "./Chatmessage";
// import Options from "./Options";
import Chatbox from '../images/Chatbox.png';
import send from '../images/send.png';


export default function Chatbot() {
  const main = {
    position: 'relative',
    left: '410px',
    height: '560px',
    backgroundColor: "white",
    borderRadius: "25px",
    margin: "0em 29em",
    boxShadow: "0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)",
};
  const top = {
    fontWeight: "bold",
    textAlign: "left",
    paddingBottom: '10px',
    paddingLeft: '10px'
 };
  const chatmes = {
  height: '465px',
  backgroundColor: '#F0F0F5',
  fontFamily: "Arial, sans-serif",
  fontSize: "19px",
  overflowY: 'auto',
  paddingTop:'8px',
};
const form1 = {
  textAlign: "center",
};
const inputbox = {
// backgroundColor:'red',
outline: 'none',
borderBottom: 'none',
borderLeft: 'none',
borderRight: 'none',
borderTop:'none',
width: "50%",
marginRight:'20px',
padding:'5px',
lineHeight: '1.5em',
fontSize: '1em',
};
const button={
  backgroundColor:'white',
  outline: 'none',
  borderTop:'none',
  borderBottom: 'none',
  borderLeft: 'none',
  borderRight: 'none',
  width: "7%", fontWeight: "bold",
  padding:'4px',
  cursor: "pointer",
};
const [messages, setmessages] = useState([
  {
    mes: "hi,May I have your name.?",
  },
]);
const [text, settext] = useState("");

const onSend = () => {
  let list = [...messages, { mes: text, user: true }];
  if (list.length > 2) {
  } else {
    list = [
      ...list,
      {
        mes: "hello ," + text,
      },
    ];
    setmessages(list);
    list = [
      ...list,
      {
        mes: "how can i help you",
      },
      // { mes: <Options /> },
    ];
  }
  setmessages(list);
  settext("");
};
return (
  <div style={main}>
    <div>
      <div style={top}>
        <img src={Chatbox} style={{ width: '35px' }} />
        <span style={{ fontSize: '30px' }}>Chatbox</span></div>
      <div style={chatmes}> {messages.map((dat) => (
        <Chatmessage {...dat} />
      ))}
      </div>
    </div>
    <div style={form1}>
      <input
        type="text"
        value={text}
        placeholder="Type a message..."
        onInput={(e) => settext(e.target.value)}
        style={inputbox}
      ></input>
      <button
        type="submit"
        onClick={onSend}
        style={button}>
        <img src={send} style={{width:'100%'}}></img>
      </button>
    </div>
  </div>
);
}