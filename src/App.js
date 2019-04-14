import React, { Component } from 'react';
import Box from './Box.js'


export default  class BoxesGroup  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 1, name: "1", color: "black" },
        { id: 2, name: "2", color: "black" },
        { id: 3, name: "3", color: "black" },
        { id: 4, name: "4", color: "black" },
        { id: 5, name: "5", color: "black" },
        { id: 6, name: "6", color: "black" },
        { id: 7, name: "7", color: "black" },
        { id: 8, name: "8", color: "black" },
        { id: 9, name: "9", color: "black" },
      ]
    };
  }

  swapBoxes = (fromBox, toBox) => {
    let items = this.state.items.slice();
    let fromIndex = -1;
    let toIndex = -1;

    for (let i = 0; i < items.length; i++) {
    if (items[i].id === fromBox.id) {
    fromIndex = i;
    }
    if (items[i].id === toBox.id) {
    toIndex = i;
    }
    }
    if (fromIndex !== -1 && toIndex !== -1) {
    let { fromId, ...fromRest } = items[fromIndex];
    let { toId, ...toRest } = items[toIndex];
    items[fromIndex] = { id: fromBox.id, ...toRest };
    items[toIndex] = { id: toBox.id, ...fromRest };

    this.setState({ items: items });
    }
  };

  handleDragStart = data => event => {
    let fromBox = JSON.stringify({ id: data.id });
    event.dataTransfer.setData("dragContent", fromBox);
  };

  handleDragOver = data => event => {
    event.preventDefault();
    return false;
  };

  handleDrop = data => event => {
    event.preventDefault();

    let fromBox = JSON.parse(event.dataTransfer.getData("dragContent"));
    let toBox = { id: data.id };

    this.swapBoxes(fromBox, toBox);
    return false;
  };

  makeBoxes = () => {
    return this.state.items.map(box => (
    <Box
    box={box}
    key={box.id}
    draggable="true"
    onDragStart={this.handleDragStart}
    onDragOver={this.handleDragOver}
    onDrop={this.handleDrop}
    />
    ));
  };

  render() {
    return <div className="boxesGroup">{this.makeBoxes()}</div>;
  }
}

