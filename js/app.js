class VendingMachine {
  constructor(name) {
    this.name = name;
    this.candy1 = 75;
    this.candy2 = 75;
    this.chips1 = 82;
  }
  vencandy1() {
    this.candy1--;
  }
  vencandy2() {
    this.candy2--;
  }
  venchips1() {
    this.chips1--;
  }
  render() {
    return `
        <div>${this.name}</div>
        <div>Candy 1: ${this.candy1}</div>
        <div>Candy 2: ${this.candy2}</div>
        <div>Chips 1: ${this.chips1}</div>
      `;
  }
}

let sweetRainbows = new VendingMachine("Skittles");
let machinediv = document.getElementById("machinediv");
machinediv.innerHTML = sweetRainbows.render();

function Skittles() {
  if (sweetRainbows.candy1 > 0) {
    sweetRainbows.vencandy1();
  }
  machinediv.innerHTML = sweetRainbows.render();
}

function AlmondJoy() {
  if (sweetRainbows.candy2 > 0) {
    sweetRainbows.vencandy2();
  }
  machinediv.innerHTML = sweetRainbows.render();
}

function Pringles() {
  if (sweetRainbows.chips1 > 0) {
    sweetRainbows.venchips1();
  }
  machinediv.innerHTML = sweetRainbows.render();
}
