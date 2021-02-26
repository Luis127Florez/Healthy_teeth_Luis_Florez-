import React from 'react';
import ReactDOM from 'react-dom';
import Navegacion from './components/Navegacion';

const Esqueleto  = () => {

    return (
       
        <div>
            <Navegacion Nombre ="luis"/>
        </div>
    );

}
 export default Esqueleto ;
 ReactDOM.render(<Esqueleto></Esqueleto> , document.getElementById('contenido'));