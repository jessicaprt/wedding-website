import React, { Component } from 'react';

export class ExpandableItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: true
    }
    this.toggleView = this.toggleView.bind(this);
  }

  toggleView(e) {
    this.setState(state => ({
      isShown: !state.isShown
    }));
  }

  render() {
    let down = <span>&and;</span>
    let up = <span>&or;</span>

    return (
      <div className="ExpandableItem" id={this.props.identifier}>
        <h3 onClick={this.toggleView} className="AmaticSC">
          <span className="expand-icons"><strong>{this.state.isShown ? up : down }</strong></span> 
          <span className="ei-title">{this.props.title}</span>
        </h3>

        <div className="ei-content">{this.state .isShown ? this.props.text : ''}</div>
      </div>
    )
  }
}