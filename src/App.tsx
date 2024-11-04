
import { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

interface User{
  id: number,
  name: string
}
function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res)=>{setUsers(res.data)})
  },[]);

  return (
    <ul>
      {users.map(user => <li>{user.name}</li>)}
    </ul>
  )
}

export default App;