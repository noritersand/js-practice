// const { log } = console;

function changeStyle() {
  $('#tgt').css('color', 'red');

  var dfd = $.Deferred();
  setTimeout(function() {
    // dfd.resolve();
  }, 100);

  window.dfd = dfd;
  return dfd;
}

function fn() {
  $.when(
    changeStyle()
  ).then(function() {
    alert('색 바뀐 후에 뜨는 경고창');
  });
}