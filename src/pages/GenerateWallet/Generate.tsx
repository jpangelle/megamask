import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import './Generate.css';

export default function Generate() {
  const [seedPhrase, setSeedPhrase] = useState('');
  const [walletAddress, setWalletAddress] = useState('');

  useEffect(() => {
    const randomBytes = ethers.utils.randomBytes(32);
    const mnemonic = ethers.utils.entropyToMnemonic(randomBytes);
    const wallet = ethers.Wallet.fromMnemonic(mnemonic);
    setSeedPhrase(mnemonic);
    setWalletAddress(wallet.address);
    localStorage.setItem('murdamask-seed-phrase', mnemonic);
  }, []);

  return (
    <div>
      <h3>{walletAddress}</h3>
      <div className="seed-phrase">
        <p className="seed">{seedPhrase}</p>
      </div>
    </div>
  );
}
