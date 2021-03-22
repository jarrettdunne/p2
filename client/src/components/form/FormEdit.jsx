import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { baseURL, config } from "../../services";

import axios from "axios";

import "./Form.css";
import mealTypes from "../../data/mealTypes.json";

function FormEdit(props) {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [directions, setDirections] = useState("");
  const [type, setType] = useState("");
  const [prep, setPrep] = useState("");
  const [cook, setCook] = useState("");
  const [notes, setNotes] = useState("");

  const params = useParams();
  const history = useHistory();

  let recipe = {
    name,
    ingredients,
    directions,
    type,
    prep,
    cook,
    notes,
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const currData = {
      name,
      ingredients,
      directions,
      type,
      prep,
      cook,
      notes,
    };
    const recordURL = `${baseURL}/${params.id}`;
    await axios.put(recordURL, { fields: currData }, config);
    props.setToggleFetch((curr) => !curr);
    history.push("/");
  }

  useEffect(() => {
    if (params.id && props.recipes.length > 0) {
      const recipe = props.recipes.find((i) => i.id === params.id);
      if (recipe) {
        setName(recipe.fields.name);
        setIngredients(recipe.fields.ingredients);
        setDirections(recipe.fields.directions);
        setType(recipe.fields.type);
        setPrep(recipe.fields.prep);
        setCook(recipe.fields.cook);
        setNotes(recipe.fields.notes);
      }
    }
  }, [props.recipes, params.id, history.location.pathname]);

  return (
    <div>
      <form className="form-main" onSubmit={handleSubmit}>
        <div className="editing">
          <div>
            <input
              className="recipe-edit-name"
              type="text"
              name=""
              id=""
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <input type="submit" value="save changes" />
        </div>
        <div className="misc-form">
          <div className="prep-time">
            <input
              type="text"
              name=""
              id=""
              value={prep}
              onChange={(e) => setPrep(e.target.value)}
            />
          </div>
          <div className="cook-time">
            <input
              type="text"
              name=""
              id=""
              value={cook}
              onChange={(e) => setCook(e.target.value)}
            />
          </div>
          <div className="type-form">
            <input list="type-list" />
            <datalist
              required
              name=""
              id="type-list"
              onChange={(e) => setType(e.target.value)}
            >
              {mealTypes.type.map((i) => {
                if (props.recipes.length != 0) {
                  if (i === type) {
                    return <option value={i}>{i}</option>;
                  } else {
                    return <option value={i}>{i}</option>;
                  }
                }
              })}
            </datalist>
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
                  defaultValue={ingredients}
                  onChange={(e) => setIngredients(e.target.value)}
                ></textarea>
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
                defaultValue={directions}
                onChange={(e) => setDirections(e.target.value)}
              ></textarea>
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
                defaultValue={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormEdit;
