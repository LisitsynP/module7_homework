function ElDevice(power) {
  this["Consumed Power"] = power;
  this.switch = "on";
}
const pc = new ElDevice(300);
pc.hdd = "1 TB";
pc["Type Device"] = "PC";
const lamp = new ElDevice(20);
lamp.color = "Black";
lamp["Type Device"] = "Lamp";
lamp.switch = "off";

ElDevice.prototype.calculatePower = function () {
  let clcPower;
  if (this.switch === "on") {
    clcPower = this["Consumed Power"];
    this.usePower = clcPower;
    return console.log(
      `${this["Type Device"]} сейчас в состоянии ${this.switch} и его потребляемая мощность ${this.usePower}`
    );
  } else if (this.switch === "off") {
    clcPower = 0;
    this.usePower = clcPower;
    return console.log(
      `${this["Type Device"]} сейчас в состоянии ${this.switch} и его потребляемая мощность ${this.usePower}`
    );
  }
};
pc.calculatePower();
lamp.calculatePower();
