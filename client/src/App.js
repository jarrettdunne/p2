import React from 'react';
import { Link, Route } from "react-router-dom"

import {useEffect, useState} from "react"

import axios from "axios"

import Navbar from "./components/navbar/Navbar.jsx"
import DisplayMain from "./components/display/DisplayMain.jsx"
import DisplayFull from "./components/display/DisplayFull.jsx"
import FormEdit from "./components/form/FormEdit.jsx"
import FormAdd from "./components/form/FormAdd.jsx"
import Footer from "./components/footer/Footer.jsx"

import './App.css';

import { baseURL, config } from "./services"

function App() {
  const [data, setData] = useState([])
  const [toggleFetch, setToggleFetch] = useState(false)
  
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(baseURL, config)
      setData(response)
    }
  })

  return (
    <div>
      <div className="navbar">
        <Navbar recipes={data}/>
      </div>
      <Route exact path="/">
        <div>
          <option></option>
        </div>
        <div className="display-main">
          {data.map((i) => (
            <Link to={`/recipe/${i.id}`}>
              <DisplayMain recipe={i} />
            </Link>
          ))}
        </div>
      </Route>
      <Route exact path="/recipe/:id" >
        <DisplayFull recipes={data}/>
      </Route>
      <Route exact path="/recipe/:id/edit">
        <FormEdit recipes={data}/>
      </Route>
      <Route exact path="/add">
        <FormAdd />
      </Route>
      <Footer />
    </div>
  );
}

export default App;