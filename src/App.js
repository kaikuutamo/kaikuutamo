import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import Header from './components/header';
import FrontPage from './components/frontpage';

import kuu from './pictures2/kuu.png'

var THREE = require('three');

const OrbitControls = require('three-orbitcontrols');


class App extends React.Component {



componentDidMount () {

/*--------- 3d -------------*/

// this is the scene
var scene = new THREE.Scene();

// this is the camera
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


camera.position.x = 1000;
camera.position.y = 1000;
camera.position.z = 899;


// this is the canvas
var renderer = new THREE.WebGLRenderer({ alpha: true } );

// here are the controls

const controls = new OrbitControls(camera, renderer.domElement);

controls.target.set(1000, 1000, 900);
controls.autoRotate = true;
controls.autoRotateSpeed = 0.5;


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
var geometry = new THREE.SphereGeometry( 0.9, 10, 10 );

// material for the ball
var material = new THREE.MeshLambertMaterial({color: "#f2efe8"})
// let's combine these two


function createStars ()  {

  var x, y, z;


  x = Math.random() * 2000;
  y = Math.random() * 2000;
  z = Math.random() * 2000;
  
  if (x > 650 && x < 1350 && y > 650 && y < 1350 && z > 650 && z < 1350) {
    z = z - 1000;
  }

  var mesh = new THREE.Mesh(geometry, material);
  
  mesh.position.x = x;
  mesh.position.y = y;
  mesh.position.z = z;
  
  scene.add(mesh);

}

// Image loader

var map = new THREE.TextureLoader().load( kuu );
var material2 = new THREE.SpriteMaterial( { map: map, color: 0xffffff } );
var sprite = new THREE.Sprite( material2 );
sprite.scale.set(3, 3, 1)
sprite.position.set(1000, 1000, 907)
scene.add( sprite );

var sprite2 = new THREE.Sprite( material2 );
sprite2.position.set(1000, 1000, 893)
sprite2.scale.set(3, 3, 1)
scene.add( sprite2 );




for (var k = 0; k<3000; k++) {
  createStars();
}


// the light

var light = new THREE.PointLight("white", 10000, 10000);

light.position.x = 1000;
light.position.y = 1000;
light.position.z = 1000;

scene.add(light)


// let's render the scene and the camera




function animate () {



controls.update();



renderer.render(scene, camera);

requestAnimationFrame(animate);

}

animate();


/*--------------------------------------*/


}

  render() {



  return (
    <BrowserRouter>
    <div className="App">
    <div id="background"></div>
      <Header />
      <Route exact path='/' component={FrontPage}/>
    </div>
    </BrowserRouter>
  );
}
}


export default App;
