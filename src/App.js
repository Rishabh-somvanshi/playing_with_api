import React from 'react';
import './style.css';
import Photos from './Photos';
import Child from './Child';
export default function App() {
  const [parentVar, setvar] = React.useState('parent ki value h abhi');
  // const changeVar = () => {
  //   setVar;
  // };
  const sendDataToParent = (index) => {
    // the callback. Use a better name
    console.log(index);
    setvar(index);
  };
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Child />
      <Photos parentVar={parentVar} setvar={setvar} />
    </div>
  );
}
