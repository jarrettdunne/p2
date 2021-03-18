import React, { Component } from 'react';
import { Link, useParams } from "react-router-dom"
import { withRouter } from "react-router"

import PropTypes from 'prop-types';

import totalTime from "../../data/functions"

import "./DisplayFull.css"

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

  renderValid() {
    return (
      <div>
        <div className="recipe-name-edit">
          <h2>{this.recipe.fields.name.toLowerCase()}</h2>
          <img className="vertical-line" src="https://i.imgur.com/5V9fhc5.png" title="source: imgur.com" />
          <Link to={`/recipe/${this.recipe.id}/edit`}>
            <div className="icon-div">
              <h2>edit</h2>
              <div className="icon-plus"><a href="https://imgur.com/YruOcld"><img src="https://i.imgur.com/YruOcld.png" title="source: imgur.com" /></a></div>
            </div>
          </Link>
        </div>
        <div className="recipe-times">
          <div className="time-prep time-div">
            <h3>prep time</h3>
            <p>{this.recipe.fields.prep}</p>
          </div>
          <div className="time-cook time-div">
            <h3>cook time</h3>
            <p>{this.recipe.fields.cook}</p>
          </div>
          <div className="time-total time-div">
            <h3>total time</h3>
            <p>{totalTime(this.recipe.fields.prep, this.recipe.fields.cook)}</p>
          </div>
        </div>
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

  renderInvalid() {
    return (
      <p className="nothing">nothing to see here</p>
    )
  }

  render() {
    if (this.recipe) {
      return this.renderValid()
    } else {
      return this.renderInvalid()
    }
  }
}

DisplayFull.propTypes = {

};

export default withRouter(DisplayFull);