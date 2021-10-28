import React from 'react';
import './style.css';
import axios from 'axios';

export default function Photos() {
  const [state, setState] = React.useState('');
  function getPhotos() {
    axios.get(`https://jsonplaceholder.typicode.com/photos`).then((result) => {
      //console.log(result.data);
      setState(result.data);
    });
  }
  const handleClick = (event) => {
    if (event.target.value != undefined) {
      console.log(event.target.value);
      getPhotos();
      console.log(state);
    }
  };
  const resultList = (state || []).map((photo) => (
    <tr key={photo.id}>
      <td><a href={photo.url}>{photo.url}</a></td>
    </tr>
  ));
  return (
    <div>
      <h1>Lets see some pictures</h1>
      <p>Click the button if u want to</p>
      <button onClick={handleClick}>Click me</button>
      <div>
        <table>
          <tbody>{resultList}</tbody>
        </table>
      </div>
    </div>
  );
}
