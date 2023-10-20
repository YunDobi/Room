import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import Experience from '../Experience';

export default class Room {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;

    let loader = new GLTFLoader();
    loader.load('../../model/room.gltf', (gltf) => {
      const light = new THREE.AmbientLight( 0xffffff ); // soft white light

      return(
        this.scene.add(gltf.scene),
        this.scene.add(light)

      )
    }
    )
  }

  resize() {}

  update() {}
}
