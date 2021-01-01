import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({

  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
// custom style
const imgStyle={
    width:'40px',
    height:'40px'
}
const marginLeft={
    marginLeft:'90px'
} 
  return (
    <Card style={{margin:'20px auto'}} className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="Post" className={classes.avatar}>
            {/* User image */}
            <img style={imgStyle} src={props.img} alt=""/>
          </Avatar>
        }
        action={
          <IconButton color='secondary' aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        // user-name here
        title={props.name}
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        <h5>{props.title} </h5>
        {props.body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton color='secondary' aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton color='secondary' aria-label="share">
          <ShareIcon />
        </IconButton>
        {/* show Details */}
        <Link style={{textDecoration:'none'}} to={`/postDetails/${props.id}`}>
        {
          props.showBtn && <Button style={marginLeft} variant="outlined" color="secondary">
            Show Details
            </Button>
        }
        </Link>
      </CardActions>
    </Card>
  );
}
