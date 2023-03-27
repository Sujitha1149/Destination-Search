import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchResults = destinationsList.filter(eachList =>
      eachList.name.toLowerCase().includes(searchInput),
    )

    return (
      <div className="bg-container">
        <h1>Destination Search</h1>
        <div className="search-cont">
          <input
            type="search"
            placeholder="search"
            className="search"
            onChange={this.onSearchInput}
          />
          <div className="search-img-cont">
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              className="search-icon"
              alt="search icon"
            />
          </div>
        </div>
        <ul className="desti-items">
          {searchResults.map(eachList => (
            <DestinationItem key={eachList.id} destinationItem={eachList} />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
