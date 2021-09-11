import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import SetupPage from './pages/SetupPage/SetupPage';

function App() {
  return (
    <>
    <Switch>
      <div className="App">
        <Route exact path='/' render={() =>
        <SetupPage />
        }>
        </Route>
         
      </div>
    </Switch>
    </>
  )
}

export default App;
