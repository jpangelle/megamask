import { Route, Routes, Link } from 'react-router-dom';
import Setup from './pages/Setup/Setup';
import Generate from './pages/GenerateWallet/Generate';
import Existing from './pages/ExistingWallet/Existing';
import Transfer from './pages/Transfer/Transfer';
import Home from './pages/Home/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Link to="/">MurdaMask</Link>
      <Routes>
        <Route path="setup">
          <Route path="" element={<Setup />} />
          <Route path="generate" element={<Generate />} />
          <Route path="existing" element={<Existing />} />
        </Route>
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
