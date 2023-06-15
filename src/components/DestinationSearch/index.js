// Write your code here
import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state

    const {destinationList} = this.props

    const searchResults = destinationList.filter(each =>
      each.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="destinations-search-container">
          <h1 className="heading">Destination Search</h1>
          <div className="search-input-container">
            <input
              className="search-input"
              type="search"
              placeholder="Search"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
          <ul className="destination-list">
            {searchResults.map(each => (
              <DestinationItem key={each.id} destinationDetails={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
