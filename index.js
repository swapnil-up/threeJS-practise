import * as THREE from "three";

const scene = new THREE.Scene();

const w = window.innerWidth;
const h = window.innerHeight;
const cam = new THREE.PerspectiveCamera(75, w / h, 0.5, 10);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);
renderer.setAnimationLoop(animate);

const geo = new THREE.IcosahedronGeometry(2, 8);
const mat = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const earth = new THREE.Mesh(geo, mat);
scene.add(earth);

cam.position.z = 5;

function animate() {
  renderer.render(scene, cam);
}
