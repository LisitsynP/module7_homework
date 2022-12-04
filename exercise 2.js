const testObj = {
  1: 1,
  2: 'two',
  3: true,
  word: 333,
};
function findeStr(str, obj) {
  console.log(str in obj);
}
findeStr('word', testObj);
