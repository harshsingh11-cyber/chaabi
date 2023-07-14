import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Nav from './component/Home/Nav';


function App() {
  return (
    <div className="App">
      <div className="app-1">
        <Nav />
      </div>
      <div className="app-2">
        <Header />
        <Home/>
      </div>


    </div>
  );
}

export default App;
