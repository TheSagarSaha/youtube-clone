import React from "react"

class SearchBar extends React.Component {

  state = { term: "" }
  
  handleChange = (event) => {
    this.setState({term: event.target.value})
  }
  onFormSubmit = (event) => {
    event.preventDefault()
    this.props.onFormSubmit(this.state.term) 
  }

  render() { 
    return (
      <div className="ui segment search-bar" style={{marginTop: "2%"}}>
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video search</label>
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
