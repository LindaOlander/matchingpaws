import React from 'react';
import Start from './components/Views/Start/Start';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DogPage from './components/DogPage/DogPage';
import Quiz from './components/Views/Quiz/Quiz';
import Adoptera from './components/Views/Adoptera/Adoptera';
import Om from './components/Views/Om/Om';
import Omplacera from './components/Views/Omplacera/Omplacera';
import Hundlivet from './components/Views/Hundlivet/Hundlivet';
import './App.css';
import DogList from './components/DogList/DogList';

function App() {

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Route path="/" exact component={Start} />
      <Route path="/adoptera" exact component={Adoptera} />
      <Route path="/adoptera/:id" component={DogPage} />
      <Route path="/omplacera" exact component={Omplacera} />
      <Route path="/hund" exact component={Hundlivet} />
      <Route path="/om" exact component={Om} />
      <Route path="/hundar" exact component={DogList} />
    </Router>
  );
}

export default App;