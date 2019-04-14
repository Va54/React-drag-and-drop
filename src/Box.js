import React, {Component} from 'react';
import index from './index.css';

export  default class Box extends Component {
  render() {
	return (
	<div
	className="box"
	style={{ backgroundColor: this.props.box.color }}
	draggable={this.props.draggable}
	onDragStart={this.props.onDragStart({ id: this.props.box.id })}
	onDragOver={this.props.onDragOver({ id: this.props.box.id })}
	onDrop={this.props.onDrop({ id: this.props.box.id })}
	>
	  <div className="content">{this.props.box.name}</div>
	</div>
	);
  }
}
