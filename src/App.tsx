
import { useState, useEffect } from 'react';
import { CanceledError } from './services/api-client';
import userService,{ User } from './services/user-service';
import './App.css';

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  //get users and mount on the component
  useEffect(() => {
    setLoading(true);

    const {request, cancel} = userService.getAll<User[]>();
    request
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        if(error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });
      return () => cancel();
  }, []);

    //delete
    const deleteUser = (user: User) => {
      const originalUsers = [...users];
      setUsers(users.filter(u => u.id !== user.id));

      userService.delete(user.id).catch(error => {
        setError(error.message);
        setUsers(originalUsers);
      });
    }

    //create
    const addUser = () => {
      const newUser = {id:0, name:"Mosh"};
      const originalUsers = [...users];
      setUsers([...users, newUser])

      userService
        .create(newUser)
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

      userService
        .update(updatedUser)
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