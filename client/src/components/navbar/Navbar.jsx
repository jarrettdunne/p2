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

  let backImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAAAe1BMVEX///8dHR0AAAAVFRUYGBgUFBQRERHu7u7q6urm5uZZWVllZWXy8vLs7OxfX1/k5OR4eHhqamoLCwshISFeXl4tLS1/f38lJSVVVVVubm7e3t6ampqRkZEoKCh5eXmtra0/Pz+EhIQxMTHHx8dMTEzS0tI4ODi2traCgoKaaijJAAADPUlEQVR4nO3d2VLbQBBGYWasNcgxyGF3MASyvP8ThlxQJFjdWP9Njyrne4KuU5J6zCKfnAAAsHDD/vzh4uF0P0QPsii7nJuqqpqcH6NHWY72IqdXedtHj7MQXVOnN6tMt2N09Sr9rf4WPdESvK/2cp/eRc9UvsNqqRqjhyreujmo9nK5PUWPVbjJainvoucq23S1NJ5FD1a0broa2VzdarpaGi+jRytYVxnVUt5Hz1autVkt5U30cMVaH57XXtXP0cMVy6mW8vfo6UrVWtvgTzV+dmRwr7Wb6OlK5WyDlM+jpyvVOlFtPqopuEMVLdUEVFNQTUE1RcsOFbSptqudRk9XKqopqKYYvG1ANQPVFO7Jg2oGnmuKdku1+aimoJpi4LkmoJqCagqqKdgGivaKavMNXrXP0dOVimqKwXuuUc3g7lCqGbjWFDzXFFRTDF8bqs3mVvsSPV2p3DuUagZ3h1LNQDUFd6iCbaCgmoJqCrfap+jpSjVcUW0+9+RBNYN78qCagW2gGC54rs1HNQXVFG616+jpSuVuA6oZOOUq+EQl+UE1wWOm2nwD1RQ/zWzsUMduNKo1VHOcWdl4mannkatN4Tzb2Ag2Nqnmkm4Sfgsvab032NHN1I5ON+5TU2u8q5luPveNbHQz0U1jv+eaveBxu/G34aaJ7yah2xHW3jmEbib3/EY3k/ENJXT7gPltG3RzufuU/403udcb3UzuOYRupm6s6CZYZ7op3HMv3UzWd6XRzcde0PReN94dbuq9+5Rupt47h9DN1HnnELqZ6KZxPy/QzdR75166mdinGrcb33Bocs8hdDP13j6lm4luGvf8RjcT15uGvaDZ0E3idjuLnq5cG+/5RjeTuxfoZqKbhm4anm8a9qmGbhruUw3dNG63++jpykU3Dd00dNPQTeN2u4yerlx009BN43a7i56uXG632+jpyuV0a/j3etut3S130cMVzO6W99GzlczsNv6KHq1oVreRnyG5jG4jH7F8093yLnqu0k12y0/RYxVvqhuvUf3YYTfu0WO877a6ip5oGf7tVvGR9Eib+u19qiPVjnefc12lqs75ZoieZUm6u+tt3j7v+uhBAAD/td80LitZWYSexAAAAABJRU5ErkJggg=="
  backImg = "https://www.pinclipart.com/picdir/big/110-1105746_label-back-normal-comments-ios-back-arrow-png.png"

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
            <div>
              {name.toLowerCase()}
            </div>
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