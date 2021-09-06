import React, { useState, useEffect } from "react";

import "./Posts.css";
import { connect } from "react-redux";
import Video from ".././video/Video.js";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { Button } from "@material-ui/core";
import ModeCommentIcon from "@material-ui/icons/ModeComment";
import { getNumDays } from '../../util/util.js';
import ShareIcon from "@material-ui/icons/Share";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import {
     updateDownComment
    , updateUpComment, getSelectedPost
} from '../../../redux/action/fetchAction';

const SinglePost = React.memo(
    ({
        updateDownComment,
        getSelectedPost,
        selectedDPost,
        updateUpComment, post123 }) => {

        const [postSelected, setPostSelected] = useState(undefined);
        const upVoteComment = (postId) => {
            updateUpComment(postId);
        };

        useEffect(() => {
            getSelectedPost(post123);
        }, [post123]);

        useEffect(() => {
            setPostSelected(selectedDPost);
        }, [selectedDPost]);


        const downVoteComment = (postId) => {
            updateDownComment(postId);
        };

        const renderContent = (postSelected) => {
            return <div className="post">
                <div className="post-sidebar">
                    <Button onClick=
                        {() => upVoteComment(postSelected.id)}
                    >
                        <ArrowUpwardIcon className="upvote" />
                    </Button>
                    <span>{postSelected.ups - postSelected.downs}</span>
                    <Button onClick=
                        {() => downVoteComment(postSelected.id)}
                    >
                        <ArrowDownwardIcon className="downvote" />
                    </Button>
                </div>
                <div className="post-title">
                    <span className="subreddit-name">{postSelected.subreddit_name_prefixed}</span>
                    <span className="post-user">Posted by</span>
                    <span className="post-user underline">u/{postSelected.author_fullname}</span>
                    <span className="post-user">{getNumDays(postSelected.created_utc)} days ago</span>
                    <div className="spacer"></div>
                </div>
                <div className="post-body">
                    <span className="title">{postSelected.title}</span>
                    {((postSelected.media !== undefined) && (postSelected.media?.reddit_video !== undefined) && (postSelected.media?.reddit_video.fallback_url !== undefined)) ?
                        <Video src={postSelected.media?.reddit_video?.fallback_url} duration={postSelected.media?.reddit_video?.duration} />
                        : null}
                </div>
                <div className="post-footer">
                    <div className="comments footer-action">
                        <ModeCommentIcon className="comment-icon" />
                        <span>{postSelected.num_comments} Comments</span>
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
        }
        return (
            <div className="posts-wrapper">
                {postSelected ? renderContent(postSelected) : null}
            </div>
        );
    }

);
const mapStateToProps = state => ({
    postDataReducer: state.fetchReducer.posts,
    upVoted: state.fetchReducer.isUpVoted,
    downVoted: state.fetchReducer.idDownVoted,
    selectedDPost: state.fetchReducer.selectedDPost
})


const mapDispatchToProps = (dispatch,) => {
    return {
        updateDownComment: (postId) => dispatch(updateDownComment(postId)),
        updateUpComment: (postId) => dispatch(updateUpComment(postId)),
        getSelectedPost: (postId) => dispatch(getSelectedPost(postId))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SinglePost);

