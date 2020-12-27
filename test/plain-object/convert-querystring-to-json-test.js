const assert = require('assert');
const { log } = console;

// var serializeString = $('#someForm').serialize();
function convertQuerystringToJSON(txt) {
  var params = txt.split('&');
  var objArry = [];
  for (var i in params) {
    var ele = params[i];
    var splitEle = ele.split('=');
    var obj = {};
    obj[splitEle[0]] = splitEle[1];
    objArry.push(obj);
  }
  return objArry;
}
var querystring = 'proditNo=IT369&proditNo=IT371&proditNo=IT370';
log('before:', querystring);
log('after:', JSON.stringify(convertQuerystringToJSON(querystring))); // [{"proditNo":"IT369"},{"proditNo":"IT371"},{"proditNo":"IT370"}]
