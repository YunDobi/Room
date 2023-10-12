import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export default class Experience {
  static instance
  constructor(canvas) {
    if (Experience.instance) {
      return Experience.instance
    }
    Experience.instance = this;
    this.canvas = canvas;
  }
}