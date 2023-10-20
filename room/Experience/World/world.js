import * as THREE from 'three';
import Experience from '../Experience';
import Room from './room';


export default class World {
  constructor() {
    this.experience = new Experience();
    this.canvas = this.experience.canvas;
    this.scene = this.experience.scene;
    this.sizes = this.experience.sizes;
    this.camera = this.experience.camera;

    this.room = new Room();
  }

  resize(){

  }

  update() {

  }
}
