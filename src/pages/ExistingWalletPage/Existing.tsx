import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Existing.css';

type Props = {
  setPrivateKey: (privateKey: string) => void;
};

export default function Existing({ setPrivateKey }: Props) {
  const [recoveryProcess, setRecoveryProcess] = useState('');

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRecoveryProcess(event.target.value);
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setPrivateKey(event.target.value);
  };

  return (
    <div className="existing-page">
      <div className="dropdown-section">
        <select
          onChange={handleSelect}
          value={recoveryProcess}
          className="recovery-dropdown"
        >
          <option value="Select a Recovery Process" selected disabled>
            Select a Recovery Process
          </option>
          <option value="Seed Phrase">Seed Phrase</option>
          <option value="Private Key">Private Key</option>
        </select>
      </div>
      {recoveryProcess === 'Seed Phrase' ? (
        <div className="recovery-text">
          <textarea className="recovery-text"></textarea>
        </div>
      ) : (
        <div className="recovery-key">
          <input onChange={handleInput} className="recovery-key"></input>
          <Link to="/homepage" type="submit">
            Submit
          </Link>
        </div>
      )}
    </div>
  );
}
