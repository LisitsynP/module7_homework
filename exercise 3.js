let objWithOutPrototype;
function createObj() {
  objWithOutPrototype = Object.create(null);
}
createObj();
console.log(objWithOutPrototype);
