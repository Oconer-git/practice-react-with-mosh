
import {useState, useEffect} from 'react';
import './App.css';

const connect = () => console.log('connecting');
const disconnect = () => console.log('disconnecting');

function App() {
  useEffect(() => {
    connect();
    return () => disconnect();
  })
  return (
    <div>
     
    </div>
  )
}

export default App;