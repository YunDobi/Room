import {EventEmitter} from 'events';

export default class Time extends EventEmitter {
  constructor() {
    super()
    this.start = Date.now()
    this.current = this.start;
    //after animation is run, then time out the elapsed
    this.elapsed = 0;
    //time between each frame
    this.delta = 16;

    this.update()
  }

  update() {
    const CurrentTime = Date.now();
    this.delta = CurrentTime - this.current;
    this.current = CurrentTime;
    this.elapsed = this.current - this.start;

    // console.log(this.delta);
    this.emit("update");
    window.requestAnimationFrame(() => this.update())
  }
}