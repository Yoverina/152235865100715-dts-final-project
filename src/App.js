import './App.css';
import Homepage from './pages/Homepage';
import NavBar from './components/NavBar';

import { Provider } from 'react-redux'
import store from './app/store'
import { ThemeProvider } from '@mui/material';
import theme from './styles/theme'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <NavBar/>
          <Homepage />
        </div>
      </ThemeProvider>
    </Provider>
    
  );
}

export default App;
