
import { useState } from 'react';
import './App.css';
import Message from './Message';
function App() {
  const [tags, setTags] = useState(['happy','cheerful']);

  const handleClick = () => {
    // add
    setTags([...tags, 'exciting']);

    //remove
    setTags(tags.filter(tag => tag != 'happy'));

    //update
    setTags(tags.map(tag => tag === 'happy' ? 'happiness' : tag));
  }

  return (
    <div>
    </div>
  )
 
}

export default App;