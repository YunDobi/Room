export default class Sizes {
  constructor() {
    this.width = window.innerHeight;
    this.height = window.innerHeight;
    this.aspect = this.width/this.height;
  }
}