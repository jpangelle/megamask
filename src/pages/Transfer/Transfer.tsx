import { FormEvent, useState } from 'react';
import { ethers } from 'ethers';

const { REACT_APP_INFURA_PROJECT_ID, REACT_APP_INFURA_PROJECT_SECRET } =
  process.env;

export default function Transfer() {
  const [recipientAddress, setRecipientAddress] = useState('');
  const [amount, setAmount] = useState('');

  const send = async (event: FormEvent) => {
    event.preventDefault();
    const mnemonic = localStorage.getItem('murdamask-seed-phrase') || '';
    const wallet = ethers.Wallet.fromMnemonic(mnemonic);

    const provider = new ethers.providers.InfuraProvider('ropsten', {
      infura: {
        projectId: REACT_APP_INFURA_PROJECT_ID,
        projectSecret: REACT_APP_INFURA_PROJECT_SECRET,
      },
    });

    const gasPrice = await provider.getGasPrice();

    const tx = {
      from: wallet.address,
      to: recipientAddress,
      value: ethers.utils.parseEther(amount),
      nonce: await provider.getTransactionCount(wallet.address, 'latest'),
      gasLimit: ethers.utils.hexlify(21000),
      gasPrice,
    };

    const signedTransaction = await wallet.signTransaction(tx);
    await provider.sendTransaction(signedTransaction);
  };

  return (
    <div>
      <form onSubmit={send}>
        <input
          onChange={event => setRecipientAddress(event.target.value)}
          value={recipientAddress}
        />
        <input
          onChange={event => setAmount(event.target.value)}
          value={amount}
        />

        <button type="submit">Send</button>
      </form>
    </div>
  );
}
