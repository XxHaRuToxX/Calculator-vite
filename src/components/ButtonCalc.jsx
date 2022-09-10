import React from 'react';
import { styles } from '../theme/calcTheme';

export const ButtonCalc = ({texto, color='#2d2d2d', ancho=false, accion}) => {
    return (
        <button
            onClick={()=>accion(texto)}
            style={{
                display: 'flex',
                justifyContent:'center',
                alignItems:'center',
                textAlign:'center',
                margin: 5,
                maxWidth: '100%'
            }}
        >
            <div 
                style={{
                    ...styles.boton, 
                    backgroundColor:color,
                    width: (ancho) ? 200 : 80,
                    
                }}          
            >
                <p style={{
                    ...styles.botonTexto, 
                    color : (color === '#9b9b9b') ? 'black' : 'white',
                }} 
                >{texto}</p>
            </div>
        </button>
    )
}
