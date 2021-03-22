import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import { useHistory, useParams } from "react-router-dom"

import "./Navbar.css"

function Navbar(props) {
  const [name, setName] = useState("")
  const [ingredients, setIngredients] = useState("")
  const [directions, setDirections] = useState("")
  const [type, setType] = useState("")
  const [prep, setPrep] = useState("")
  const [cook, setCook] = useState("")
  const [notes, setNotes] = useState("")

  const [path, setPath] = useState("")
  const [mod, setMod] = useState("")
  
  const params = useParams()
  const history = useHistory()

  useEffect(() => {
    setPath(history.location.pathname)
    console.log(history.location.pathname)
    const path = history.location.pathname.split('/')
    const id = path[path.length - 1]
    if (id && props.recipes.length > 0) {
      const recipe = props.recipes.find((i) => i.id === id)
      if (recipe) {
        setName(recipe.fields.name)
        setIngredients(recipe.fields.ingredients)
        setDirections(recipe.fields.directions)
        setType(recipe.fields.type)
        setPrep(recipe.fields.prep)
        setCook(recipe.fields.cook)
        setNotes(recipe.fields.notes)
        setMod("edit")
      }
    } else {
      setName("")
      setMod("add")
    }
  })

  const backImg = "https://www.pinclipart.com/picdir/big/110-1105746_label-back-normal-comments-ios-back-arrow-png.png"

  const nothing = () => {
    const path = history.location.pathname.split('/')
    let id = path[path.length - 1]
    if (history.location.pathname === "/") {
      return (
        <div className="home-div">
          <h1 className="home-div-title">RECIPES</h1>
          <Link to="/add">
            <h2 className="home-div-title-add">{`  +add`}</h2>
          </Link>
        </div>
      )
    } else if (history.location.pathname.includes("edit")) {
      id = path[path.length - 2]
      return (
        <h2 className="navbar-full">
          <Link to={`/recipe/${id}`}>
            <img
              className="back-icon"
              src={backImg}
              alt="back"
            />
            <p className="navbar-edit-header">
              recipe
            </p>
          </Link>
        </h2>
      )
    } else if (history.location.pathname.includes("recipe")) {
      const path = history.location.pathname.split('/')
      const id = path[path.length - 1]
      return (
        <div className="navbar-home-edit">
          <Link to="/">
            <h2 className="navbar-full ">
              <img
                className="back-icon"
                src={backImg}
                alt="back"
              />
              <div>
                home
              </div>
            </h2>
          </Link>
        </div>
      )
    } else if (history.location.pathname.includes("add")) {
      return (
        <Link to="/">
          <h2 className="navbar-full">
            <img
              className="back-icon"
              src={backImg}
              alt="back"
            />
            <div>
              home
            </div>
          </h2>
        </Link>
      )
    } else {
      return (
        <div className="navbar-main">
          <h2 className="navbar-full">
            <Link to="/">
              <img
                className="back-icon"
                src={backImg}
                alt="back"
              />
            </Link>
            {name.toLowerCase()}
            <Link to={`/${mod}`}>
              {`${mod}`}
            </Link>
          </h2>
        </div>
      )
    }
  }

  return (
    <div>
      {nothing()}
    </div>
  );
}


export default Navbar;