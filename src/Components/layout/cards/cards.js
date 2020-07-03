import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import API from "../../../utils/API";
import ReactPlayer from 'react-player'

const useStyles = makeStyles((theme) => ({
  
  root: {
    maxHeight:450,
    width: 220,
    marginLeft: 15,
    // minHeight: "265px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "spaceBetween",
    // position: "relative",
  },
  title:{
    color: "red",
    height: "20%",
  },
  media: {
    height: "50%",
    paddingTop: '55.25%', // 16:9
  },
  mediaVideo: {
    height: "50%"
  },
  actions:{
// position:"absolute",
// bottom: 0,
// width: "100%",
  },
cardContent:{
overflow: "auto"
},
  expand: {
    
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    
    transform: 'rotate(180deg)',
  },
  
}));


export default function MainCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const saveToUserProfile = (props) => {
    const { user, type, title, description, image, link } = props;
    const data = {
      title: title,
      description: description,
      image: image,
      link: link
    }
    API.saveToUser(user, type, data)
       .catch(err => console.log(err));
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.title}
        title={<a className={classes.title} href={props.type === "videos" ? "https://www.youtube.com/watch?v=" + props.link : props.link}>{props.title}</a>}
      />
      <CardMedia className={props.type === "videos" ? classes.mediaVideo : classes.media} image={props.type === "videos" ? "" : props.image} >
        {props.type === "videos" ? <ReactPlayer url={"https://www.youtube.com/watch?v=" + props.link} width='225px' height='150px'/> : <div></div> }
      </CardMedia>
      
      <CardActions className= {classes.actions} disableSpacing>
        
        <IconButton aria-label="add to favorites" onClick={() => saveToUserProfile(props)} style={{color:"#F01202"}}> 
          <FavoriteIcon />
        </IconButton>
        
        <IconButton aria-label="share" href={props.link}>
          <ShareIcon/>
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit className= {classes.cardContent}>
        <CardContent >
          {/* <Typography paragraph> */}
            {props.description}
          {/* </Typography> */}
        </CardContent>
      </Collapse>
    </Card>
  );
}