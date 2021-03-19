import React from 'react';
import { Link, useParams } from "react-router-dom"
import { withRouter } from "react-router"

import totalTime from "../../data/functions"

import "./DisplayFull.css"

function DisplayFull(props) {
  const recipe = props.recipes.find((i) => i.id === props.match.params.id)
  
  return (
    <div>
      <div className="recipe-name-edit">
        <h2>{recipe.fields.name.toLowerCase()}</h2>
        <img className="vertical-line" src="https://i.imgur.com/5V9fhc5.png" title="source: imgur.com" />
        <Link to={`/recipe/${recipe.id}/edit`}>
          <div className="icon-div">
            <h2>edit</h2>
            <div className="icon-plus"><a href="https://imgur.com/YruOcld"><img src="https://i.imgur.com/YruOcld.png" title="source: imgur.com" /></a></div>
          </div>
        </Link>
      </div>
      <div className="recipe-times">
        <div className="time-prep time-div">
          <h3>prep time</h3>
          <p>{recipe.fields.prep}</p>
        </div>
        <div className="time-cook time-div">
          <h3>cook time</h3>
          <p>{recipe.fields.cook}</p>
        </div>
        <div className="time-total time-div">
          <h3>total time</h3>
          <p>{totalTime(recipe.fields.prep, recipe.fields.cook)}</p>
        </div>
      </div>
      <div className="recipe-contents">
        <div className="ingredients">
          <h3>ingredients</h3>
          {recipe.fields.ingredients.split('\n').map((i) => (
            <p>{i}</p>
          ))}
        </div>
        <div className="directions">
          <h3>directions</h3>
          {recipe.fields.directions.split('\n').map((i) => (
            <p>{i}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default withRouter(DisplayFull);