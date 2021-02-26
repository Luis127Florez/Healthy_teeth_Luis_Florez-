import React from 'react';
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Style from './Style.css';
import { CenterFocusStrong } from '@material-ui/icons';



const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const Form = () => {
    const classes = useStyles();
    return (
        <div className="formdiv" >
            <form className={classes.root} noValidate autoComplete="off">
                <div>
                <TextField id="outlined-search" label="Nombre" type="search" variant="outlined" />
                <TextField id="outlined-search" label="Apellido " type="search" variant="outlined" />
                <TextField id="outlined-search" label="Correo" type="search" variant="outlined" />
                   
                    <TextField id="outlined-search" label="Telefono" type="search" variant="outlined" />
                    <TextField
                        id="outlined-multiline-static"
                        label="Mensaje"
                        multiline
                        rows={4}
                        variant="outlined"
                    />
                </div>
                <Button  className="btnEn" variant="contained" color="primary">
        Enviar
      </Button>
            </form>

            

        </div>
    );


}
export default Form;
ReactDOM.render(<Form> </Form>, document.getElementById('Form'));
