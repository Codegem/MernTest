import React from "react";
import useStyles from "./styles";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAltSharp";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";
import { setCurrentId } from "../../../redux/actions/globalActions";
import { deletePost, likePost } from "../../../redux/actions/postsActions";

const Post = ({ post }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const likeHandler = (id) => {
    dispatch(likePost(id));
  };

  const idSetter = (id) => {
    dispatch(setCurrentId(id));
  };

  return (
    <Card className={classes.card}>
      <CardMedia
        component="div"
        className={classes.media}
        image={post.selectedFile}
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => idSetter(post)}
        >
          <MoreHorizIcon fontSize="medium" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {post?.tags?.map((tag) => `#${tag}`)}
        </Typography>
      </div>
      <Typography variant="h5" className={classes.title} gutterBottom>
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => likeHandler(post._id)}
        >
          <ThumbUpAltIcon fontSize="small" />
          &nbsp;Like&nbsp;
          {post.likeCount > 0 && <span>{post.likeCount}</span>}
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(deletePost(post._id))}
        >
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
