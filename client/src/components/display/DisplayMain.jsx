import React from 'react';

import totalTime from "../../data/functions"

import "./DisplayMain.css"

function DisplayMain(props) {
  return (
    <div className="display-main-item">
      <h3 className="display-name">{props.recipe.fields.name}</h3>
      <div className="display-main-item-content">
        <h4>{props.recipe.fields.type}</h4>
        <p>{totalTime(props.recipe.fields.prep, props.recipe.fields.cook)}</p>
      </div>
    </div>
  );
}

export default DisplayMain;