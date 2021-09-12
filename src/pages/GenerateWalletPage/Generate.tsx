import React, {useState, useEffect} from 'react';
import './Generate.css';
import bip39 from 'bip39';

export default function Generate() {
    const [seedPhrase, setSeedPhrase] = useState([]);
    const [walletAddress, setWalletAddress] = useState('');

    const bip39 = require('bip39');


    useEffect(() => {
        const mnemonic = bip39.generateMnemonic()
        const seedSync = bip39.mnemonicToSeedSync().toString('hex');
        console.log(seedSync);
        console.log(mnemonic)
        setSeedPhrase(mnemonic);
        setWalletAddress(seedSync);
    }, [])

    return (
        <div>
           <h3>{walletAddress}</h3>
           <div className="seed-phrase">
               <p className="seed">{seedPhrase}</p>
           </div>
        </div>
    )
}
