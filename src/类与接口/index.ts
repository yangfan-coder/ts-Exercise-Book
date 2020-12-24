// interface Alarm {
//   alert(): void;
// }

// class Door {}

// class SecurityDoor extends Door implements Alarm {
//   alert() {
//     console.log('1');
//   }
// }

// class Car implements Alarm {
//   alert() {
//     console.log('22');
//   }
// }

/* 继承多个接口类型 */
// interface Alarm {
//   alert(): void;
// }

// interface Light {
//   lighton(): void;
//   lightOff(): void;
// }

// class Car implements Alarm, Light {
//   alert() {}
//   lighton() {}
//   lightOff() {}
// }

/* 接口继承接口 */

// interface Alarm {
//   alert(): void;
// }

// interface Lign extends Alarm {
//   lightOn(): void;
//   lightOff(): void;
// }

// class Car implements Lign {
//   lightOn() {}
//   lightOff() {}
//   alert() {}
// }

// const d = new Car();
// console.log(d);

class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

interface Point3d extends Point {
  z: number;
}

let Point3d: Point3d = { x: 1, y: 2, z: 3 };

console.log(Point3d);
