import Experience from '../Experience';
import * as THREE from "three";

export default class Renderer {
  constructor() {
    this.experience = new Experience();
    this.size = this.experience.sizes;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;
    this.camera = this.experience.camera;
console.log(this.camera, this.camera.perspectiveCamera)

    this.setRenderer();
  }

  setRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true
    })
    this.renderer.outputEncoding = THREE.sRGBEncoding;
  }

  resize() {
    this.renderer.setSize(this.size.width, this.size.height)
    this.renderer.setPixelRatio(this.size.pixelRatio)
  }

  update() {
    this.renderer.render(this.scene, this.camera.perspectiveCamera)
  }
}
