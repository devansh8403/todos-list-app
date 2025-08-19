import './App.css';
import Header from './myComponents/Header';
import Footer from './myComponents/Footer';
import Todos from './myComponents/Todos';

function App() {
  let todo = [
    {
      sno : 1,
      title : "Go to market",
      description : "go to market for shopping groceries"
    },
    {
      sno : 2,
      title : "Go to college",
      description : "collect notes and fee slip"
    },
    {
      sno : 3,
      title : "Go to electronic shop",
      description : "to buy a new charger for my laptop "
    }
  ]
  return (
    <div className="App">
      <Header title="My Todos List" ></Header>
      <Todos todos = {todo}/>
      <Footer/>
    </div>
  );
}

export default App;