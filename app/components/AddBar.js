import React from 'react';
import {RadioGroup, Radio} from 'react-radio-group'

export default class AddBar extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      selectedPos: 'QB',
      selectedLeague: 'Work League',
      selectedTeam: 'Arizona Cardinals',
    }
  }
  
  closeDropdowns(parent) {
    [... document.querySelectorAll('.dropdown')].forEach(item => {
      if (item !== parent) {
        item.classList.remove('active');
      }
    })
  }
  
  handleSubmit(evt) {
    evt.preventDefault(); 
    let player = {
        position: this.state.selectedPos,
        league: this.state.selectedLeague,
        team: this.state.selectedTeam,
      }
      this.props.addPlayer(player);
  }
  
  handlePositionChange(evt) {
    let parent = evt.currentTarget.parentNode;
    if (evt.target.dataset.header) {
      parent.classList.toggle('active');
      this.closeDropdowns(parent);
    } else {
      parent.classList.toggle('active');
      this.setState({
        selectedPos: evt.target.textContent
      })
    }
  }
  
  handleLeagueChange(evt) {
    let parent = evt.currentTarget.parentNode;
    if (evt.target.dataset.header) {
      parent.classList.toggle('active');
      this.closeDropdowns(parent);
    } else {
      parent.classList.toggle('active');
      this.setState({
        selectedLeague: evt.target.textContent
      })
    }
  }
  
  handleTeamChange(evt) {
    let parent = evt.currentTarget.parentNode;
    if (evt.target.dataset.header) {
      parent.classList.toggle('active');
      this.closeDropdowns(parent);
    } else {
      parent.classList.toggle('active');
      this.setState({
        selectedTeam: evt.target.textContent
      })
    }
  }
  
  render() {
    return (
        <form onSubmit={this.handleSubmit.bind(this)}>
          <fieldset>
            <label htmlFor="player">Player Name</label>
            <input type="text" name="player"
              placeholder="Player Name" />
          </fieldset>
          <fieldset>
            <label>Position:</label>
            <ul className="dropdown">
              <li data-header className="dropdown__header" onClick={this.handlePositionChange.bind(this)}>{this.state.selectedPos}</li>
              <ul className="dropdown__list" onClick={this.handlePositionChange.bind(this)}>
                <li>QB</li>
                <li>RB</li>
                <li>WR</li>
                <li>TE</li>
                <li>K</li>
                <li>DEF</li>
              </ul>
            </ul>
          </fieldset>
          <fieldset>
            <label>League:</label>
            <ul className="dropdown">
              <li data-header className="dropdown__header" onClick={this.handleLeagueChange.bind(this)}>{this.state.selectedLeague}</li>
              <ul className="dropdown__list" onClick={this.handleLeagueChange.bind(this)}>
                <li>Work League</li>
                <li>Family League</li>
                <li>Big Money League</li>
              </ul>
            </ul>
          </fieldset>
          <fieldset>
            <label>Team:</label>
            <ul className="dropdown">
              <li data-header className="dropdown__header" onClick={this.handleTeamChange.bind(this)}>{this.state.selectedTeam}</li>
              <ul className="dropdown__list" onClick={this.handleTeamChange.bind(this)}>
                <li>Arizona Cardinals</li> 
                <li>Atlanta Falcons</li> 
                <li>Baltimore Ravens</li> 
                <li>Buffalo Bills</li> 
                <li>Carolina Panthers</li> 
                <li>Chicago Bears</li> 
                <li>Cincinnati Bengals</li> 
                <li>Cleveland Browns</li> 
                <li>Dallas Cowboys</li> 
                <li>Denver Broncos</li> 
                <li>Detroit Lions</li> 
                <li>Green Bay Packers</li> 
                <li>Houston Texans</li> 
                <li>Indianapolis Colts</li> 
                <li>Jacksonville Jaguars</li> 
                <li>Kansas City Chiefs</li> 
                <li>Los Angeles Rams</li> 
                <li>Miami Dolphins</li> 
                <li>Minnesota Vikings</li> 
                <li>New England Patriots</li> 
                <li>New Orleans Saints</li> 
                <li>New York Giants</li> 
                <li>New York Jets</li> 
                <li>Oakland Raiders</li> 
                <li>Philadelphia Eagles</li> 
                <li>Pittsburgh Steelers</li> 
                <li>San Diego Chargers</li> 
                <li>San Francisco 49ers</li> 
                <li>Seattle Seahawks</li> 
                <li>Tampa Bay Buccaneers</li> 
                <li>Tennessee Titans</li> 
                <li>Washington Redskin</li>
              </ul>
            </ul>
          </fieldset>
          <fieldset>
            <button className="form__button" type="submit">Add Player</button>
          </fieldset>
        </form>
    )
  }
}

