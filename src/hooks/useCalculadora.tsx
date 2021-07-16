import {useRef, useState} from 'react';

enum Operadores {
  sumar,
  restar,
  multiplicar,
  dividir,
}

export const useCalculadora = () => {
  const [numeroAnterior, setNumeroAnterior] = useState('0');
  const [numero, setNumero] = useState('0');

  const ultimaOperacion = useRef<Operadores>();
  const limpiar = () => {
    setNumero('0');
    setNumeroAnterior('0');
  };

  const armarNumero = (numeroTexto: string) => {
    // verificarr si existe un ounto decimal?

    if (numero.includes('.') && numeroTexto === '.') {
      return;
    }

    if (numero.startsWith('0') || numero.startsWith('-0')) {
      if (numeroTexto === '.') {
        setNumero(numero + numeroTexto);
      } else if (numeroTexto === '0' && numero.includes('.')) {
        setNumero(numero + numeroTexto);
      } else if (numeroTexto !== '0' && !numero.includes('.')) {
        setNumero(numeroTexto);
      } else if (numeroTexto === '0' && !numero.includes('.')) {
        setNumero(numero);
      } else {
        setNumero(numero + numeroTexto);
      }
      return;
    } else {
      setNumero(numero + numeroTexto);
    }
  };

  const btnDelete = () => {
    if (numero.length === 1) {
      limpiar();
    } else if (numero.length === 2 && numero.includes('-')) {
      limpiar();
    } else {
      setNumero(numero.substr(0, numero.length - 1));
    }
  };

  const positivoNegativo = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero);
    }
  };

  const cambiarNumerPorAnterior = () => {
    if (numero.endsWith('.')) {
      setNumeroAnterior(numero.slice(0, -1));
    } else {
      setNumeroAnterior(numero);
    }
    setNumero('0');
  };

  const btnDividir = () => {
    cambiarNumerPorAnterior();
    ultimaOperacion.current = Operadores.dividir;
  };

  const btnMultiplicar = () => {
    cambiarNumerPorAnterior();
    ultimaOperacion.current = Operadores.multiplicar;
  };

  const btnRestar = () => {
    cambiarNumerPorAnterior();
    ultimaOperacion.current = Operadores.restar;
  };

  const btnSumar = () => {
    cambiarNumerPorAnterior();
    ultimaOperacion.current = Operadores.sumar;
  };

  const calcular = () => {
    const num1 = Number(numero);
    const num2 = Number(numeroAnterior);

    switch (ultimaOperacion.current) {
      case Operadores.sumar:
        setNumero(`${num1 + num2}`);
        break;
      case Operadores.restar:
        setNumero(`${num2 - num1}`);
        break;
      case Operadores.multiplicar:
        setNumero(`${num1 * num2}`);
        break;
      case Operadores.dividir:
        setNumero(`${num2 / num1}`);
        break;
      default:
        break;
    }
    setNumeroAnterior('0');
  };
  return {
    armarNumero,
    btnDelete,
    positivoNegativo,
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular,
    numeroAnterior,
    numero,
    limpiar,
  };
};
