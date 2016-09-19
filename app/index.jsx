require('./scss/main.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import AddBar from './components/AddBar';
import Player from './components/Player';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      players: {},
      filtered: false,
    }
  }
  
  addPlayer(player) {
    const timestamp = (new Date()).getTime();
    this.state.players['player-' + timestamp] = player;
    this.setState({
      players: this.state.players
    })
  }
  
  deletePlayer(player) {
    delete this.state.players[player];
    this.setState({
      players: this.state.players
    })
  }
  
  renderPlayer(item) {
    let player = this.state.players[item];
    if (!this.state.filtered) {
      return (
        <Player 
          key={item}
          value={item}
          name="TJ"
          position={player.position}
          league={player.league}
          team={player.team}
          deletePlayer={this.deletePlayer.bind(this)}
        />
      )
    } 
  }
  
  render() {
   
    return (
      <div className="container">
        <AddBar addPlayer={this.addPlayer.bind(this)} />
        <table className="players">
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>League</th>
              <th>Team</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(this.state.players).map(this.renderPlayer.bind(this))}
          </tbody>
        </table>
      </div>
        
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

