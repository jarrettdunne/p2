import React, { Component } from 'react';
import { withRouter } from "react-router"
import { useParams } from "react-router-dom"

import PropTypes from 'prop-types';

import "./Form.css"

class FormEdit extends Component {
  constructor(props) {
    super(props);
    if (this.props.match.params.id) {
      this.recipe = props.recipes.find((i) => i.id === this.props.match.params.id)
    }
  }

  handleSubmit(e) {
    e.preventDefault()
  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {

  }

  shouldComponentUpdate(nextProps, nextState) {

  }

  componentWillUpdate(nextProps, nextState) {

  }

  componentDidUpdate(prevProps, prevState) {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <form className="form-main" onSubmit={this.handleSubmit}>
        <div className="form-times">
          <div className="prep-time"></div>
          <div className="cook-time"></div>
          <div className="total-time"></div>
        </div>
        <div className="ingredients-form">
          <h3>ingredients</h3>
          <div className="ingredient-inputs-main">
            <ul>
              {this.recipe.fields.ingredients.split('\n').map((i) => (
                <li>
                  <input type="text" name="" id="" value={i}/>
                </li>
              ))}
            </ul>
          </div>
          <div className="ingredients-add"></div>
        </div>
        <div className="directions-form">
          <h3>directions</h3>
          <div className="directions-inputs-main">
            <ol>
              {this.recipe.fields.directions.split('\n').map((i) => (
                <li>
                  <textarea className="directions-textarea" name="" id="" cols="30" rows="10" >{i}</textarea>
                </li>
              ))}
            </ol>
          </div>
          <div className="directions-add"></div>
        </div>
        <input type="submit" value="update"/>
      </form>
    );
  }
}

FormEdit.propTypes = {

};

export default withRouter(FormEdit);