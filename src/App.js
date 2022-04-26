import React from 'react';
//import {MDBFooter} from 'mdb-react-ui-kit';
import './App.css';
import Footer from './components/footer';
//import Home from './components/Home';
import NavBar from './components/NavBar';
//import Explore from './components/Explore';
import { ThemeProvider } from '@mui/material/styles';


import { useState } from 'react';

export const useDarkMode = () => {
    const [ theme, setTheme ] = useState('dark');

    const toggleTheme = ()  => {
        theme === 'dark' ? setTheme('light') : setTheme('dark');
    }

    return [ theme, toggleTheme];
}
function App() {
  return (

    <ThemeProvider theme={useDarkMode}>
      
    <div className="App">
      <NavBar />
      <div className="welcomeHome">
      
      </div>
      <Footer />
    </div>
    </ThemeProvider>
  );
}

export default App;
