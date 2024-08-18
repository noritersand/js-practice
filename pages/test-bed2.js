const { log } = console;

function getSomeWithVar() {
  var n = 0;
  var fn = () => {
    console.log(n);
  }
  ++n;
  return fn;
}

function getSomeWithLet() {
  let n = 0;
  var fn = () => {
    console.log(n);
  }
  ++n;
  return fn;
}

getSomeWithVar()(); // 1
getSomeWithLet()(); // 1
