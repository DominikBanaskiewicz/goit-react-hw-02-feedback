import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions ';
import { Statistics } from './Statiscitcs/Statistics';
import { Notification } from './Notification/Notification';
import React from 'react';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  totalStatsQuantisty = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  getPositiveFeedbackPercentage = () => {
    if (this.state.good === 0) return 0;
    return 100 * (this.state.good / this.totalStatsQuantisty());
  };
  onClick = (evt, value) => {
    if (evt.target.textContent === 'Good') {
      this.setState({ good: (this.state.good += value) });
    }
    if (evt.target.textContent === 'Neutral') {
      this.setState({ neutral: (this.state.neutral += value) });
    }
    if (evt.target.textContent === 'Bad') {
      this.setState({ bad: (this.state.bad += value) });
    }
    this.totalStatsQuantisty();
    this.getPositiveFeedbackPercentage();
  };
  render() {
    return (
      <div className="App">
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.onClick}
        ></FeedbackOptions>
        {this.totalStatsQuantisty() !== 0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.totalStatsQuantisty()}
            positivePercentage={Math.round(
              this.getPositiveFeedbackPercentage()
            )}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </div>
    );
  }
}
