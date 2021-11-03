import React from 'react';
import './style.css';
import Photos from './Photos';
export default function Child(parentVar, setvar) {
  //const Child = (parentVar, setvar) => {
  const changeHandler = (event) => {
    console.log('setvar called');
    setvar(event.target.value);
  };
  return (
    <div>
      <h1>This is child comp!</h1>
      <p>transaction of data</p>
      <div>
        <input
          onClick={changeHandler}
          type="text"
          placeholder="change val from child"
          defaultValue={parentVar}
        />
      </div>
    </div>
  );
}
