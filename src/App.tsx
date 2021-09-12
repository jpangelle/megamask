import React from 'react';
import './App.css';
import {Switch, Route,Link} from 'react-router-dom';
import SetupPage from './pages/SetupPage/SetupPage';
import GeneratePage from './pages/GenerateWalletPage/Generate';
import ExistingPage from './pages/ExistingWalletPage/Existing';

function App() {
  return (
    <>
    <Switch>
      <div className="App">
        <Link to="/">MurdaMask</Link>
        <Route exact path='/' render={() =>
        <SetupPage />
        }>
        </Route>
        <Route exact path='/generate' render={() => 
        <GeneratePage />
        }>
        </Route>
         <Route exact path='/existing' render={() => 
        <ExistingPage />
        }>
         </Route>
      </div>
    </Switch>
    </>
  )
}

export default App;
