import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import Header from './components/header';
import FrontPage from './components/frontpage';

var THREE = require('three');

class App extends React.Component {



componentDidMount () {

/*--------- 3d -------------*/
// this is the scene
var scene = new THREE.Scene();

// this is the camera
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

camera.position.z = 600;
camera.position.y = 650;
camera.position.x = 750;


// this is the canvas
var renderer = new THREE.WebGLRenderer();

renderer.setClearColor("#2c2a2a");

renderer.setSize(window.innerWidth, window.innerHeight);

var background = document.getElementById("background");

background.appendChild(renderer.domElement);

window.addEventListener('resize', function () {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
})



// ball
var geometry = new THREE.SphereGeometry( 0.8, 10, 10 );

// material for the ball
var material = new THREE.MeshLambertMaterial({color: "#f2efe8"})
// let's combine these two

for (var k = 0; k<1000; k++) {

var x = Math.random() * 1800;
var y = Math.random() * 1200;
var z = Math.random() * 250;

var mesh = new THREE.Mesh(geometry, material);

mesh.position.x = x;
mesh.position.y = y;
mesh.position.z = z;

scene.add(mesh);


}





var light = new THREE.PointLight("white", 1000, 1000);
light.position.z = 600;
light.position.y = 650;
light.position.x = 750;
scene.add(light)

// let's render the scene and the camera

var distance = 0.05;
var status = "in";

function animate () {
  
if (status === "in") {
  camera.position.z = camera.position.z - distance;
  
  if (camera.position.z < 550) {
    status = "out";
  }
}

if (status === "out") {
  camera.position.z = camera.position.z + distance;
  if (camera.position.z > 600) {
    status = "in";
  }
}

  
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
