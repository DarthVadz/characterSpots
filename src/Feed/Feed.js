import React from 'react';
import './Feed.css';
import { Card } from '../Card/Card';
import { Filter } from '../Filter/Filter';

export class Feed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cards : [{objectIndex: 0,
        character: '',
      location: '',
      mindset: '',
      colorToggle: 'spyish'},
      {objectIndex: 1,
        character: '',
      location: '',
      mindset: '',
      colorToggle: 'wizardly'}],
      filter : ''
    }

    this.addCard = this.addCard.bind(this);
    this.removeCard = this.removeCard.bind(this);
    this.handleColorToggle = this.handleColorToggle.bind(this);
    this.handleCharacterInput = this.handleCharacterInput.bind(this);
    this.handleLocationInput = this.handleLocationInput.bind(this);
    this.handleMindsetInput = this.handleMindsetInput.bind(this);
    this.filterFeed = this.filterFeed.bind(this);
  }

  addCard() {
    let newIndex = (this.state.cards.length);
    let newCard = {objectIndex: newIndex, character: '', location: '', mindset: '', colorToggle: 'spyish'};
    let newCards = this.state.cards;
    newCards.push(newCard);
    this.setState({cards: newCards});
  }

  removeCard(index) {
    //let newCards = this.state.cards.filter(card => card.objectIndex != index);
    let newCards = this.state.cards;
    newCards.splice(index, 1);

    for(let i = 0; i < newCards.length; i++) {
      newCards[i].objectIndex = i;
    }
    this.setState({cards: newCards});
  }

  handleColorToggle(colorToggle, index) {
    let newCards = this.state.cards;
    newCards[index].colorToggle = colorToggle;

    this.setState(
      {cards: newCards}
    )
  }

  handleCharacterInput(value, index) {
    let newCards = this.state.cards;
    newCards[index].character = value;
    this.setState(
      {cards: newCards}
    )
  }

  handleLocationInput(value, index) {
    let newCards = this.state.cards;
    newCards[index].location = value;
    this.setState(
      {cards: newCards}
    )
  }

  handleMindsetInput(value, index) {
    let newCards = this.state.cards;
    newCards[index].mindset = value;
    this.setState(
      {cards: newCards}
    )
  }

  filterFeed(value) {
    this.setState({filter: value})
  }

  render() {
    let cardFeed = [];
    for (let i = 0; i < this.state.cards.length; i++) {
      let filteredOut = false;
      if(this.state.cards[i].colorToggle != this.state.filter) {
        filteredOut = true;
      }

      let newCard = (<Card
        objectIndex={i}
        colorToggle={this.state.cards[i].colorToggle}
        delete={this.removeCard}
        onColorToggle={this.handleColorToggle}
        onCharacterInput={this.handleCharacterInput}
        onLocationInput={this.handleLocationInput}
        onMindsetInput={this.handleMindsetInput}
        filteredOut={filteredOut}
        />);
      cardFeed.push(newCard)
      // if() {
      //   cardFeed.push(<Card />)
      // } else {
      //   cardFeed.push(<Card style={{fontSize: "100px"}}/>)
      // }
    }
    return (
      <div>
        <Filter setFilter={this.filterFeed}/>
      <div className="container mainfeed">
        {cardFeed}
        <div className="card" onClick={this.addCard}>
          <h3 className="card-body"> New </h3>
          <h3 className="card-body"> + </h3>
        </div>
      </div>
      </div>
    );
  }
}