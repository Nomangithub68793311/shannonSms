import logo from './logo.svg';
import React,{useEffect,useState} from 'react'
import './App.css';
import { io } from "socket.io-client";
let socket;
// http://188.138.41.146:7788/sendtext?apikey=873b329043af953f&secretkey=7b3ac1aa&callerID=012&toUser=8801729961446&messageContent=hello simon,whatz up?
function App() {
  const [number, setNumber] = useState(null);

  const [message,setMessage]=useState('')
  const [user,setuUser]=useState("sohag")


  const handleClick=(e)=>{
    e.preventDefault()
    if(!number || !message){
      alert('please fill required infromation')
    }
    else{
      fetch(`http://188.138.41.146:7788/sendtext?apikey=873b329043af953f&secretkey=
      7b3ac1aa&callerID=012&toUser=${number}&messageContent=${message}`)
   .then(res=>res.json())
   .then(data=>{
    setNumber('')
    setMessage('')
    alert('text sent succesfully')

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
          
          <textarea  type="text" placeholder='Message'  value={message} onChange={e=>setMessage(e.target.value)} />
        </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
