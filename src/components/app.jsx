import React from "react"
import Search from "./searchbar"
import Youtube from "../apis/yt"
import VideoList from "./videoList"
import VideoDetail from "./videoDetail"

class App extends React.Component {

  state = { videos: [], selectedVideo: null }

  onTermSubmit = async (term) => {
    const response = await Youtube.get("/search", {
      params: {
        q: term
      }
    })
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    })
  }

  onVideoSelect = (video) => {
    this.setState({selectedVideo: video})
  }

  render() {
    return (
      <div className="ui container">
        <Search onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
