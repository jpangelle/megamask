import React, { useState, useEffect } from 'react';
import './Generate.css';
import { ethers } from 'ethers';

export default function Generate() {
  const [seedPhrase, setSeedPhrase] = useState('');
  const [walletAddress, setWalletAddress] = useState('');

  useEffect(() => {
    const randomBytes = ethers.utils.randomBytes(32);
    const mnemonic = ethers.utils.entropyToMnemonic(randomBytes);
    const randomWallet = ethers.Wallet.fromMnemonic(mnemonic);
    console.log(mnemonic);
    console.log(randomWallet.address);
    setSeedPhrase(mnemonic);
    setWalletAddress(randomWallet.address);
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
