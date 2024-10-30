import Alert from "./components/Alert";
import Button from "./components/Button";
function App() {
  return <div>
      <Button color="secondary" onClick={()=>{console.log('Clicked')}}>Click this hello world</Button>
  </div>
}

export default App;