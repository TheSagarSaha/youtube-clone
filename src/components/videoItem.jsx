import React from "react"
import "./videoItem.css"

const VideoItem = ({video, onVideoSelect}) => {
  return (
    <div className="item video-item" onClick={() => onVideoSelect(video)}>
      <img
        style={{borderRadius: "5px"}}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <div className="header">
          { video.snippet.title }
          <p style={{marginTop: "10px"}}>{ video.snippet.channelTitle }</p>
        </div>
      </div>
    </div>
  )
}

export default VideoItem
