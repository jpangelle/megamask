import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import BigNumber from 'bignumber.js';
import './Home.css';

const { REACT_APP_INFURA_PROJECT_ID, REACT_APP_INFURA_PROJECT_SECRET } =
  process.env;

export default function Home() {
  const navigate = useNavigate();

  const [balance, setBalance] = useState('');

  useEffect(() => {
    const mnemonic = localStorage.getItem('murdamask-seed-phrase');
    if (mnemonic) {
      const { address } = ethers.Wallet.fromMnemonic(mnemonic);

      (async () => {
        const provider = new ethers.providers.InfuraProvider('ropsten', {
          infura: {
            projectId: REACT_APP_INFURA_PROJECT_ID,
            projectSecret: REACT_APP_INFURA_PROJECT_SECRET,
          },
        });
        const response = await provider.getBalance(address);

        const formattedBalance = new BigNumber(response.toString())
          .dividedBy(10 ** 18)
          .toString();

        setBalance(formattedBalance);
      })();
    }
  }, []);

  return (
    <div>
      <h1>{balance}</h1>
      <button onClick={() => navigate('transfer')}>Transfer</button>
    </div>
  );
}
