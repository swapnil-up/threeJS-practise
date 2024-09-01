import * as THREE from "three";
import { OrbitControls } from "jsm/controls/OrbitControls.js";
import getStarfield from "./getStarfield.js"

const scene = new THREE.Scene();

const w = window.innerWidth;
const h = window.innerHeight;
const cam = new THREE.PerspectiveCamera(75, w / h, 0.5, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);
renderer.setAnimationLoop(animate);

const controls = new OrbitControls(cam, renderer.domElement);
controls.enableDamping=true;
controls.update;

const loader= new THREE.TextureLoader();
const earthGroup=new THREE.Group();
const geo = new THREE.SphereGeometry(2,32,32);
const mat = new THREE.MeshBasicMaterial({
  map: loader.load("00_earthmap1k.jpg"),
});
const earth = new THREE.Mesh(geo, mat);
earthGroup.add(earth);
scene.add(earthGroup);

earthGroup.rotation.z = (23.4 * Math.PI) / 100;

const stars=getStarfield({numStars:5000});
scene.add(stars);

cam.position.z = 10;

scene.background=new THREE.Color(0x000000)

function animate() {
  earth.rotation.y += 0.001;
  controls.update();
  renderer.render(scene, cam);
}


// function getStarfield({ numStars }) {
//   const starGeo = new THREE.BufferGeometry();
//   const positions = [];

//   for (let i = 0; i < numStars; i++) {
//     const x = THREE.MathUtils.randFloatSpread(2000);
//     const y = THREE.MathUtils.randFloatSpread(2000);
//     const z = THREE.MathUtils.randFloatSpread(2000);
//     positions.push(x, y, z);
//   }

//   starGeo.setAttribute(
//     "position",
//     new THREE.Float32BufferAttribute(positions, 3)
//   );

//   const starMaterial = new THREE.PointsMaterial({
//     color: 0x888888,
//     size:1
//   });

//   return new THREE.Points(starGeo, starMaterial);
// }
