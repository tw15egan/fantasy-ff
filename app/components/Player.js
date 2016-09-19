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
  
  handleDelete() {
    this.props.deletePlayer(this.props.value);
  }

  render() {
   
    return (
        <tr className="card">
          <td className="card__name">{this.state.name}</td>
          <td className="card__position">{this.state.position}</td>
          <td className="card__league">{this.state.league}</td>
          <td className="card__team">{this.state.team}</td>
          <td className="card__delete" onClick={this.handleDelete.bind(this)}>x</td>
        </tr>
    )
  }
}
