import React, { Component } from 'react';
import api from '../../api';
import RadioListItem from '../RadioListItem';

class Radios extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stations: null,
      selectedStation: null
    }
  }

  handleClick(e, station) {
    e.preventDefault();
    (this.state.selectedStation === station) 
    ? this.setState({ selectedStation: null }) // toggle extended view, when already extended
    : this.setState({ selectedStation: station })
  }
  
  render() {
    return (
      <div className="radio-container">
        <div className="header"><i className="fa fa-chevron-left"></i><strong>STATIONS</strong><i className="fa fa-power-off"></i></div>
        {this.state.stations && 
          <div className="center">
            <ul>
              {this.state.stations.map((station, i) => 
                <li key={i} onClick={(e) => this.handleClick(e, station)}>
                  <RadioListItem  
                    selectedStation={this.state.selectedStation}
                    station={station} />
                </li>
              )}
            </ul>
          </div>
        }
          <div className="footer">
          {this.state.selectedStation && 
            <div className="currently-playing">
                <span className="top">CURRENTLY PLAYING</span>
                <strong>{this.state.selectedStation.name}</strong>
            </div>
          }
          </div>
      </div>
    );
  }
  componentDidMount() {
    api.getRadios()
      .then(stations => {
        this.setState({ stations: stations.radios })
      })
      .catch(err => console.log(err))
  }
}

export default Radios;