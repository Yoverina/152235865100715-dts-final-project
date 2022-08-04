import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProtectedComponent from './components/ProtectedComponent';
import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux'
import store from './app/store'
import theme from './styles/theme'
import CountryDetails from './pages/CountryDetails';
import NotFound from './pages/NotFound';
import ListAllCountry from './pages/ListAllCountry';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<ProtectedComponent loginOnly={false}><App/></ProtectedComponent>}/>
                <Route path='login' element={<ProtectedComponent loginOnly={false}><LoginPage/></ProtectedComponent>}/>
                <Route path='register' element={<ProtectedComponent loginOnly={false}><RegisterPage/></ProtectedComponent>}/>
                <Route path='list-all-country/' element={<ProtectedComponent><ListAllCountry/></ProtectedComponent>}/>
                <Route path='country-details/:country' element={<ProtectedComponent><CountryDetails/></ProtectedComponent>}/>
                <Route path="*" element={<NotFound/>} />
              </Routes>
            </BrowserRouter>
          </ThemeProvider>
        </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
