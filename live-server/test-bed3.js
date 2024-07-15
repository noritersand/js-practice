const { log } = console;

var arr = [
  {
    hi: 'ho'
  }
];

function getSome(ar) {
  return ar[0];
}

getSome(arr).hi = 'yo';
log(arr);