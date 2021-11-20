import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Existing.css';

export default function Existing() {
  const navigate = useNavigate();

  const [seedPhrase, setSeedPhrase] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    localStorage.setItem('murdamask-seed-phrase', seedPhrase);
    navigate('/home');
  };

  return (
    <div className="existing-page">
      <form onSubmit={handleSubmit}>
        <div className="recovery-text">
          <textarea
            className="recovery-text"
            onChange={event => setSeedPhrase(event.target.value)}
            value={seedPhrase}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
