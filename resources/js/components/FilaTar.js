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
import Style from './Style.css';

const useStyles = makeStyles({
    root: {
      maxWidth: 440,
    },
    media: {
      height: 200,
    },
  });

const FilaTar = () => {
    const classes = useStyles();


    return(
        <div className="t1" >
        <Card className="t11" className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/img/dien1.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography  className="titucard1" gutterBottom variant="h5" component="h2">
              Cirugia oral
            </Typography>
            <Typography className="texcard1" variant="body2" color="textSecondary" component="p">
            Los apoyos dentales alinean el icono Ejemplo del vector de la odontología 
            aislado en blanco Diseño del cui.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
      </div>
    );
    

}
export default FilaTar;
ReactDOM.render(<FilaTar> </FilaTar>, document.getElementById('FilaTar'));