import React from "react"

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Please Search For a Video</div>;
  }

  const VideoSRC = "https://youtube.com/embed/" + video.id.videoId
  
  return (
    <div>
      <div className="ui embed" style={{borderRadius: "10px", boxShadow: "0px 0px 15px 1px rgb(16 16 16 / 46%)"}}>
        <iframe title="video player" src={VideoSRC}></iframe>
      </div>
      <div className="ui segment">
        <h3 className="ui header" style={{marginBottom: "2px"}}>{video.snippet.title}</h3>
        <h5 style={{marginTop: "8px"}}>{ video.snippet.channelTitle }</h5>
        <p>{video.snippet.description}</p>
      </div>
      
    </div>
  )
}

export default VideoDetail
