const { log } = console;

function getSomeWithVar() {
  var fn;
  for (var i = 0; i < 1; ++i) {
    fn = () => {
      console.log(i);
    }
  }
  return fn;
}
getSomeWithVar()(); // 1

function getSomeWithLet() {
  var fn;
  for (let i = 0; i < 1; ++i) {
    fn = () => {
      console.log(i);
    }
  }
  return fn;
}
getSomeWithLet()(); // 0
