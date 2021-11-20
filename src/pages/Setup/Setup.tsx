import './Setup.css';
import { Link } from 'react-router-dom';

export default function Setup() {
  return (
    <div className="setup-page">
      <h1>MurdaMask</h1>
      <div className="setup-btn">
        <Link to="generate" className="setup-btn">
          Generate New Wallet
        </Link>
        <br></br>
        <br></br>
      </div>
      <div className="setup-btn">
        <Link to="existing" className="setup-btn">
          Add Existing
        </Link>
      </div>
    </div>
  );
}
