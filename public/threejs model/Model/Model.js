
import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/pin/three@v0.129.0-XYKMzgCzb23GRdwfqj2I/mode=imports/unoptimized/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

let 
    model,
    neck,
    waist,
    possibleAnims,
    mixer,
    idle,
    clock = new THREE.Clock(),
    currentlyAnimating = false;

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize( window.innerWidth/2.5, window.innerHeight/1.5 );
// document.body.appendChild( renderer.domElement );

const controls = new OrbitControls( camera, renderer.domElement );
// scene.add(controls);
controls.target.set(0,1.2,0);
controls.enablePan =false;
controls.enableZoom=false;
//Add lights to the scene, so we can actually see the 3D model
const topLight = new THREE.DirectionalLight(0xffffff, 1); // (color, intensity)
topLight.position.set(500, 500, 500) //top-left-ish
topLight.castShadow = true;
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0x333333,  5 );
scene.add(ambientLight);
document.getElementById("container3D").appendChild(renderer.domElement);
camera.position.y =1.2;

let mesh;
let clips;
var gltfLoader = new GLTFLoader();
      gltfLoader.load(
  '../Abhi.glb',
  ( gltf ) => {
      // called when the resource is loaded
      gltf.scene.scale.set(1.4,1.4,1.4);
      gltf.scene.position.set(0,-.2,0);
      gltf.castShadow = true; // this mesh will cast shadows
      gltf.receiveShadow = true; // this mesh will receive shadows
      model = gltf.scene;
            let fileAnimations = gltf.animations;

            model.traverse(o => {
                if (o.isMesh) {
                    o.castShadow = true;
                    o.receiveShadow = true;
                }
            });
            scene.add(gltf.scene);

            mixer = new THREE.AnimationMixer(model);
            console.log(fileAnimations);
            let idleAnim = THREE.AnimationClip.findByName(fileAnimations, 'IdleV4.2(maya_head)');
            console.log(idleAnim);
            idle = mixer.clipAction(idleAnim);
            idle.play();
  },
  ( xhr ) => {
      // called while loading is progressing
    //   console.log( `${( xhr.loaded / xhr.total * 100 )}% loaded` );
  },
  ( error ) => {
      // called when loading has errors
      console.error( 'An error happened', error );
  },
);  
camera.position.z = 2;
window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth/2.5, window.innerHeight/1.5);
});
function animate() {
	renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );

function update(){
  if (mixer) {
      mixer.update(clock.getDelta());
    }
    
  if (resizeRenderToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
  }
  renderer.render(scene, camera);
  requestAnimationFrame(update);
}
update();
function resizeRenderToDisplaySize(renderer) {
  const canvas = renderer.domElement;
  let width = window.innerWidth;
  let height = window.innerHeight;
  let canvasPixelWidth = canvas.width / window.devicePixelRatio;
  let canvasPixelHeight = canvas.height / window.devicePixelRatio;

  const needResize = canvasPixelWidth !== width || canvasPixelHeight !== height;
  if (needResize) {
    renderer.setSize(window.innerWidth/2.5, window.innerHeight/1.5);
  }
  return needResize;
}

// const scene = new THREE.Scene();
// //create a new camera with positions and angles
// const camera = new THREE.PerspectiveCamera(45, .9, 0.1, 1000);

// //Keep track of the mouse position, so we can make the eye move
// let mouseX = window.innerWidth / 2;
// let mouseY = window.innerHeight / 2;

// //Keep the 3D object on a global variable so we can access it later
// let object;

// //OrbitControls allow the camera to move around the scene
// let controls;

// //Set which object to render
// let objToRender = 'eye';

// //Instantiate a loader for the .gltf file
// const loader = new GLTFLoader();
// //Load the file
// loader.load(
//   `../Abhi.glb`,
//   function (gltf) {
//     //If the file is loaded, add it to the scene
      
//       gltf.castShadow = true; // this mesh will cast shadows
//       gltf.receiveShadow = true; // this mesh will receive shadows
//      var mixer = new THREE.AnimationMixer( gltf.scene );
// 	var action = mixer.clipAction( gltf.animations[ 0 ] );
// 	action.play();
//       scene.add(gltf.scene);
//   },
//   function (xhr) {
//     //While it is loading, log the progress
//     console.log((xhr.loaded / xhr.total * 100) + '% loaded');
//   },
//   function (error) {
//     //If there is an error, log it
//     console.error(error);
//   }
// );

// //Instantiate a new renderer and set its size
// const renderer = new THREE.WebGLRenderer({Alpha: true}); //Alpha: true allows for the transparent background
// renderer.setSize(window.innerWidth/3, window.innerHeight);

// //Add the renderer to the DOM
// document.getElementById("container3D").appendChild(renderer.domElement);

// //Set how far the camera will be from the 3D model
// camera.position.y  =1;
// camera.position.z  =4;

// //Add lights to the scene, so we can actually see the 3D model
// const topLight = new THREE.DirectionalLight(0xffffff, 1); // (color, intensity)
// topLight.position.set(500, 500, 500) //top-left-ish
// topLight.castShadow = true;
// scene.add(topLight);

// const ambientLight = new THREE.AmbientLight(0x333333,5);
// scene.add(ambientLight);

// //This adds controls to the camera, so we can rotate / zoom it with the mouse
// if (objToRender === "dino") {
//   controls = new OrbitControls(camera, renderer.domElement);
// }

// //Render the scene
// function animate() {
//   requestAnimationFrame(animate);
//   //Here we could add some code to update the scene, adding some automatic movement

//   //Make the eye move
//   if (object && objToRender === "eye") {
//     //I've played with the constants here until it looked good 
//     object.rotation.y = -3 + mouseX / window.innerWidth * 3;
//     object.rotation.x = -1.2 + mouseY * 2.5 / window.innerHeight;
//   }
//   renderer.render(scene, camera);
// }

// //Add a listener to the window, so we can resize the window and the camera
// window.addEventListener("resize", function () {
//   camera.aspect = .9;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth/3, window.innerHeight);
// });

// //add mouse position listener, so we can make the eye move
// document.onmousemove = (e) => {
//   mouseX = e.clientX;
//   mouseY = e.clientY;
// }

// //Start the 3D rendering
// animate();