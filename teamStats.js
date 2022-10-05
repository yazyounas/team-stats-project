const team = {
    _players : [
      {firstName: 'Roger', lastName: 'Manole', age: 50},
      {firstName: 'Yasir', lastName: 'Younas', age: 35},
      {firstName: 'Qasim', lastName: 'Khan', age: 29}
  
    ],
    _games : [
      {opponent: 'combat', teamPoints: 20, opponentPoints: 25},
      {opponent: 'chimo', teamPoints: 42, opponentPoints: 29},
      {opponent: 'fighter', teamPoints: 25, opponentPoints: 20}
    ],
    get players () {
      return this._players;
    },
    get games () {
      return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge){
      let player = {
        FirstName : newFirstName,
        lastName : newLastName,
        age : newAge
      }
      this.players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints){
      let game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      }
      this.games.push(game);
    }
  };
  team.addGame('Titans', 100, 98)
  console.log(team.games)
  team.addPlayer('bugs', 'Bunny',76)
  
  console.log(team.players)
  