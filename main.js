

import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as THREE from 'three';
import * as Plotly from 'plotly.js/dist/plotly.min.js';

function create3DBar(x, y, z, width, height, depth, color) {
    const geometry = new THREE.BoxGeometry(width, height, depth);
    const material = new THREE.MeshBasicMaterial({ color });
    const bar = new THREE.Mesh(geometry, material);
    bar.position.set(x, y / 2, z);
    return bar;
}
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});
const data = [
    { x: "ERA(Earned Run Avg.)", y: 5.8, z: 10 },
    { x: "Strikeouts", y: 35.5, z: 20 },
    {x: "WHIP(Walks + Hits Per Innings Pitched)", y:5.8, z: 10 },

];
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

Plotly.newPlot('myData', [{
    x: ['ERA(Earned Run Avg.)', 'Strikeouts', 'WHIP(Walks + Hits Per Innings Pitched)'],
    y: [5.8, 35.5, 5.8],
    type: 'bar'
}], {
    title: 'Baseball Stats',
    xaxis: {
        title: 'Statistic'
    },
    yaxis: {
        title: 'Value'
    }
});
data.forEach(item => {
    const bar = create3DBar(item.x, item.y, item.z, 0.8, item.y, 0.8, 0x00ff00);
    scene.add(bar);
});

camera.position.z = 5;

 {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();



const geometry = new THREE.BoxGeometry(10, 10, 10);
const material = new THREE.MeshBasicMaterial( { color: 0xFF0000 } );
const cube = new THREE.Mesh( geometry, material );
const ico = new THREE.IcosahedronGeometry(10);
const icoMaterial = new THREE.MeshPhongMaterial({ color:0xFFFFFF,shininess:75});
const icoMesh = new THREE.Mesh(ico, icoMaterial);
const pointLight = new THREE.PointLight(0xFFFFFF);
pointLight.position.set(0, -10, 10);

const ambientLight = new THREE.AmbientLight(0xffffff);
const blueTexture = new THREE.TextureLoader().load('images/blue.jpg')

scene.background = blueTexture;


const logoTexture = new THREE.TextureLoader().load('images/logo.png')


const sphereGeometry = new THREE.SphereGeometry( 10, 22, 10 );
const logoMaterial = new THREE.MeshBasicMaterial({map: logoTexture})

const logoMesh = new THREE.Mesh(sphereGeometry, logoMaterial);
const baseMaterial = new THREE.MeshBasicMaterial({map: logoTexture})

const baseMesh = new THREE.Mesh(sphereGeometry, baseMaterial);
const normalTexture = new THREE.TextureLoader().load('images/cloud.png');
const torusGeo = new THREE.TorusKnotGeometry( 5, 1, 250, 5, 9, 15 );
const torusMaterial = new THREE.MeshStandardMaterial( {
    normalMap: normalTexture,
    roughness: 0,
    metalness: .8
} );

const torusKnot = new THREE.Mesh( torusGeo, torusMaterial );
const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200,50);
const controls = new OrbitControls(camera, renderer.domElement)

ambientLight.position.set(25, -15, -400);
renderer.render(scene, camera);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(50);
camera.position.setX(-3);

scene.add( cube );
cube.position.z = -15;
cube.position.x = -15;
scene.add(icoMesh);


scene.add(icoMesh);
icoMesh.position.z= -15;
icoMesh.position.x= 15;


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


scene.add(logoMesh)

scene.add(baseMesh);


scene.add( torusKnot );
torusKnot.position.y = 20


scene.add(lightHelper)

scene.add(gridHelper)



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
