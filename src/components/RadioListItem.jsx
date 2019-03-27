import React, { Component } from 'react';
import './RadioListItem.css';

class RadioListItem extends Component {

  render() {
    return (
      <div className="radio-item">
        {this.props.selectedStation && (this.props.selectedStation === this.props.station) &&
          <div className="extended">
            {/* <i className="fa fa-minus-circle"></i>       */}
            <img src={this.props.selectedStation.image} alt="radioimage" />
            {/* <i className="fa fa-plus-circle"></i> */}
          </div>
        }
        {this.props.station && 
          <div className="basic">
            <p>{this.props.station.name}</p>
            <p><strong>{this.props.station.frequency}</strong></p>
          </div>
        }
      </div>
    );
  }
}

export default RadioListItem;