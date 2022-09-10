import React from 'react';
import { ButtonCalc } from '../components/ButtonCalc';
import { styles } from '../theme/calcTheme';
import { useCalculator } from '../hooks/useCalculator';


export const CalculadoraScreen  = () => {
    const {
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
    }=useCalculator();
    return (
        <div style={styles.calculadoraContainer}>
            {
                (numeroAnterior !== '0') && (
                    <p style={styles.resultadoPequeno}>{numeroAnterior}</p>
                )
            }
            <p 
                style={styles.resultado}
            >{numero}</p>

            <div style={styles.fila}>
                <ButtonCalc texto="C" color="#9b9b9b" accion={limpiar}/>
                <ButtonCalc texto="+/-" color="#9b9b9b" accion={positivoNegativo}/>
                <ButtonCalc texto="DEL" color="#9b9b9b" accion={btnDelete}/>
                <ButtonCalc texto="/" color="#ff9427" accion={btnDividir}/>
            </div>
            <div style={styles.fila}>
                <ButtonCalc texto="7" accion={armarNumero} />
                <ButtonCalc texto="8" accion={armarNumero} />
                <ButtonCalc texto="9" accion={armarNumero} />
                <ButtonCalc texto="x" color="#ff9427" accion={btnMultiplicar}/>
            </div>
            <div style={styles.fila}>
                <ButtonCalc texto="4" accion={armarNumero} />
                <ButtonCalc texto="5" accion={armarNumero} />
                <ButtonCalc texto="6" accion={armarNumero} />
                <ButtonCalc texto="-" color="#ff9427" accion={btnRestar}/>
            </div>
            <div style={styles.fila}>
                <ButtonCalc texto="1" accion={armarNumero} />
                <ButtonCalc texto="2" accion={armarNumero} />
                <ButtonCalc texto="3" accion={armarNumero} />
                <ButtonCalc texto="+" color="#ff9427" accion={btnSumar}/>
            </div>
            <div style={styles.fila}>
                <ButtonCalc texto="0" accion={armarNumero} ancho/>
                <ButtonCalc texto="." accion={armarNumero} />
                <ButtonCalc texto="=" color="#ff9427" accion={calcular}/>
            </div>
        </div>
    )
};