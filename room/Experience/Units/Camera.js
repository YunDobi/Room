import Experience from '../Experience';
import * as THREE from "three";

export default class Camera {
  constructor() {
    this.experience = new Experience();
    this.size = this.experience.sizes;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;
    // console.log(this.experience, this.size, this.scene, this.canvas)

    this.createPerspectiveCamera();
    this.createOrthographicCamera();
  }

  createPerspectiveCamera() {
    this.perspectiveCamera = new THREE.PerspectiveCamera(
      35,
      this.size.aspect,
      0.1,
      1000
    );

    this.scene.add(this.perspectiveCamera);
    this.perspectiveCamera.position.z = 15;
    this.perspectiveCamera.position.y = 2;
    // this.scene.background = new THREE.Color('white');
  }

  createOrthographicCamera() {
    this.orthographicCamera = new THREE.OrthographicCamera(
      (-this.size.aspect * this.size.frustrum) / 2,
      (-this.size.aspect * this.size.frustrum) / 2,
      this.size.frustrum/2,
      -this.size.frustrum/2,
      -100,
      100
    );
    this.scene.add(this.orthographicCamera);
  }

  resize() {
    //resize the perspective camera
    this.createPerspectiveCamera.aspect = this.size.aspect;
    this.perspectiveCamera.updateProjectionMatrix()


    //resize the orthographicCamera
    this.orthographicCamera.left = (-this.size.aspect * this.size.frustrum) / 2;
    this.orthographicCamera.right = (this.size.aspect * this.size.frustrum) / 2;
    this.orthographicCamera.top =  this.size.frustrum/2;
    this.orthographicCamera.bottom =  -this.size.frustrum/2;
    this.orthographicCamera.updateProjectionMatrix()
  }

  update() {

  }
}
