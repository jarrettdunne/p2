import React, { Component } from 'react';
import { withRouter } from "react-router"
import { useParams } from "react-router-dom"

import PropTypes from 'prop-types';

import "./Form.css"
import mealTypes from "../../data/mealTypes.json"

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
      <div>
        <form className="form-main" onSubmit={this.handleSubmit}>
          <div className="editing">
            <div>
              <input className="recipe-edit-name" type="text" name="" id="" value={this.recipe.fields.name}/>
            </div>
            <img className="vertical-line" src="https://i.imgur.com/5V9fhc5.png" title="source: imgur.com" />
            <h2>editing</h2>
            <img className="vertical-line" src="https://i.imgur.com/5V9fhc5.png" title="source: imgur.com" />
            <input type="submit" value="submit"/>
          </div>
          <div className="times-form">
            <div className="prep-time">
              <input type="text" name="" id=""/>
            </div>
            <div className="cook-time">
              <input type="text" name="" id=""/>
            </div>
          </div>
          <div className="type-form">
            <select name="" id="">
              {mealTypes.type.map((i) => (
                <option value={i}>{i}</option>
              ))}
            </select>
          </div>
          <div className="inputs-main">
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
                      <textarea className="directions-textarea" name="" id="" cols="30" rows="5" >{i}</textarea>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="directions-add"></div>
            </div>
          </div>
          
        </form>
      </div>
    );
  }
}

FormEdit.propTypes = {

};

export default withRouter(FormEdit);