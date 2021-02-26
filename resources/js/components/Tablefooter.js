import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Style from './Style.css';



const Tablefooter = () => {

    return (

       <div className="divfila1">
  
         <h2 className="fila1">Healthy teeth</h2>
         <h2 className="fila1">llamanos</h2>
         <h4 className="fila1">Barranquilla    018000 121 12</h4>
         <h4 className="fila1">Malanbo         018000 121 12</h4>
         <h4 className="fila1">Bogota          018000 121 12</h4>
       </div>

    );

}
export default Tablefooter;
ReactDOM.render(<Tablefooter></Tablefooter>, document.getElementById('Tablefooter'));

