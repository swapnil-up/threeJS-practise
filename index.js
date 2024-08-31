import * as THREE from "three";


const w = window.innerWidth;
const h = window.innerHeight; 

const renderer= new THREE.WebGLRenderer;
renderer.setSize(w,h);
document.body.appendChild(renderer.domElement);

const camera= new THREE.PerspectiveCamera(75, w/h, 0.1, 10);

const scene = new THREE.Scene();

const geometry= new THREE.IcosahedronGeometry(2,2);
const material= new THREE.MeshBasicMaterial({color:0xff3495});
const mesh= new THREE.Mesh(geometry,material);
scene.add(mesh);


camera.position.z=5 
renderer.render(scene,camera);