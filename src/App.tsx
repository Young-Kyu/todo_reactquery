import React from 'react';
import logo from './logo.svg';
import './App.css';
import Router from './Router';
import { StoreProvider } from './stores/StoreProvider';
import QueryProvider from './queries/queryProvider';

function App() {
  return (
    <StoreProvider>
      <QueryProvider>
        <Router />
      </QueryProvider>
    </StoreProvider>
  );
}

export default App;
