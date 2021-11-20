import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import axios from 'axios';
import './Home.css';

const etherscanAPI = process.env.REACT_APP_ETHERSCAN_API;

export default function Home() {
  const [account, setAccount] = useState<any>({});

  useEffect(() => {
    const mnemonic = localStorage.getItem('murdamask-seed-phrase');
    if (mnemonic) {
      const { address } = ethers.Wallet.fromMnemonic(mnemonic);

      (async () => {
        const { data } = await axios.get(
          `http://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${etherscanAPI}`,
        );

        setAccount(data);
      })();
    }
  }, []);

  return (
    <div>
      <h1>{account?.status}</h1>
    </div>
  );
}
