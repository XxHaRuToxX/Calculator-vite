import { useRef, useState } from 'react';

export const useCalculator = () => {

    const [numeroAnterior, setNumeroAnterior] = useState('0');
    const [numero, setNumero] = useState('0');
    const ultimaOperacion = useRef();
    const nuevaMulti = useRef();

    const limpiar = () => {
        setNumero('0');
        setNumeroAnterior('0');
    }
    const armarNumero = (numeroTexto) => {
        /* no aceptar doble punto */
        if (numero.includes('.') && numeroTexto === '.') return;

        if (numero.startsWith('0') || numero.startsWith('-0')) {
            /* Punto decimal */
            if (numeroTexto === '.') {
                setNumero(numero + numeroTexto);
                /* Evaluar si hay otro cero, y hay un punto */
            } else if (numeroTexto === '0' && numero.includes('.')) {
                setNumero(numero + numeroTexto);
                /* Evaluar si es diferente de cero y no tiene punto */
            } else if (numeroTexto !== '0' && !numero.includes('.')) {
                setNumero(numeroTexto);
                /* Evitar 0000.0 */
            } else if (numeroTexto === '0' && !numero.includes('.')) {
                setNumero(numero)
            } else {
                setNumero(numero + numeroTexto);
            }

        } else {
            setNumero(numero + numeroTexto);
        }

    }
    const positivoNegativo = () => {
        if (numero.includes('-')) {
            setNumero(numero.replace('-', ''))
        } else {
            setNumero('-' + numero)
        }
    }

    const btnDelete = () => {
        let negativo = '';
        let numeroTemp = numero;
        if (numero.includes('-')) {
            negativo = '-';
            numeroTemp = numero.substr(1)
        }

        if (numeroTemp.length > 1) {
            setNumero(negativo + numeroTemp.slice(0, -1))
        } else {
            setNumero('0')
        }
    }

    const cambiarNumPorAnterior = () => {
        if (numero.endsWith('.')) {
            setNumeroAnterior(numero.slice(0, -1))
        } else {
            setNumeroAnterior(numero);
        }
        setNumero('0')
    }

    const btnDividir = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = "/";
    }
    const btnMultiplicar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = "*";
    }
    const btnRestar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = "-";
    }
    const btnSumar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = "+";
    }

    const calcular = () => {
        const num1 = Number(numero);
        const num2 = Number(numeroAnterior);

        switch (ultimaOperacion.current) {
            case "+":
                setNumero(`${num1 + num2}`)
                break;
            case "-":
                setNumero(`${num2 - num1}`)
                break;
            case "*":
                setNumero(`${num1 * num2}`)
                break;
            case "/":
                setNumero(`${num2 / num1}`)
                break;

            default:
                break;
        }
        setNumeroAnterior('0');
    }
    return {
        numero,
        numeroAnterior,
        limpiar,
        armarNumero,
        positivoNegativo,
        btnDelete,
        btnDividir,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular
    }
}