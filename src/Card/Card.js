import React from 'react';
import './Card.css';

export class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      orderNumber: this.props.objectIndex,
      character: this.props.character,
      location: this.props.location,
      mindset: this.props.mindset,
      colorToggle: this.props.colorToggle,
      filteredOut: this.props.filteredOut
    }

    this.handleCharacterInput = this.handleCharacterInput.bind(this);
    this.handleLocationInput = this.handleLocationInput.bind(this);
    this.handleMindsetInput = this.handleMindsetInput.bind(this);
    this.toggleBackground = this.toggleBackground.bind(this);
    this.delete = this.delete.bind(this);
  }

  handleCharacterInput(e) {
    this.setState({
      character: e.target.value
    })
    this.props.onCharacterInput(e.target.value, this.state.orderNumber);
  }

  handleLocationInput(e) {
    this.setState({
      location: e.target.value
    })
    this.props.onLocationInput(e.target.value, this.state.orderNumber);
  }

  handleMindsetInput(e) {
    this.setState({
      mindset: e.target.value
    })
    this.props.onMindsetInput(e.target.value, this.state.orderNumber);
  }

  toggleBackground() {
    let newColor;
    if (this.state.colorToggle == 'spyish') {
      this.setState({
        colorToggle: 'wizardly'
      })
      newColor = 'wizardly';
    } else {
      this.setState({
        colorToggle: 'spyish'
      })
      newColor = 'spyish';
    }
    this.props.onColorToggle(newColor, this.state.orderNumber);
  }

  delete() {
    this.props.delete(this.state.orderNumber);
  }

  render() {
    let filteredOut = {opacity: '0.3'}
    if(this.props.filteredOut == true) {
      filteredOut = {opacity: '1'}
    }
    return (
        <div className={"card " + this.state.colorToggle} style={filteredOut}>
          <span className={'card-top'}>
          <button className={"btn swap " + this.state.colorToggle} onClick={this.toggleBackground}>/</button>
          <input className="cardTitle secretInput" placeholder="Name" onChange={this.handleCharacterInput} />
          <button className={"btn deleteButton"} onClick={this.delete}>-</button>
          </span>
          <input className="card-body secretInput" placeholder="Location" onChange={this.handleLocationInput} />
          <input className="card-body secretInput" placeholder="Mindset" onChange={this.handleMindsetInput} />
        </div>
    );
  }
}