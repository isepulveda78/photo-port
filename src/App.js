import List from "./components/List"

function App() {
  /** Props */
  const groceries = [
    {
      id: 1,
      name: 'Peanut Butter'
    },
    {
      id: 2,
      name: 'Wine'
    },
    {
      id: 3,
      name: 'Cheese'
    }
  ]
  return (
    <div >
      <List groceries={groceries}/>
    </div>
  );
}

export default App;
