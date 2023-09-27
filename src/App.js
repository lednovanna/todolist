import './App.css';
import image from './todo.jpg';
import imageTwo from './done.jpg';
import {todoList} from './todoList';

function App() {
  return (
    <div className="app">
      <div className="container">
      <img src = {image} alt = "shopping" width = "250px"/>
      </div>
      <div className="container">
      <h1>Grocery List</h1>
      </div>
      <todoList/>
      <div className="container">
      <img src = {imageTwo} alt="man" width = "250px" />
      </div>
    </div>
    
  );
}

export default App;
