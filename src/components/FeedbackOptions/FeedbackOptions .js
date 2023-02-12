import React, { Component } from 'react';
export class FeedbackOptions extends Component {
  static defaultProps = {
    options: 0,
    onLeaveFeedback: 0,
  };

  render() {
    return (
      <div>
        <h2> Please leave feedback</h2>
        <button onClick={event => this.props.onLeaveFeedback(event, 1)}>
          Good
        </button>
        <button onClick={event => this.props.onLeaveFeedback(event, 1)}>
          Neutral
        </button>
        <button onClick={event => this.props.onLeaveFeedback(event, 1)}>
          Bad
        </button>
      </div>
    );
  }
}
