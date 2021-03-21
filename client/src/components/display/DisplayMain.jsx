import React from 'react';

import totalTime from "../../data/functions"

import "./DisplayMain.css"

function DisplayMain(props) {
  return (
    <div className="display-main-item">
      <h2 className="display-name">{props.recipe.fields.name}</h2>
      <div className="display-main-item-content">
        <h4>{props.recipe.fields.type}</h4>
        <p>{totalTime(props.recipe.fields.prep, props.recipe.fields.cook)}</p>
      </div>
    </div>
  );
}

export default DisplayMain;