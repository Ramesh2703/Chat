import React, { useState } from "react";
// import Chatmessage from "./Chatmessage";
// import Detail from "./Detail";

const buttons = {
  background: "#F9F9F9",
  fontSize: "16px",
  borderRadius: "8px",
  cursor: "pointer",
  border: '0.12vw solid #777',
  boxShadow: "0 3px 6px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)",
  fontFamily: "Arial, sans-serif",
  margin: "4px",
};
// const handleMouseEnter = () => {
//   buttonStyle.backgroundColor = "#2980b9";
// };
// const handleMouseLeave = () => {
//   buttonStyle.backgroundColor = "#3498db";
// };


// const[message,setmessage]=useState([
//   {mes:'hello'}
// ]);
//  const ddetail =()=>{
//   let list=[{mes:'product',user:true}];
//   setmessage(list);
//   message.map((data) => <Chatmessage {...data} />) 
// }

const Options = () => {
 
  const option2 = (
    <button
      style={buttons}
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
    >
      Billing
    </button>
  );
  const option3 = <button style={buttons}>Shipping</button>;
  const option4 = <button style={buttons}>Others...</button>;
  return (
    <div>
      <button
      // onClick={ddetail}
      style={buttons}
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
    >Product
    </button>
      {option2}
      {option3}
      {option4}
    </div>
  );
};

export default Options;
