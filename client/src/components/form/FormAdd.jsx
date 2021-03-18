import React, { Component } from 'react';
import { baseURL, config } from "../../services"
import axios from "axios"
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

    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  async handleSubmit(e) {
    e.preventDefault()
    await axios.post(baseURL, { fields: this.state }, config)
  }

  componentWillMount() {

  }

  componentDidMount() {
    this.setState({type: mealTypes.type[0]})
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
              <input required className="recipe-add-name" type="text" name="" id="" placeholder="recipe name" onChange={(e) => this.setState({name: e.target.value})}/>
            </div>
            {/* <img className="vertical-line" src="https://i.imgur.com/5V9fhc5.png" title="source: imgur.com" />
            <h2>adding</h2> */}
            {/* <img className="vertical-line" src="https://i.imgur.com/5V9fhc5.png" title="source: imgur.com" /> */}
            <input type="submit" value="submit new"/>
          </div>
          <div className="times-form">
            <div className="prep-time">
              <input type="text" name="" id="" placeholder="prep time" onChange={(e) => this.setState({ prep: e.target.value })}/>
            </div>
            <div className="cook-time">
              <input type="text" name="" id="" placeholder="cook time" onChange={(e) => this.setState({ cook: e.target.value })}/>
            </div>
          </div>
          <div className="type-form" onChange={(e) => this.setState({type: e.target.value})}>
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
                <textarea required name="" id="" cols="25" rows="15" onChange={(e) => this.setState({ ingredients: e.target.value })}></textarea>
              </div>
              <div className="ingredients-add"></div>
            </div>
            <div className="directions-form">
              <h3>directions</h3>
              <div className="directions-inputs-main">
                <textarea required name="" id="" cols="25" rows="15" onChange={(e) => this.setState({directions: e.target.value})}></textarea>
              </div>
              <div className="directions-add"></div>
            </div>
            <div className="notes-form">
              <h3>notes</h3>
              <div className="directions-inputs-main">
                <textarea required name="" id="" cols="25" rows="5" onChange={(e) => this.setState({notes: e.target.value})}></textarea>
              </div>
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