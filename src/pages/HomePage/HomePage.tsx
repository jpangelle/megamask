import React from 'react';
import './HomePage.css';

type Props = {
  privateKey: string;
};

export default function HomePage({ privateKey }: Props) {
  return (
    <div>
      <h1>{privateKey}</h1>
    </div>
  );
}
