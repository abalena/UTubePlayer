import React from 'react';

export default class SearchBar extends React.Component{
  constructor(props){
    super(props)
    this.state = {search: ''}
  }

  handleChange = (event) => {
    this.setState({search: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleSubmit(this.state.search);
  }

  render(){
    return(
      <div className="SearchBar">
        <label>Video Search</label>
        <form onSubmit={this.handleSubmit}>
          <input
              onChange={this.handleChange}
              name='video-search'
              type='text'
              value={this.state.search}
              placeholder="Enter request "
           />
           <button onClick={this.handleSubmit}>OK</button>
         </form>
      </div>
    )
  }
}
