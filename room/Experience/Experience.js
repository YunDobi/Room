import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export default class Experience {
  constructor(canvas) {
    this.canvas = canvas;
    console.log("Hello");

    let scene = new THREE.Scene();
    let renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true
    })
    // renderer.outputEncoding = THREE.sRGBEncoding;

    let camera = new THREE.PerspectiveCamera(30, 1);
    camera.position.set(0,1,15)

    scene.background = new THREE.Color('white');
    const light = new THREE.AmbientLight( 0xffffff ); // soft white light
    light.position.set( 5, 5, 50 );
    scene.add( light );

    let loader = new GLTFLoader();
    loader.load('./model/room.gltf', function(gltf) {
      gltf.scene.rotation.y += 5.5;
      gltf.scene.rotation.x += 0.5;
      scene.add(gltf.scene);
      renderer.render(scene, camera);
      function animate(){
        requestAnimationFrame(animate)
        gltf.scene.rotation.y += 0.005

        renderer.render(scene, camera)
      }
      animate();
    })
  }
}