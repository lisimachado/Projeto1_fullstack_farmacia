import React, { useState } from 'react';

export const ValorReais = () => {
  const [preco, setPreco] = useState('');

  function handlePriceChange(event) {
    const value = event.target.value;
    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
    const formattedPrice = formatter.format(value);
    setPreco(formattedPrice);
  }

}