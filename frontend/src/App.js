import React, {useState, useRef} from 'react';
import axios from 'axios';
import Header from './Header';
import Card from './Card';
import Input from './Input';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './btn.css';

export default function App() {

  const [message,setMessage] = useState(null);
  const [data,setData] = useState(null);
  const [loading,setLoading] = useState(false);

  const inputRef = useRef();

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      // Trigger the button click event
      console.log(event);
    }
  };

  // console.log(message);

  const onSendClick = () => {
    setLoading(true);
    axios.post('http://localhost:8080/chat', {
      message: message
    })
    .then(response => {
      setLoading(false);
      setMessage("");
      // Handle the successful response from the server
      // console.log(response.data);
      setData(response.data);
    })
    .catch(error => {
      // Handle any errors that occur during the request
      console.error(error);
    });
    
  } 


  return (
    <>
    <Header />
    {loading && <div className='load-container'>
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>  </div>}
    <Card response={data} />
    <Input setText={(message)=>setMessage(message)} text={message} 
           ref={inputRef} onKeyPress={handleKeyPress}/>
    <button className='btn' onClick={onSendClick}>Send</button>
    </>

  );
}
