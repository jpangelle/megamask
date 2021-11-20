import { useEffect } from 'react';
import {
  Route,
  Routes,
  Link,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import Setup from './pages/Setup/Setup';
import Generate from './pages/GenerateWallet/Generate';
import Existing from './pages/ExistingWallet/Existing';
import Home from './pages/Home/Home';
import './App.css';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (localStorage.getItem('murdamask-seed-phrase')) {
      navigate('/');
    } else {
      if (location.pathname.includes('setup')) {
        navigate(location.pathname);
      } else {
        navigate('setup');
      }
    }
  }, [location.pathname, navigate]);

  return (
    <div className="App">
      <Link to="/">MurdaMask</Link>
      <Routes>
        <Route path="setup">
          <Route path="" element={<Setup />} />
          <Route path="generate" element={<Generate />} />
          <Route path="existing" element={<Existing />} />
        </Route>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
