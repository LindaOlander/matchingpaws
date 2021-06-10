import React, { useEffect } from 'react';
import Start from './components/Views/Start/Start';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import DogPage from './components/DogPage/DogPage';
import AddDogs from './components/AddDogs/AddDogs';
import Adoptera from './components/Views/Adoptera/Adoptera';
import Adoptionsresultat from './components/Views/Adoptionsresultat/Adoptionsresultat';
import Om from './components/Views/Om/Om';
import Omplacera from './components/Views/Omplacera/Omplacera';
import Hundlivet from './components/Views/Hundlivet/Hundlivet';
import Adoptionsprocessen from './components/Views/Adoptionsprocessen/Adoptionsprocessen';
import DogList from './components/DogList/DogList';
import { PageView, initGA } from '../src/components/Tracking/index';
import './App.css';
import AllDogsList from './components/DogList/AllDogsList';

function App() {

  useEffect(() => {
    initGA('G-SH3XSQV8Z7');
    PageView();
  })

  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Route path="/" exact component={Start} />
      <Route path="/adoptera" exact component={Adoptera} />
      <Route path="/resultat" exact component={Adoptionsresultat} />
      <Route path="/adoptera/:id" component={DogPage} />
      <Route path="/omplacera" exact component={Omplacera} />
      <Route path="/laggtill" exact component={AddDogs} />
      <Route path="/adoptionsprocessen" exact component={Adoptionsprocessen} />
      <Route path="/hund" exact component={Hundlivet} />
      <Route path="/om" exact component={Om} />
      <Route path="/hundar" exact component={AllDogsList} />
    </HashRouter>
  );
}

export default App;