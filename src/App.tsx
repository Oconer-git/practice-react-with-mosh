import ListGroup from "./components/ListGroup";

function App() {
  let items = [
    'New York',
    'Makati',
    'Tokyo',
    'Paris',
    'Bangkok'
  ]

  return <div>
    <ListGroup items={items} heading="Cities"/>
  </div>
}

export default App;