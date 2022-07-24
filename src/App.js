import './App.css';
import Homepage from './pages/Homepage';
import NavBar from './components/NavBar';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './auth/firebase'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

function App() {
  const navigate = useNavigate();
  const [user, isLoading, error] = useAuthState(auth);

  useEffect(
    ()=>{
      if(isLoading){
        // render component loading
        return;
      }
      if(!user){
        navigate("/login");
      }
      if(error){
        console.log("Error: ", error);
      }
    },
    [user, isLoading, navigate]
  );
  return (
    <div className="App">
      <NavBar/>
      <Homepage />

    </div>
  );
}

export default App;
