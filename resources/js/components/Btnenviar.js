import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));


const Btnenviar = () => {
    const classes = useStyles();

    return (

        <div>
            <Button  className="btnEn" variant="contained" color="primary">
        Enviar
      </Button>

        </div>
    );

}
export default Btnenviar;







