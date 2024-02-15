import React, { useState } from 'react';
import Chatmessage from './Chatmessage';

export default function Detail()
{ 
    let count=0;
    count=count+2;
    console.log("hellooo");
   
    console.log(count);
    return(<div>
        {list.map((data) => <Chatmessage {...data} />) }
        </div>)
}