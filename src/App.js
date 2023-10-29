import logo from './logo.svg';
import axios from 'axios';

import React,{useEffect,useState} from 'react'
import './App.css';
import { io } from "socket.io-client";
const url ="https://edtecobd.com/api/send-sms-v1" || "https://dynamicrobosoft.com/api/send-sms"
let socket;
// `https://smpp.ajuratech.com:7790/sendtext?apikey=873b329043af953f&secretkey=7b3ac1aa&callerID=SENDER_ID&toUser=${number}&messageContent=${message}`
function App() {
  const [number, setNumber] = useState(null);

  const [text,setText]=useState('')
  const [user,setuUser]=useState("sohag")


  const handleClick=async(e)=>{
    e.preventDefault()
    console.log("response")
    console.log(number,text)
    if(!number || !text){
      alert('please fill required infromation')
    }
    else{
    
        fetch(url,{
          method:'POST',
          headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
         },
          body:JSON.stringify({
           
           "number":number,
           "text":text
  
          })
        })
        .then(res=>res.json())
        .then(data=>{
          setNumber('')
          setText('')

      alert('SMS sent successfully')

        })
        .catch(e=>console.log(e))
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
          
          <textarea  type="text" placeholder='Message'  value={text} onChange={e=>setText(e.target.value)} />
        </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;



