import React from 'react';
import Button from 'react-bootstrap/Button'
import 'tachyons';

const Pane=({active,changeState})=>{

if(active==='home')
  return (
      <div className="fr w-10 pa3 ">
          <Button onClick={()=>changeState("signin")} variant="outline-primary" href="#">Sign Out</Button>
      </div>
  );
else if(active==='signin')
  return (
      <div className="fr w-10 pa3 ">
          <Button onClick={()=>changeState("register")} variant="outline-primary" href="#">Register</Button>
      </div>
  );
else
  return (
      <div className="fr w-10 pa3 ">
          <Button onClick={()=>changeState("signin")} variant="outline-primary" href="#">Sign in</Button>
      </div>
  );

}

export default Pane;
