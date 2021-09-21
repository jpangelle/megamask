import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Switch, Route, Link } from 'react-router-dom';
import SetupPage from './pages/SetupPage/SetupPage';
import GeneratePage from './pages/GenerateWalletPage/Generate';
import ExistingPage from './pages/ExistingWalletPage/Existing';
import HomePage from './pages/HomePage/HomePage';
import './App.css';

const etherscanAPI = process.env.REACT_APP_ETHERSCAN_API;

function App() {
  const [account, setAccount] = useState([]);
  const [privateKey, setPrivateKey] = useState('');

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `http://api.etherscan.io/api?module=account&action=txlist&address=${privateKey}&startblock=0&endblock=99999999&sort=asc&apikey=${etherscanAPI}`,
      );
      setAccount(data);
    })();
  }, [privateKey]);

  return (
    <Switch>
      <div className="App">
        <Link to="/">MurdaMask</Link>
        <Route exact path="/" render={() => <SetupPage />} />
        <Route exact path="/generate" render={() => <GeneratePage />} />
        <Route
          exact
          path="/existing"
          render={() => <ExistingPage setPrivateKey={setPrivateKey} />}
        />
        <Route
          exact
          path="/homepage"
          render={() => <HomePage privateKey={privateKey} />}
        />
      </div>
    </Switch>
  );
}

export default App;
