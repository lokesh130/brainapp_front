import React from 'react';
import Button from 'react-bootstrap/Button';
import './searchbox.css'

const SearchBox=({onClickFunc,onChangeFunc})=>{
  return (
    <div className="center">
    <div className="shadow-3 pa4">
      <input className="input f4 Consolas" type="text" onChange={onChangeFunc}/>
      <Button id="bt1" variant="outline-danger" onClick={onClickFunc}>Button</Button>
    </div>
    </div>
  );
}

export default SearchBox;
