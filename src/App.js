import React, { Component } from 'react';
import Pane from './components/pane/pane';
import Logo from './components/logo/logo';
import SearchBox from './components/searchbox/searchbox';
import ImageRecog from './components/imagerecog/imagerecog';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';

const obj={
      particles: {
        number:{
          value:300,
          density: {
            enable: true,
            value_are:800
          }
        }
      }};

const app = new Clarifai.App({
 apiKey: '5f32cefbdcc0413594da51b2aa3bce41'
});

class App extends Component {

  constructor()
  {
    super();
    this.state={
      input:'',
      imageUrl:'' 
    };
  }

  onChangeFunc=(event)=>{
    this.setState({input:event.target.value});
  }

 onClickFunc=()=>{
    this.setState({imageUrl:this.state.input});
    app.models.predict(Clarifai.FACE_DETECT_MODEL,this.state.input).then(
      function(response) {
        console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
      },
      function(err) {
     
      }
    );
  } 

  render() {
    return (
      <div >
        <Particles  params={obj} className="particlebg" />
        <Pane/>
        <Logo/>
        <div className="center heading1">
        <p>Lokesh, your rank is .....</p>
        </div>
        <div className="center heading1">
        <p>#5</p>
        </div>
        <div className="center heading2">
        <p>This magic brain will detect faces in your image</p>
        </div>
        <SearchBox onClickFunc={this.onClickFunc} onChangeFunc={this.onChangeFunc}/>
        <div className="ma4">
          <ImageRecog imageUrl={this.state.imageUrl}/>
        </div>
      </div>
        
    );
  }
}

export default App;
