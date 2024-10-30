import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return <div>
      {alertVisible && <Alert onClose={()=> setAlertVisibility(false)}>My alert</Alert>}
      <Button color="secondary" onClick={()=>{setAlertVisibility(!alertVisible)}}>Click this hello world</Button>
  </div>
}

export default App;