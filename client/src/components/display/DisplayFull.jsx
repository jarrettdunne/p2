import React from 'react';
import { Link } from "react-router-dom"
import { withRouter } from "react-router"
import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"

import totalTime from "../../data/functions"

import "./DisplayFull.css"

function DisplayFull(props) {
  const [name, setName] = useState("")
  const [ingredients, setIngredients] = useState("")
  const [directions, setDirections] = useState("")
  const [type, setType] = useState("")
  const [prep, setPrep] = useState("")
  const [cook, setCook] = useState("")
  const [notes, setNotes] = useState("")

  const params = useParams()
  const history = useHistory()
  const recipe = props.recipes.find((i) => i.id === props.match.params.id)
  
  let key = 0

  const renderId = () => {
    if (props.recipes.length !== 0) {
      return recipe.id
    }
  }

  useEffect(() => {
    if (params.id && props.recipes.length > 0) {
      const recipe = props.recipes.find((i) => i.id === params.id)
      if (recipe) {
        setName(recipe.fields.name)
        setIngredients(recipe.fields.ingredients)
        setDirections(recipe.fields.directions)
        setType(recipe.fields.type)
        setPrep(recipe.fields.prep)
        setCook(recipe.fields.cook)
        setNotes(recipe.fields.notes)
      }
    }
  }, [props.recipes, params.id, history.location.pathname])

  return (
    <div>
      <div className="recipe-name-edit">
        <h1>
          {name}
        </h1>
        <div>
          <Link to={`/recipe/${params.id}/edit`}>
            <h2 className="home-div-title-add">
              {` +edit`}
            </h2>
        </Link>
        </div>
      </div>
      <div className="recipe-times">
        <div className="time-prep time-div">
          <h3>prep time</h3>
          <p>{prep}</p>
        </div>
        <div className="time-cook time-div">
          <h3>cook time</h3>
          <p>{cook}</p>
        </div>
        <div className="time-total time-div">
          <h3>total time</h3>
          <p>{totalTime(prep, cook)}</p>
        </div>
        <div className="time-type time-div">
          <h3>meal type</h3>
          <p>{type}</p>
        </div>
      </div>
      <div className="recipe-contents">
        <div className="ingredients">
          <h3>ingredients</h3>
          <div className="recipe-contents-content">
            {ingredients.split('\n').map((i) => (
              <p key={key++}>{i}</p>
            ))}
          </div>
        </div>
        <div className="directions">
          <h3>directions</h3>
          <div className="recipe-contents-content">
            {directions.split('\n').map((i) => (
              <p key={key++}>{i}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(DisplayFull);