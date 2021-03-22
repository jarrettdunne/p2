import React, { useState } from 'react';
import { useHistory } from "react-router-dom"

import axios from "axios"

import { baseURL, config } from "../../services"
import mealTypes from "../../data/mealTypes.json"

function FormAdd(props) {
  const [name, setName] = useState("")
  const [ingredients, setIngredients] = useState("")
  const [directions, setDirections] = useState("")
  const [type, setType] = useState("")
  const [prep, setPrep] = useState("")
  const [cook, setCook] = useState("")
  const [notes, setNotes] = useState("")

  const history = useHistory()

  let key = 0
  
  async function handleSubmit(e) {
    e.preventDefault()
    const currData = {
      name,
      ingredients,
      directions,
      type,
      prep,
      cook,
      notes,
    }
    await axios.post(baseURL, { fields: currData }, config)
    props.setToggleFetch((curr) => !curr)
    history.push("/")
  }

  return (
    <div>
      <form className="form-main" onSubmit={handleSubmit}>
        <div className="editing">
          <div>
            <input
              required
              className="recipe-add-name"
              type="text"
              name=""
              id=""
              placeholder="recipe name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <input
            type="submit"
            value="submit new"
          />
        </div>
        <div className="times-form">
          <div className="prep-time">
            <input
              type="text"
              name=""
              id=""
              placeholder="prep time"
              onChange={(e) => setPrep(e.target.value)}
            />
          </div>
          <div className="cook-time">
            <input
              type="text"
              name=""
              id=""
              placeholder="cook time"
              onChange={(e) => setCook(e.target.value)}
            />
          </div>
        </div>
        <div className="type-form" onChange={(e) => setType(e.target.value)}>
          <input required list="type-list"/>
          <datalist name="" id="type-list">
            {mealTypes.type.map((i) => (
              <option key={key++} value={i}>{i}</option>
            ))}
          </datalist>
        </div>
        <div className="inputs-main">
          <div className="ingredients-form">
            <h3>ingredients</h3>
            <div className="ingredient-inputs-main">
              <textarea
                required
                name=""
                id=""
                cols="25"
                rows="15"
                onChange={(e) => setIngredients(e.target.value)}
              ></textarea>
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
                onChange={(e) => setDirections(e.target.value)}
              ></textarea>
            </div>
            <div className="directions-add"></div>
          </div>
          <div className="notes-form">
            <h3>notes</h3>
            <div className="directions-inputs-main">
              <textarea
                name=""
                id=""
                cols="25"
                rows="5"
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormAdd;