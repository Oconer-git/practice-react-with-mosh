import ListGroup from "./components/ListGroup";

function App() {
  let items = [
    'New York',
    'Makati',
    'Tokyo',
    'Paris',
    'Bangkok'
  ]

  const handleSelectedItem = (item: string) => {
    console.log(item);
  }
  return <div>
    <ListGroup items={items} heading="Cities" onSelectItem={handleSelectedItem}/>
  </div>
}

export default App;