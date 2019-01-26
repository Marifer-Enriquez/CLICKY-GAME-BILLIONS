  import React, {Component} from "react";
  import CharacterCard from "./components/CharacterCard/CharacterCard";
	import Nav from "./components/Nav";
	import Wrapper from "./components/Wrapper/Wrapper";
  import Title from "./components/Title";
	// import Container from "./Container";
	// import Row from "./Row";
	// import Column from "./Column";
	import characters from "./characters.json";
  import "./App.css";
  

  
  class App extends Component {
  
    state = {
      message: "Click one to begin!",
      currentScore: 0,
      topScore: 0,
      characters: characters,
      unselectedCharacters: characters
    };

    componentDidMount(){
    }

 shuffleCards = array => {
   for (let i = array.length -1; i>0; i--){
     let j = Math.floor(Math.random()*(i+1));
     [array[i], array[j]] = [array[j], array[i]];
   }
 }

    handleClick = id => {
      const findCharacter = this.state.unselectedCharacters.find(item => item.id === id);
      if (findCharacter === undefined) {
        // this.handleIncrement();
        this.setState({
          message: "Wrong answer",
          currentScore: 0,
          topScore: (this.state.currentScore > this.state.topScore) ? this.state.currentScore : this.state.topScore,
          characters: characters,
          unselectedCharacters: characters
        });
      }

      else {
        const newCharacter = this.state.unselectedCharacters.filter(item => item.id !== id);
        this.setState({
          message: "Good Job!",
          currentScore: this.state.currentScore + 1,
          characters: characters,
          unselectedCharacters: newCharacter
        });
      }
      this.shuffleCards(characters);
    };

    render() {
      return (
        <Wrapper>
          <Nav
            title="Billions Clicky Game"
            score={this.state.currentScore}
            topScore={this.state.topScore}
            message={this.state.message}
          />

          <Title />

          {
            this.state.characters.map(character => (
              <CharacterCard
                id={character.id}
                image={character.image}
                handleClick={this.handleClick}
                currentScore={this.state.currentScore}
              />
            ))
          }
        </Wrapper>
      );
    }
}
export default App;

