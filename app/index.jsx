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
    }
  }
  
  addPlayer(player) {
    const timestamp = (new Date()).getTime();
    this.state.players['player-' + timestamp] = player;
    this.setState({
      players: this.state.players
    })
  }
  
  renderPlayer(item) {
    let player = this.state.players[item];
    return (
      <Player 
        key={item}
        name="TJ"
        position={player.position}
        league={player.league}
        team={player.team}
      />
    )
  }
  
  render() {
   
    return (
      <div className="container">
        <AddBar addPlayer={this.addPlayer.bind(this)} />
        <ul className="players">
          {Object.keys(this.state.players).map(this.renderPlayer.bind(this))}
        </ul>
      </div>
        
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

