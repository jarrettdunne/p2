import React from 'react';

import totalTime from "../../data/functions"

import "./DisplayMain.css"

function DisplayMain(props) {
  return (
    <div className="display-main-item">
      <h4 className="display-name">{props.recipe.fields.name}</h4>
      <div className="display-main-item-content">
        <p>{props.recipe.fields.type}</p>
        <p>{totalTime(props.recipe.fields.prep, props.recipe.fields.cook)}</p>
      </div>
    </div>
  );
}

export default DisplayMain;