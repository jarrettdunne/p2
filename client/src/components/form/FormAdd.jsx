import React, { Component } from 'react';
import { baseURL, config } from "../../services"
import PropTypes from 'prop-types';

import mealTypes from "../../data/mealTypes.json"

class FormAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      ingredients: "",
      directions: "",
      type: "",
      prep: "",
      cook: "",
      notes: "",
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
        <form className="form-main" onSubmit={this.handleSubmit}>
          <div className="editing">
            <div>
              <input className="recipe-add-name" type="text" name="" id="" onChange={(e) => this.setState({name: e.target.value})}/>
            </div>
            {/* <img className="vertical-line" src="https://i.imgur.com/5V9fhc5.png" title="source: imgur.com" />
            <h2>adding</h2> */}
            <img className="vertical-line" src="https://i.imgur.com/5V9fhc5.png" title="source: imgur.com" />
            <input type="submit" value="submit"/>
          </div>
          <div className="times-form">
            <div className="prep-time">
              <input type="text" name="" id="" onChange={(e) => this.setState({ prep: e.target.value })}/>
            </div>
            <div className="cook-time">
              <input type="text" name="" id="" onChange={(e) => this.setState({ cook: e.target.value })}/>
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
                <textarea name="" id="" cols="25" rows="15" onChange={(e) => this.setState({ ingredients: e.target.value })}></textarea>
              </div>
              <div className="ingredients-add"></div>
            </div>
            <div className="directions-form">
              <h3>directions</h3>
              <div className="directions-inputs-main">
                <textarea name="" id="" cols="25" rows="15" onChange={(e) => this.setState({directions: e.target.value})}></textarea>
              </div>
              <div className="directions-add"></div>
            </div>
            <div className="directions-form">
              <h3>notes</h3>
              <div className="directions-inputs-main">
                <textarea name="" id="" cols="25" rows="5" onChange={(e) => this.setState({notes: e.target.value})}></textarea>
              </div>
              <div className="directions-add"></div>
            </div>
          </div>
          
        </form>
      </div>
    );
  }
}

FormAdd.propTypes = {

};

export default FormAdd;