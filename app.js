import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';

// const scene = new THREE.Scene()
// scene.add(new THREE.AxesHelper(5))

// // const light = new THREE.SpotLight();
// // light.position.set(5, 5, 5)
// // scene.add(light);

// const camera = new THREE.PerspectiveCamera(
//     75,
//     window.innerWidth / window.innerHeight,
//     0.1,
//     1000
// )
// camera.position.z = 1100
// camera.position.set(0,2.5,2.5);
// camera.lookAt(new THREE.Vector3(0,0,0));

// const renderer = new THREE.WebGLRenderer()
// renderer.physicallyCorrectLights = true
// // renderer.shadowMap.enabled = true
// // renderer.outputEncoding = THREE.sRGBEncoding
// renderer.setSize(window.innerWidth, window.innerHeight)
// document.body.appendChild(renderer.domElement)
// renderer.render(scene, camera);

// const controls = new OrbitControls(camera, renderer.domElement)
// controls.enableDamping = true

// const loader = new GLTFLoader();


// const loadedData = await loader.loadAsync('./model/room.gltf',function ( gltf ) {
//   model = gltf.scene.children[0];
//   console.log(model)
//   model.scale.set(0.5,0.5,0.5);
//   scene.add( gltf.scene );
// },
// undefined, function ( error ) {
//   console.error( error );
// } 
// );

function init() {

  var scene = new THREE.Scene();
  
  var box = getBox(1, 1, 1);
  
  scene.add(box);
  
  var camera = new THREE.PerspectiveCamera(70, 
  window.innerWidth/window.innerHeight, 0.1, 1000 ); // Specify camera type like this
  camera.position.set(0,2.5,2.5); // Set position like this
  camera.lookAt(new THREE.Vector3(0,0,0)); // Set look at coordinate like this
  
  var renderer = new THREE.WebGLRenderer();
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  
  renderer.render(scene, camera);
  }
  
  function getBox(w, h, d) {
  var geometry = new THREE.BoxGeometry(w, h, d);
  var material = new THREE.MeshBasicMaterial({
      color : 0x00ff00
  });
  
  var mesh = new THREE.Mesh(geometry, material);
  
  return mesh;
  } 
  
  init();

console.log(loadedData)