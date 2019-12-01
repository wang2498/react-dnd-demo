import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import BaseLayout from './layouts';
import Home from './pages/Home'
import './App.css';

function App() {
  return (
    <Router >
      <BaseLayout>
        <Route path='/' component={Home}>
        </Route>
      </BaseLayout>
    </Router>

  );
}

export default App;
