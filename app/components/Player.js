import React from 'react';

export default class Player extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      name: this.props.name,
      position: this.props.position,
      league: this.props.league,
      team: this.props.team,
    }
  }
  
  
  
  render() {
   
    return (
        <div className="card">
          <p className="card__name">{this.state.name}</p>
          <p className="card__position">{this.state.position}</p>
          <p className="card__league">{this.state.league}</p>
          <p className="card__team">{this.state.team}</p>
        </div>
    )
  }
}
