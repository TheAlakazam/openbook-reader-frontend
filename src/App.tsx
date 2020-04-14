import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import ProtectedRoute from './components/ProtectedRoute';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginPage}/>
        <Route exact path="/register" component={RegistrationPage}/>
        <ProtectedRoute>
          <Route path="/home" component={HomePage}/>
          <Route exact path="/" component={HomePage}/>
        </ProtectedRoute>
      </Switch>
    </Router>
  );
}

export default App;
