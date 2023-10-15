import * as THREE from 'three';
import Sizes from './Units/Sizes';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

import Camera from './Units/Camera';
import Renderer from './Units/Renderer';

export default class Experience {
  static instance
  constructor(canvas) {
    if (Experience.instance) {
      return Experience.instance
    }
    Experience.instance = this;
    this.canvas = canvas;
    this.scene = new THREE.Scene();
    this.sizes = new Sizes()
    this.camera = new Camera();
    this.renderer = new Renderer();
  }
}