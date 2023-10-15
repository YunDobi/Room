export default class Sizes {
  constructor() {
    this.width = window.innerHeight;
    this.height = window.innerHeight;
    this.aspect = this.width/this.height;
    this.pixelRatio = Math.min(window.devicePixelRatio, 2)

    window.addEventListener("resize", () => {
      this.width = window.innerHeight;
      this.height = window.innerHeight;
      this.aspect = this.width/this.height;
      this.pixelRatio = Math.min(window.devicePixelRatio, 2)
    })
  }

}