import {Component} from 'react'
import './index.css'

class DestinationItem extends Component {
  render() {
    const {destinationItem} = this.props
    const {name, imgUrl} = destinationItem
    return (
      <li className="destination-card">
        <img src={imgUrl} className="desti-image" alt={name} />
        <p>{name}</p>
      </li>
    )
  }
}
export default DestinationItem
