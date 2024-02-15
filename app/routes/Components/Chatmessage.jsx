import React from "react";
import bot from '../images/bot.jpg';
import user from '../images/user.jpg';

export default function Chatmessage(props) {
  const chatright={
    textAlign:'right',
    background:'#5BABF8',
    fontFamily: "Arial, sans-serif",
    fontSize:'19px',
    padding:'4px',
    color:'white',
  };
  const chatleft={
    background:'white',
    color:'gray',
    fontFamily: "Arial, sans-serif",
    fontSize:'19px',
    border: '0.02vw solid #777',
    padding:'4px',
  };
  return (
    <div style={{lineHeight:'2.0'}}>
      {props.user ? (
        <div style={{textAlign:'right'}}>
          <span style={chatright}>{props.mes}</span>
          <img src={user}style={{width:'35px',}}/>
        </div>
      ) : (
        <div >
          <img src={bot} style={{width:'35px'}}/>
          <span style={chatleft}>{props.mes}</span><br/>
        </div>
      )}
    </div>
  );
}