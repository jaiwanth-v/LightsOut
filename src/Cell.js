import React, {Component} from 'react'
import "./Cell.css"

export default class Cell extends Component {
  handleClick = () => {
    this.props.flipCellsAroundMe();
  }
  render() {
    let classes = "Cell" + (this.props.isLit ? " Cell-lit" : "");
    return  <td className={classes} onClick={this.handleClick} />;
  }
}


