import { Route, Routes, Link } from 'react-router-dom';
import Setup from './pages/Setup/Setup';
import Generate from './pages/GenerateWallet/Generate';
import Existing from './pages/ExistingWallet/Existing';
import Transfer from './pages/Transfer/Transfer';
import Home from './pages/Home/Home';
import AlienLogo from './assets/alien_logo.png';

function App() {
  return (
    <div className="h-full w-full">
      <Link to="/">
        <img src={AlienLogo} className="h-20" alt="alien" />
      </Link>
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
