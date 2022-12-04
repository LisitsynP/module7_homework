const testObj = {
  1: 1,
  2: "two",
  3: true,
};
function showObj(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(`ключ: ${key} , свойсто: ${obj[key]}`);
    }
  }
}
showObj(testObj);
