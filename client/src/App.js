import React, { Component } from 'react';
import { Link, Route } from "react-router-dom"

import PropTypes from 'prop-types';
import axios from "axios"

import Navbar from "./components/navbar/Navbar.jsx"
import DisplayMain from "./components/display/DisplayMain.jsx"
import DisplayFull from "./components/display/DisplayFull.jsx"
import Form from "./components/form/Form.jsx"

import './App.css';

import { baseURL, config } from "./services"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }

  }

  async getData() {
    const response = await axios.get(baseURL, config)
    this.setState({ data: response.data.records })
  }

  componentWillMount() {

  }

  componentDidMount() {
    this.getData()
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
        <Link to="/">
          <Navbar />
        </Link>
        <Route exact  path="/">
          <div className="display-main">
            {this.state.data.map((i) => (
              <Link to={`/recipe/${i.id}`}>
                <DisplayMain recipe={i} />
              </Link>
            ))}
          </div>
        </Route>
        <Route path="/recipe/:id" >
          <DisplayFull recipes={this.state.data}/>
        </Route>
      </div>
    );
  }
}

App.propTypes = {

};

export default App;