import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DivTras from './DivTras';
import Style from './Style.css';


const useStyles = makeStyles({
    root: {
        maxWidth: 1300,
    },
    media: {
        height: 480,
    },
});

const Tarjeta = () => {
    const classes = useStyles();

    return (
        
        
        <div> 
            <center>
                <div>
                    <br>
                    </br>
                </div>
            <Card className={classes.root}>
                <CardActionArea>
                
                    <CardMedia
                        className={classes.media}
                        image="/img/lean.jpg"   
                    /> 
                    <center>
                    <DivTras/>
                    </center>
                    <DivTras/>
                    <CardContent>
                       <br>
                       </br> 
                        <Typography className="titucard" gutterBottom variant="h5" component="h2">
                            Diseño de Sonrisa 
          </Typography>
                        <Typography className="texcard" variant="body2" color="textSecondary" component="p">
                
          </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        
        </Button>
                    <Button size="small" color="primary">
                       
        </Button>
                </CardActions>
            </Card>
            </center>

            
        </div>

        
    );

}
export default Tarjeta;
ReactDOM.render(<Tarjeta> </Tarjeta>, document.getElementById('Tarjeta'));