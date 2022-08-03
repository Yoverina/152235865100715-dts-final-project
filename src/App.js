import './App.css';
import Homepage from './pages/Homepage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Homepage />
      <Footer/>
    </div>
    
  );
}

export default App;
