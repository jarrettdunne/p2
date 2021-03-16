import React, { Component } from 'react';
import { withRouter } from "react-router"
import { Link, Route } from "react-router-dom"

import PropTypes from 'prop-types';

import "./Navbar.css"

class Navbar extends Component {
  constructor(props) {
    super(props);
    if (this.props.match.params.id) {
      this.recipe = props.recipes.find((i) => i.id === this.props.match.params.id)
    }
    this.renderValid = true
  }

  main() {
    if (this.props.message) {
      return (
        <Link to="/">
          <h1>{this.props.message.toLowerCase()}</h1>
        </Link>
      )
    }
  }

  add() {
    if (this.recipe) {
      return (
        <h1>
          {` / ${this.recipe.fields.name.toLowerCase()}`}
        </h1>
      )
    }
  }
  
  edit() {
    if (this.recipe) {
      return (
        <Link to={`/recipe/${this.recipe.id}/edit`}>
          <h1 className="icon-div">
            <div>{' / '}</div>
            <div>{` edit`}</div>
            <div className="icon-plus"><a href="https://imgur.com/YruOcld"><img src="https://i.imgur.com/YruOcld.png" title="source: imgur.com" /></a></div>
          </h1>
        </Link>
      )
    }
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
        {this.main()}{this.add()}{this.edit()}
      </div>
    );
  }
}

Navbar.propTypes = {

};

export default withRouter(Navbar);