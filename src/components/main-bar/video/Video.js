import React from "react";
import ReactPlayer from "react-player";


class Video extends React.Component {
  state = {
    'playingVideo': false
  }
  playVideo() {

    this.setState({ 'playingVideo': true })
  }

  pauseVideo() {
    this.refs.vidRef.getInternalPlayer().pauseVideo()
  } render() {
    return (
      <div>
        <ReactPlayer
          url={this.props.src}
          width="100%"
          pip={true}
          ref="vidRef"
          controls={true}
          playing={this.state.playingVideo}
        ></ReactPlayer>
      </div>
    );
  }
}

export default Video