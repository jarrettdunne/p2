import React from 'react';
import { Link, Route, useHistory } from "react-router-dom"

import { useEffect, useState } from "react"

import axios from "axios"

import Navbar from "./components/navbar/Navbar.jsx"
import DisplayMain from "./components/display/DisplayMain.jsx"
import DisplayFull from "./components/display/DisplayFull.jsx"
import FormEdit from "./components/form/FormEdit.jsx"
import FormAdd from "./components/form/FormAdd.jsx"
import Footer from "./components/footer/Footer.jsx"

import './App.css';

import { baseURL, config } from "./services"
import mealTypes from "./data/mealTypes.json";

function App() {
  const [data, setData] = useState([])
  const [type, setType] = useState("")
  const [toggleFetch, setToggleFetch] = useState(false)
  const [toggleNav, setToggleNav] = useState(false)

  const history = useHistory()

  useEffect(() => {
    setType("all")
  }, [])

  useEffect(() => {
    setToggleNav((curr) => !curr)
  }, [history.location.pathname])

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(baseURL, config)
      setData(response.data.records)
    }

    getData()
  }, [toggleFetch])

  return (
    <div>
      <header className="navbar">
        <Navbar recipes={data} toggleNav={toggleNav} />
      </header>
      <main>
        <Route exact path="/">
          <div>
            <select id="type-list" onChange={(e) => setType(e.target.value)} >
              <option>{"all"}</option>
              {mealTypes.type.map((i) => (
                <option value={i}>{i}</option>
              ))}
            </select>
          </div>
          <div className="display-main">
            {data.map((i) => {
              if (type === i.fields.type ) {
                return (
                  <Link to={`/recipe/${i.id}`}>
                    <DisplayMain key={i.id} recipe={i} />
                  </Link>
                )
              } else if (type === "all") {
                return (
                <Link to={`/recipe/${i.id}`}>
                  <DisplayMain key={i.id} recipe={i} />
                </Link>
                )
              }
            }
            )}
          </div>
        </Route>
        <Route exact path="/recipe/:id" >
          <DisplayFull recipes={data} />
        </Route>
        <Route exact path="/recipe/:id/edit">
          <FormEdit recipes={data} setToggleFetch={setToggleFetch} />
        </Route>
        <Route exact path="/add">
          <FormAdd setToggleFetch={setToggleFetch} />
        </Route>
      </main>
      <Footer />
    </div>
  );
}

export default App;