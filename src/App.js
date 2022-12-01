import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from './assets/theme';
import RoutPage from './route';
import { store } from './redux-saga/store';
/**
 *
 * @returns {React.ReactElement} -- returns the screens
 */
const App = () => {
  return (
    <ThemeProvider theme={theme} store={store}>
      <div>
        <RoutPage />
      </div>
    </ThemeProvider>
  );
};

export default App;
