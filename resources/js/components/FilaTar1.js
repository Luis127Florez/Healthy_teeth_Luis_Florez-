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

const FilaTar1 = () => {
    const classes = useStyles();


    return(
        <div  className="t2" >
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/img/dien2.png"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography className="titucard2"  gutterBottom variant="h5" component="h2">
              Cuidado Oral 
            </Typography>
            <Typography className="texcard2" variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
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
export default FilaTar1;
ReactDOM.render(<FilaTar1> </FilaTar1>, document.getElementById('FilaTar1'));