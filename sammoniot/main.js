

import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});
renderer.render(scene, camera);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(50);
camera.position.setX(-3);
const geometry = new THREE.BoxGeometry(10, 10, 10);
const material = new THREE.MeshBasicMaterial( { color: 0xFF0000 } );
const cube = new THREE.Mesh( geometry, material );
const ico = new THREE.IcosahedronGeometry(10);
const icoMaterial = new THREE.MeshPhongMaterial({ color:0xFFFFFF});
const icoMesh = new THREE.Mesh(ico, icoMaterial);
scene.add( cube );
cube.position.z = -15;
cube.position.x = -15;
scene.add(icoMesh);


scene.add(icoMesh);
icoMesh.position.z= -15;
icoMesh.position.x= 15;
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(0, -10, 10);

const ambientLight = new THREE.AmbientLight(0xffffff);
ambientLight.position.set(25, -15, -400);

scene.add(pointLight);
scene.add(ambientLight);

function animate() {
    requestAnimationFrame( animate );
    // slowly rotate the cube:
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    // rotate the icosahedron a little faster in the opposite direction:
    icoMesh.rotation.z += -0.03
    icoMesh.rotation.y += -0.03

    renderer.render( scene, camera );
}
animate()
const blueTexture = new THREE.TextureLoader().load('images/blue.jpg')
const cloudTexture= new THREE.TextureLoader().load('images/cloud.png')
scene.background = blueTexture;

scene.background = baseTexture;

const sphereGeometry = new THREE.SphereGeometry( 10, 22, 10 );

const baseMaterial = new THREE.MeshBasicMaterial({map: baseTexture})

const baseMesh = new THREE.Mesh(sphereGeometry, baseMaterial);
scene.add(baseMesh);
const normalTexture = new THREE.TextureLoader().load('images/cloud.png');
const torusGeo = new THREE.TorusKnotGeometry( 5, 1, 250, 5, 9, 15 );
const torusMaterial = new THREE.MeshStandardMaterial( {
    normalMap: normalTexture,
    roughness: 0,
    metalness: .8
} );

const torusKnot = new THREE.Mesh( torusGeo, torusMaterial );

scene.add( torusKnot );
torusKnot.position.y = 20
const lightHelper = new THREE.PointLightHelper(pointLight);

scene.add(lightHelper)
const gridHelper = new THREE.GridHelper(200,50);

scene.add(gridHelper)
const controls = new OrbitControls(camera, renderer.domElement)


document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
