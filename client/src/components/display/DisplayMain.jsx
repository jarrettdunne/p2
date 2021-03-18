import React, { Component } from 'react';
import PropTypes from 'prop-types';

import totalTime from "../../data/functions"

import "./DisplayMain.css"

class DisplayMain extends Component {
  constructor(props) {
    super(props);
    this.recipe = props.recipe.fields
    console.log(this.recipe.name)

    this.totalTime = totalTime.bind(this)
  }

  componentWillMount() {

  }

  componentDidMount() {
    console.log(totalTime(this.recipe.prep, this.recipe.cook))
  }

  componentWillReceiveProps(nextProps) {

  }

  shouldComponentUpdate(nextProps, nextState) {
    return true
  }

  componentWillUpdate(nextProps, nextState) {

  }

  componentDidUpdate(prevProps, prevState) {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div className="display-main-item">
        <h4 className="display-name">{this.recipe.name.toLowerCase()}</h4>
        <p>{this.recipe.type}</p>
        <p>{this.totalTime(this.recipe.prep, this.recipe.cook)}</p>
      </div>
    );
  }
}

DisplayMain.propTypes = {

};

export default DisplayMain;