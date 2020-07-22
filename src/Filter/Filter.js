import React from 'react';
import './Filter.css';

export class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spy: 'unselected',
      wizard: 'unselected'
    }

    this.filterSpy = this.filterSpy.bind(this);
    this.filterWizard = this.filterWizard.bind(this);
  }

  filterSpy() {
    if (this.state.spy != 'selected') {
      this.setState({spy: 'selected', wizard: 'unselected'});
      this.props.setFilter('wizardly');
    } else {
      this.setState({spy: 'unselected'});
      this.props.setFilter('');
    }
  }

  filterWizard() {
    if (this.state.wizard != 'selected') {
      this.setState({wizard: 'selected', spy: 'unselected'});
      this.props.setFilter('spyish');
    } else {
      this.setState({wizard: 'unselected'});
      this.props.setFilter('');
    }
  }

  render() {
    return(
      <div className="feed">
        <button className={'btn spy ' + this.state.spy} onClick={this.filterSpy}>Spy</button>
        <button className={'btn wizard ' + this.state.wizard} onClick={this.filterWizard}>Wizard</button>
      </div>
    )
  }
}