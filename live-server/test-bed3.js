const { log } = console;

function go(n) {
  {
    var n = 1;
    {
      n = n;
      ++n;
    }
    ++n
  }
  log(n);
}

go();