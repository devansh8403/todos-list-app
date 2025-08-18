import './App.css';
import Header from './myComponents/Header';
import Footer from './myComponents/Footer';
import Todos from './myComponents/Todos';

function App() {
  return (
    <div className="App">
      <Header title="My Todos List" searchBar={false}></Header>
      <Todos/>
      <Footer/>
    </div>
  );
}

export default App;