import React from 'react';
import ReactDOM from 'react-dom';
import Style from './Style.css';



const Tablefooter2 = () => {

    return (

       <div className="divfila2" >
         <h2 className="fila2">Nuevas clínicas</h2>
         <h4 className="fila2">clínica  Neiva</h4>
         <h4 className="fila2">clínica  Imbanaco</h4>
         <h4 className="fila2">clínica  Bello</h4>
         <h4 className="fila2">clínica  Tuluá</h4>
       </div>

    );

}
export default Tablefooter2;
ReactDOM.render(<Tablefooter2></Tablefooter2>, document.getElementById('Tablefooter2'));