import React, { useRef, useState, useEffect, useCallback } from "react";

import "./Posts.css";
import { connect } from "react-redux";
import Video from ".././video/Video.js";
import ModalPost from ".././ModalPost.js";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { Button } from "@material-ui/core";
import ModeCommentIcon from "@material-ui/icons/ModeComment";
import ShareIcon from "@material-ui/icons/Share";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import {
  loadData, updateDownComment
  , updateUpComment
} from '../../../redux/action/fetchAction';

import { getNumDays } from '../../util/util.js';
import HeaderBar from ".././subreddit/headerBar";

const Posts = React.memo(
  ({ loadData,
    postDataReducer,
    upVoted,
    downVoted,
    updateDownComment,
    isSortedBy,
    updateUpComment }) => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [postClicked, setPostClicked] = useState(undefined);
    const [postData, setPostData] = useState([]);

// infinite scrolling
    // const [query, setQuery] = useState("");
    // const [page, setPage] = useState(1);
    // const { loading, error, list } = useFetch(query, page);
    // const loader = useRef(null);
    // const handleChange = (e) => {
    //   setQuery(e.target.value);
    // };
    // const handleObserver = useCallback((entries) => {
    //   const target = entries[0];
    //   if (target.isIntersecting) {
    //     setPage((prev) => prev + 1);
    //   }
    // }, []);
    // useEffect(() => {
    //   const option = {
    //     root: null,
    //     rootMargin: "20px",
    //     threshold: 0
    //   };
    //   const observer = new IntersectionObserver(handleObserver, option);
    //   if (loader.current) observer.observe(loader.current);
    // }, [handleObserver]);



    useEffect(() => {
      loadData();
    }, []);

    useEffect(() => {
      setPostData(postDataReducer);
    }, [postDataReducer]);
    useEffect(() => {
      setPostData(postDataReducer);
    }, [upVoted]);
    useEffect(() => {
      setPostData(postDataReducer);
    }, [isSortedBy]);

    useEffect(() => {
      setPostData(postDataReducer);
    }, [downVoted]);


    const openCloseDialog = (post) => {
      setDialogOpen(true);
      setPostClicked(post);
    };

    const closeDialog = () => {
      setDialogOpen(false);
      setPostClicked(undefined);
    };

    const upVoteComment = (postId) => {
      updateUpComment(postId);
    };

    const downVoteComment = (postId) => {
      updateDownComment(postId);
    };
    return (

      <div className="posts-wrapper">
        <HeaderBar />
        {postData?.map((post, index) => (
          <div className="post">
            <div className="post-sidebar">
              <Button onClick=
                {() => upVoteComment(post.data.id)}
              >
                <ArrowUpwardIcon className="upvote" />
              </Button>
              <span>{post.data.ups - post.data.downs}</span>
              <Button onClick=
                {() => downVoteComment(post.data.id)}
              >
                <ArrowDownwardIcon className="downvote" />
              </Button>
            </div>
            <div className="post-title">
              <span className="subreddit-name">{post.data.subreddit}</span>
              <span className="post-user">Posted by</span>
              <span className="post-user underline">u/{post.data.author_fullname}</span>
              <span className="post-user">{getNumDays(post.data.created_utc)} days ago</span>
              <div className="spacer"></div>
              <Button label="+ JOIN" />
            </div>
            <div className="post-body">
              <Button onClick=
                {() => openCloseDialog(post.data)}
              >
                <span className="title">{post.data.title}</span>
              </Button>
              {((post.data.media !== undefined) && (post.data.media?.reddit_video !== undefined) && (post.data.media?.reddit_video.fallback_url !== undefined)) ?
                <Video src={post.data.media?.reddit_video?.fallback_url} duration={post.data.media?.reddit_video?.duration} />
                : null}
            </div>
            <div className="post-footer">
              <div className="comments footer-action">
                <ModeCommentIcon className="comment-icon" />
                <span>{post.data.num_comments} Comments</span>
              </div>
              <div className="share footer-action">
                <ShareIcon />
                <span>Share</span>
              </div>
              <div className="save footer-action">
                <BookmarkIcon />
                <span>Save</span>
              </div>
              <MoreHorizIcon className="more-icon footer-action" />
            </div>

          </div>
        ))}
        {dialogOpen ? <ModalPost closeDialog1={closeDialog}
          post1={postClicked} diaOpen={dialogOpen} up /> : null}
      </div>
    );
  }

);
const mapStateToProps = state => ({
  postDataReducer: state.fetchReducer.posts,
  upVoted: state.fetchReducer.isUpVoted,
  downVoted: state.fetchReducer.idDownVoted,
  isSortedBy: state.fetchReducer.isSorted
})


const mapDispatchToProps = (dispatch,) => {
  return {
    loadData: () => dispatch(loadData()),
    updateDownComment: (postId) => dispatch(updateDownComment(postId)),
    updateUpComment: (postId) => dispatch(updateUpComment(postId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);

