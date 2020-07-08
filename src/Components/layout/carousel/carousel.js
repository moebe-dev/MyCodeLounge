import React from 'react';
import Carousel from 'react-material-ui-carousel';
import {Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      '& > *': {
        margin: theme.spacing(5),
        width: theme.spacing(150),
        height: theme.spacing(30),
        textAlign: "center",
      },
    },
  }));

export default function CarouseBanner(props){
    

    var items = [
        {
            name: "Random Name #1",
            description: "Hot topics generated here"
        },
        {
            name: "Random Name #2",
            description: "and here..."
        },
        {
            name: "Random Name #3",
            description: "and here..."
        },
        {
            name: "Random Name #4",
            description: "and here."
        }
    ]
 
    return (
        <Carousel>
            {
                props.news.map( item => <Item item={item} /> )
            }
        </Carousel>
    )
}
 
function Item(props){
const classes = useStyles();
    return (
        <div className={classes.root}>
        <Paper elevation={3}>
            <h2>{props.item.title}</h2>
            <p>{props.item.description}</p>
            <img src={props.item.image} alt={props.item.title} height="50px" width="50px"></img>
            <p>{props.item.link}</p>
        </Paper>
        </div>
    )
}
