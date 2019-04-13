import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import './searchbox.css'

const SearchBox=()=>{
  return (
    <div className="center">
    <div className="shadow-3 pa4">
      <input className="input f4 Consolas" type="text"/>
      <Button id="bt1" variant="outline-danger">Button</Button>
    </div>
    </div>
  );
}

export default SearchBox;
