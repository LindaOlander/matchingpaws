import React from 'react';
import Start from './components/Views/Start/Start';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import GiveAway from './components/Views/GiveAway/GiveAway';
import DogPage from './components/DogPage/DogPage';
import Quiz from './components/Views/Quiz/Quiz';
import Adoptera from './components/Views/Adoptera/Adoptera';
import Om from './components/Views/Om/Om';
import './App.css';

function App() {

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Route path="/" exact="true" component={Start} />
      <Route path="/adoptera" exact="true" component={Adoptera} />
      <Route path="/adoptera/:id" component={DogPage} />
      <Route path="/adoptera-bort" exact="true" component={GiveAway} />
      <Route path="/quiz" exact="true" component={Quiz} />
      <Route path="/om" exact="true" component={Om} />
    </Router>
  );
}

export default App;