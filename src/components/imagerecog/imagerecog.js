import React from 'react';
import './imagerecog.css';

const ImageRecog=({imageUrl,faceBox})=>{
  return (
    <div className="center ">
    <div className="absolute">
	    <img id="inputImage" src={imageUrl} alt="" width="auto" height='500px'/>
	    <div className="bounding_box" style={{top:faceBox.topRow,right:faceBox.rightCol,bottom:faceBox.bottomRow,left:faceBox.leftCol}}></div>
    </div>
    </div>
  );
}

export default ImageRecog;
