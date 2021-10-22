
import React, {useState, useEffect} from 'react';
import './HomePage.css';

type Props = {
    privateKey: string;
  }

export default function HomePage({privateKey}: Props) {
    const [account, setAccount] = useState();

    console.log(privateKey);

    return (
        <div>
            <h1>{privateKey}</h1>
        </div>
    )

}
