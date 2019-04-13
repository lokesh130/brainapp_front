import React from 'react';
import Button from 'react-bootstrap/Button'
import 'tachyons';

const Pane=()=>{
  return (
      <div className="fr w-10 pa3 ">
          <Button variant="outline-primary" href="#">Sign Out</Button>
      </div>
  );
}

export default Pane;
