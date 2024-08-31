

31-08-2024 21:19

Status:

Tags:



# Learn Three.js by Building 5 projects

The initial idea for now is to take notes as I watch the tutorial. Write thoughts and specific sections of interest. These might go into anki. No coding anything just yet. First watch the whole thing, then try to build while googling what I don't know at all. 

Get LiveServer in VSCode to get a quick feedback loop and gratification. 

The index has two things related to three js: an import map and loading the js file.

import * as THREE from "three";

For a scene three JS needs 3 things:
1. a renderer
2. a camera
3. a scene object

A renderer is just THREE.WebGLRenderer()

A perspective camera requires 4 things:
1. a field of view- 75 degree
2. an aspect- width/height
3. a near- 0.1 units 
4. a far- any value greater

you can move the camera a lil further away with changing camera position:
	camera.position.z

scene= new THREE.Scene();

renderer.render(scene,camera) // to start rendering

when you add an item you also need to set the renderer size as well as append the domElement to the document.

you can pass simple geometries that are built in as primitives using:
new THREE.icosahedronGeometry(size, detail)
it needs a material too which should have stuff like color

then just make the mesh.

you need to add the object to the scene. literally- scene.add(item);

but for animating and rendering it's better to do it in a loop, so the cool thing is actually to put it in a function which requests the animation frame then renders. Call said function once then you're good to go.


There's all types of options like setting flatshading to true, using hemisphere lights, rotating the image

We have addons to import such as orbitcontrol by:
import {OrbitControls} from "jsm/controls/OrbitControls.js"

then you can use it to move dom elements with a simple:
new OrbitControls(camera, renderer.domElement)
which would allow you to scroll and zoom in and out

The coolest thing is allowing damping so that when you click and flick even after releasing there's some extra movement that makes it look so much more natural. Just enable then set the damping factor to a small number. Be sure to update controls in the animate too.





# References

https://www.youtube.com/watch?v=KtYby2QN0kQ
https://threejs.org/docs/
