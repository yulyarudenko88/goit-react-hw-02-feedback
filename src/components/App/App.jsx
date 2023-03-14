import React, { Component } from 'react';
import { OptionsList } from 'components/OptionsList/OptionsList';
import { Statistics } from "components/Statistics/Statistics";
import { Title } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleButtonClick = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Title>Please leave your feedback</Title>
        <OptionsList options={options} handleFeedback={this.handleButtonClick}></OptionsList>
        <Title>Statistics</Title>
        <Statistics good={good}
              neutral={neutral}
              bad={bad}></Statistics>
        
      </>
    );
  }
}