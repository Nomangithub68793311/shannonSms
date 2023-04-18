import logo from './logo.svg';
import axios from 'axios';

import React,{useEffect,useState} from 'react'
import './App.css';
import { io } from "socket.io-client";

let socket;
// `https://smpp.ajuratech.com:7790/sendtext?apikey=873b329043af953f&secretkey=7b3ac1aa&callerID=SENDER_ID&toUser=${number}&messageContent=${message}`
function App() {
  const [number, setNumber] = useState(null);

  const [message,setMessage]=useState('')
  const [user,setuUser]=useState("sohag")


  const handleClick=async(e)=>{
    e.preventDefault()
    console.log("response")

    if(!number || !message){
      alert('please fill required infromation')
    }
    else{
try{
  const response = await axios.get(`https://smpp.ajuratech.com:7790/sendtext?apikey=873b329043af953f&secretkey=7b3ac1aa&callerID=
  1234&toUser=${number}&messageContent=${message}`);
  console.log("response",response);
}
catch (error) {
  console.error("error",error);
}
}
   
  }
  return (
    <div className="App">
      <h1>Shannon SMS</h1>
      <form onSubmit={handleClick}>
        <div>
        <label>
        
          <input type="text" placeholder='Number' value={number} onChange={e=>setNumber(e.target.value)} />
        </label>
        </div>
        <div style={{margin:10}}>
        <label>
          
          <textarea  type="text" placeholder='Message'  value={message} onChange={e=>setMessage(e.target.value)} />
        </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
