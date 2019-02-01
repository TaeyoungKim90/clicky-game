import React, { Component } from 'react';

import heros from './heros.json'
import Organizer from './components/Organizer'
import Navpills from './components/Navpills'
import Title from './components/Title'
import HeroCard from './components/HeroCard'

class App extends Component {
  state = {
    message: "Click a hero to start.",
    currentScore: 0,
    heros: heros,
    unselectedHeros: heros
  }




  shuffleCards = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  componentDidMount() {
  }




  selectHero = breed => {
    const findHero = this.state.unselectedHeros.find(item => item.breed === breed);
    // if u failed to select a new hero
    if (findHero === undefined) {
      this.setState({
        message: "Wrong!",
        currentScore: 0,
        heros: heros,
        unselectedHeros: heros
      });
    }



    // if u aresuccessfull to select a new hero
    else {

      const newHeros = this.state.unselectedHeros.filter(item => item.breed !== breed);

      this.setState({
        message: "O'Yeah!",
        currentScore: this.state.currentScore +++ 1,
        heros: heros,
        unselectedHeros: newHeros
      });
    }

    this.shuffleCards(heros);
  };






  render() {
    return (
      <Organizer>
        <Navpills
          message={this.state.message}
          currentScore={this.state.currentScore}
        />
        <Title />
        {
          this.state.heros.map(hero => (
            <HeroCard
              breed={hero.breed}
              image={hero.image}
              selectHero={this.selectHero}
              currentScore={this.state.currentScore}
            />
          ))
        }
      </Organizer>
    );
  }
}

export default App;