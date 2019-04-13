import React from 'react';

const ImageRecog=({imageUrl})=>{
  return (
    <div className="center">
    <img src={imageUrl} alt="face" width="auto" height='500px'/>
    </div>
  );
}

export default ImageRecog;
