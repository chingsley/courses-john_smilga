import React, { useState } from 'react'

function getRandomString(length: number = 5) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function UseStateBasics() {
  const [title, setTitle] = useState('Random Title');
  const handleClick = () => {
    setTitle(getRandomString(12));
  }
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button className="btn" onClick={handleClick}>Change Title</button>
    </React.Fragment>
  )
}

export default UseStateBasics