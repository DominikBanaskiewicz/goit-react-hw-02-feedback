import React, { Component } from 'react';
export class Notification extends Component {
  static defaultProps = {
    message: 'There is no feedback',
  };

  hide() {}

  render() {
    return (
      <div>
        <p>{this.props.message}</p>
      </div>
    );
  }
}
