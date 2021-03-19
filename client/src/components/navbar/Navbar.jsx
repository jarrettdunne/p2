import React from 'react';
import { withRouter } from "react-router"
import { Link, Route } from "react-router-dom"

import "./Navbar.css"

function Navbar(props) {

  const recipe = props.recipes.find((i) => i.id === props.match.params.id)
  
  const renderValid = true

  const main = () => {
    return (
      <nav>
        <Link to="/">
          <h1>recipes</h1>
        </Link>
        <img className="dot" src="https://i.imgur.com/PTqYVhG.png" title="source: imgur.com" />
        <Link to="/add">
          <div className="icon-div">
            <h1>add</h1>
            <img src="https://i.imgur.com/YruOcld.png" title="source: imgur.com" />
          </div>
        </Link>
      </nav>
    )
  }

  const add = () => {
    if (recipe) {
      return (
        <h1>
          {` / ${recipe.fields.name.toLowerCase()}`}
        </h1>
      )
    }
  }

  // const edit = () => {
  //   if (recipe) {
  //     return (
  //       <Link to={`/recipe/${recipe.id}/edit`}>
  //         <h1 className="icon-div">
  //           <div>{' / '}</div>
  //           <div>{` edit`}</div>
  //           <div className="icon-plus"><a href="https://imgur.com/YruOcld"><img src="https://i.imgur.com/YruOcld.png" title="source: imgur.com" /></a></div>
  //         </h1>
  //       </Link>
  //     )
  //   }
  // }

  return (
    <div>
      {main()}{add()}
    </div>
  );
}


export default withRouter(Navbar);