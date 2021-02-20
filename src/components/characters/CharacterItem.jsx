import React from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';
import RestaurantMenuOutlinedIcon from '@material-ui/icons/RestaurantMenuOutlined';
import { Link } from 'react-router-dom'
import './style.css'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '345!important',
    boxShadow: "0px 1px 4px 1px rgba(0, 230, 64, 1)",
    backgroundColor: 'black',
    color: 'green'
  },
  media: {
    height: 500,
    paddingTop: '56.25%', // 16:9
  },
  heading: {
    backgroundColor: 'black',
    color: 'rgb(17, 182, 17)'
  },
  button: {
    margin: theme.spacing(1),
    color: 'rgb(17, 182, 17)',
    '&:hover': {
      color: 'rgb(17, 182, 17)',
    }
  },


}));

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

export default function CharacterItem({ character }) {
  const classes = useStyles();

  return (
    <div className="imageFade">
    <Card className={classes.root}>


      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={character.img}
          title={character.name}
        />
      </CardActionArea>
      <CardContent className={classes.heading}>
        <ThemeProvider theme={theme}>
          <Button
            component={Link}
            to={`/character/${character.char_id}`}
            onClick={() =>  (window.scrollTo({
              top: 0,
              behavior: "smooth"
            }))}
            variant="outlined" color="primary" className={classes.button}
            startIcon={<RestaurantMenuOutlinedIcon />}
          >
            Let's Cook B***h
            
        </Button>
        </ThemeProvider>
      </CardContent>

    </Card >
    </div>
  );
}
