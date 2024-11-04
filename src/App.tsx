
import { useState, useEffect } from 'react';
import axios,{AxiosError, CanceledError} from 'axios';

import './App.css';

interface User{
  id: number,
  name: string
}
function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  //get users and mount on the component
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    
    axios.get<User[]>('https://jsonplaceholder.typicode.com/users',{signal: controller.signal})
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        if(error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });
      return () => controller.abort();
    }, []);

    //delete
    const deleteUser = (user: User) => {
      const originalUsers = [...users];
      setUsers(users.filter(u => u.id !== user.id));

      axios.delete('https://jsonplaceholder.typicode.com/users/' + user.id)
        .catch(error =>
          {
            setError(error.message);
            setUsers(originalUsers);
          });
    }

    //add
    const addUser = () => {
      const newUser = {id:0, name:"Mosh"};
      const originalUsers = [...users];
      setUsers([...users, newUser])
      axios.post('https://jsonplaceholder.typicode.com/users/',newUser)
        .then(({data: savedUser}) => {
          setUsers([...users, savedUser])
        }) 
        .catch(error => {
          setError(error.message);
          setUsers(originalUsers);
        })
    }

    //update user
    const updateUser = (user: User) => {
      const originalUsers = [...users];
      const updatedUser = {...user, name: user.name + '!'};
      setUsers(users.map(u => u.id === user.id ? updatedUser : u));

      axios.patch('https://jsonplaceholder.typicode.com/users/' + user.id, updatedUser)
        .catch((error) => {
          setError(error.message);
          setUsers(originalUsers);
        })
    }
  return (
    <>
      {isLoading && <div className="spinner-border"></div>}
      {error && <p className="text-danger">{error}</p>}
      <button className="btn btn-primary mb-3" onClick={addUser}>Add</button>
      <ul className="list-group">
        {users.map(user => 
          <li className="list-group-item d-flex justify-content-between" key={user.id}>
            {user.name}
            <div>
              <button className="btn btn-outline-primary mx-1" onClick={() => updateUser(user)}>Update</button>
              <button className="btn btn-outline-danger" onClick={() => deleteUser(user)}>Delete</button>
            </div>
          </li>
        )}
      </ul>
    </>
  )
}

export default App;