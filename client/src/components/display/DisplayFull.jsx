import React, { Component } from 'react';
import { useParams } from "react-router-dom"
import { withRouter } from "react-router"

import PropTypes from 'prop-types';

class DisplayFull extends Component {
  constructor(props) {
    super(props);
    this.recipe = props.recipes.find((i) => i.id === this.props.match.params.id)
  }

  componentWillMount() {

  }

  componentDidMount() {

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
      <div>
        <h2>{this.recipe.fields.name.toLowerCase()}</h2>
        <div className="recipe-times"></div>
        <div className="recipe-contents">
          <div className="ingredients">
            <h3>ingredients</h3>
            {this.recipe.fields.ingredients.split('\n').map((i) => (
              <p>{i}</p>
            ))}
          </div>
          <div className="directions">
            <h3>directions</h3>
            {this.recipe.fields.directions.split('\n').map((i) => (
              <p>{i}</p>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

DisplayFull.propTypes = {

};

export default withRouter(DisplayFull);