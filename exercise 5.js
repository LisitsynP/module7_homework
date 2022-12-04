class ElDevice {
  constructor(power) {
    this.consumedPower = power;
    this.powerSwitch = "on";
  }
  calculatePower() {
    let clcPower;
    if (this.powerSwitch === "on") {
      clcPower = this.consumedPower;
      this.usePower = clcPower;
      return console.log(
        `${this.typeDevice} сейчас в состоянии ${this.powerSwitch} и его потребляемая мощность ${this.usePower}`
      );
    } else if (this.powerSwitch === "off") {
      clcPower = 0;
      this.usePower = clcPower;
      return console.log(
        `${this.typeDevice} сейчас в состоянии ${this.powerSwitch} и его потребляемая мощность ${this.usePower}`
      );
    }
  }
}
const Pc = new ElDevice(300);
Pc.hdd = "1 TB";
Pc.typeDevice = "PC";
const Lamp = new ElDevice(20);
Lamp.color = "Black";
Lamp.typeDevice = "Lamp";
Lamp.powerSwitch = "off";
console.log(Lamp, Pc);
Pc.calculatePower();
Lamp.calculatePower();
