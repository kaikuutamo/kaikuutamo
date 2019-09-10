import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import Header from './components/header';
import FrontPage from './components/frontpage';
import Who from './components/who'
import Services from './components/services'
import Shows from './components/shows'
import Pictures from './components/pictures'
import Videos from './components/videos'
import Articles from './components/articles'
import Media from './components/media'
import Offer from './components/offer'
import Contact from './components/contact'

import kuu from './pictures2/kuu.png'

import pilvi1 from './pictures2/cloud1.png'
import pilvi2 from './pictures2/cloud2.png'
import pilvi3 from './pictures2/cloud3.png'

var THREE = require('three');

const OrbitControls = require('three-orbitcontrols');


class App extends React.Component {



componentDidMount () {

/*------------------ 3d --------------------*/

// this is the scene
var scene = new THREE.Scene();

// this is the camera
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


camera.position.x = 0;
camera.position.y = 0;
camera.position.z = -2.5;


// this is the canvas
var renderer = new THREE.WebGLRenderer({ alpha: true } );

// here are the controls

const controls = new OrbitControls(camera, renderer.domElement);

controls.target.set(0, 0, -1);
controls.autoRotate = true;
controls.autoRotateSpeed = 0.18;


/*
controls.enableDamping = true
controls.dampingFactor = 0.25
controls.enableZoom = false
*/



renderer.setClearColor( 0x000000, 0 );

renderer.setSize(window.innerWidth, window.innerHeight);

var background = document.getElementById("background");

background.appendChild(renderer.domElement);

window.addEventListener('resize', function () {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
})



// ball
var geometry = new THREE.SphereGeometry( 1.3, 10, 10 );

// material for the ball
var material = new THREE.MeshLambertMaterial({color: "white"})
// let's combine these two

var x, y, z;




function createStars ()  {
 
  
  var u = Math.random();
  var v = Math.random();
  var theta = u * 2.0 * Math.PI;
  var phi = Math.acos(2.0 * v - 1.0);
  var r = Math.random() * 200 + 800;
  var sinTheta = Math.sin(theta);
  var cosTheta = Math.cos(theta);
  var sinPhi = Math.sin(phi);
  var cosPhi = Math.cos(phi);
  x = r * sinPhi * cosTheta;
  y = r * sinPhi * sinTheta;
  z = r * cosPhi;


  var mesh = new THREE.Mesh(geometry, material);
  
  mesh.position.x = x;
  mesh.position.y = y;
  mesh.position.z = z;
  
 
    scene.add(mesh);

  
}



// Image loader

var map = new THREE.TextureLoader().load( kuu );
var material2 = new THREE.SpriteMaterial( {
   map: map,
   color: 0xffffff
   
  } );

  var material3 = new THREE.SpriteMaterial( {
    map: map,
    color: 0xffffff
    
   } );
var sprite = new THREE.Sprite( material2 );
sprite.scale.set(10, 10, 1)
sprite.position.set(0, 0, 50)
scene.add( sprite );



var sprite2 = new THREE.Sprite( material3 );
sprite2.position.set(0, 0, -50)
sprite2.scale.set(10, 10, 1)
scene.add( sprite2 );




for (var k = 0; k<2000; k++) {
  createStars();
}


// the light

var light = new THREE.PointLight("white", 1000, 0, 0);

light.position.x = 0;
light.position.y = 0;
light.position.z = 0;

scene.add(light)


// let's render the scene and the camera


function animate () {


  material3.rotation -= 0.01;

controls.update();



renderer.render(scene, camera);

 // requestAnimationFrame(animate);

}

animate();


/*--------------------------------------*/



}

  render() {



  return (
    <BrowserRouter>
    <div className="App">
    <div id="background">
    </div>
    <div id="clouds">
     <img alt="cloud" id="cloud1" src={pilvi1}></img>
     <img alt="cloud" id="cloud2" src={pilvi2}></img>
     <img alt="cloud" id="cloud3" src={pilvi3}></img>
    </div>
      <Header />
      <Route exact path='/' component={FrontPage}/>
      <Route exact path='/who' component={Who}/>
      <Route exact path='/services' component={Services}/>
      <Route exact path='/shows' component={Shows}/>
      <Route exact path='/pictures' component={Pictures}/>
      <Route exact path='/videos' component={Videos}/>
      <Route exact path='/articles' component={Articles}/>
      <Route exact path='/media' component={Media}/>
      <Route exact path='/offer' component={Offer}/>
      <Route exact path='/contact' component={Contact}/>
    </div>
    </BrowserRouter>
  );
}
}


export default App;
