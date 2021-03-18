import React, { Component } from 'react';
import { withRouter } from "react-router"
import { useParams } from "react-router-dom"
import {baseURL, config} from "../../services"

import axios from "axios"
import PropTypes from 'prop-types';

import "./Form.css"
import mealTypes from "../../data/mealTypes.json"

// export const Component = withRouter(({history, location}) => {})

class FormEdit extends Component {
  constructor(props) {
    super(props);
    if (this.props.match.params.id) {
      this.recipe = props.recipes.find((i) => i.id === this.props.match.params.id)
      
      this.state = {
        name: this.recipe.fields.name,
        ingredients: this.recipe.fields.ingredients,
        directions: this.recipe.fields.directions,
        type: this.recipe.fields.type,
        prep: this.recipe.fields.prep,
        cook: this.recipe.fields.cook,
        notes: this.recipe.fields.notes,
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async handleSubmit(e) {
    e.preventDefault()
    await axios.put(baseURL, { fields: this.state }, config)
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
    this.render()
  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div>
        <form className="form-main" onSubmit={this.handleSubmit}>
          <div className="editing">
            <div>
              <input
                className="recipe-edit-name"
                type="text"
                name=""
                id=""
                value={this.state.name}
                onChange={(e) => this.setState({name: e.target.value})}
              />
            </div>
            <input
              type="submit"
              value="submit changes"
            />
          </div>
          <div className="misc-form">
            <div className="prep-time">
              <input
                type="text"
                name=""
                id=""
                value={this.state.prep}
                onChange={(e) => this.setState({prep: e.target.value})}
              />
            </div>
            <div className="cook-time">
              <input
                type="text"
                name=""
                id=""
                value={this.state.cook}
                onChange={(e) => this.setState({cook: e.target.value})}
              />
            </div>
            <div className="type-form">
              <select name="" id="">
              {mealTypes.type.map((i) => {
                if (i === this.recipe.fields.type) {
                  return <option selected={true} value={i}>{i}</option>
                } else {
                  return <option selected={false} value={i}>{i}</option>
                }
              })}
              </select>
            </div>
          </div>
          <div className="inputs-main">
            <div className="ingredients-form">
              <h3>ingredients</h3>
              <div className="ingredient-inputs-main">
                <ul>
                  <textarea
                    required
                    name=""
                    id=""
                    cols="25"
                    rows="15"
                    defaultValue={this.state.ingredients}
                    onChange={(e) => this.setState({ ingredients: e.target.value })}
                  >
                    
                  </textarea>
                </ul>
              </div>
              <div className="ingredients-add"></div>
            </div>
            <div className="directions-form">
              <h3>directions</h3>
              <div className="directions-inputs-main">
                <textarea
                  required
                  name=""
                  id=""
                  cols="25"
                  rows="15"
                  defaultValue={this.state.directions}
                  onChange={(e) => this.setState({ directions: e.target.value })}
                >
                
                </textarea>
              </div>
              <div className="directions-add"></div>
            </div>
            <div className="notes-form">
              <h3>notes</h3>
              <div className="directions-inputs-main">
                <textarea
                  required
                  name=""
                  id=""
                  cols="25"
                  rows="5"
                  defaultValue={this.state.notes}
                  onChange={(e) => this.setState({ notes: e.target.value })}
                >
                  
                </textarea>
              </div>
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