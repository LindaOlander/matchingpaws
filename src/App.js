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
import { initGA } from '../src/components/Tracking/index';
import { createBrowserHistory } from 'history';
import withTracker from './withTracker';
import Solskenshistorier from './components/Views/Solskenshistorier/Solskenshistorier';
import SolskenshistoriaPage from './components/Solskenshistorier/SolskenshistoriaPage';
import Admin from './components/Views/Admin/Admin';
import './App.css';

function App() {

  const history = createBrowserHistory();
  useEffect(() => { initGA(); }, []);

  return (
    <HashRouter basename={process.env.PUBLIC_URL} history={history}>
      <Route path="/" exact component={withTracker(Start)} />
      <Route path="/adoptera" exact component={Adoptera} />
      <Route path="/adoptera/:id" component={DogPage} />
      <Route path="/omplacera" exact component={Omplacera} />
      <Route path="/adoptionsprocessen" exact component={Adoptionsprocessen} />
      <Route path="/solskenshistorier" exact component={Solskenshistorier} />
      <Route exact path="/solskenshistorier/:id" component={SolskenshistoriaPage} />
      <Route path="/hundlivet" exact component={Hundlivet} />
      <Route path="/om" exact component={Om} />
      <Route path="/admin" exact component={Admin} />
      {/* <Route path="/resultat" exact render={(props) => <Adoptionsresultat {...props} />} /> */}
      {/* <Route path="/resultat" exact component={Adoptionsresultat} /> */}
      {/* <Route path="/laggtill" exact component={AddDogs} /> */}
    </HashRouter>
  );
}

export default App;