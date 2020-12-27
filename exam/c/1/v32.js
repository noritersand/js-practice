const assert = require('assert');
const expect = require('chai').expect
const { log } = console;
const scores = {
  'A+': 12, 'A0': 11, 'A-': 10, 'B+': 9, 'B0': 8, 'B-': 7, 'C+': 6, 'C0': 5, 'C-': 4, 'D+': 3, 'D0': 2, 'D-': 1, 'F': 0
}

/**
 * 
 * @param {string[]} a 
 */
function fn(a) {
  let newarr = [];
  a.forEach((ele, idx) => {
    ele = ele.split(' ');
    ele.push(idx);
    newarr.push(ele);
  });

  for (let i of newarr) {
    log('target:', i);
  }
  log('start');

  let answer = [];

  while (newarr.length) {
    log('while: newarr[0]:', newarr[0]);
    let founds = [];
    for (let i = 1; i < newarr.length; ++i) {
      log('for: i:', i, 'newarr[i]:', newarr[i]);
      if (newarr[0][0] !== newarr[i][0]) {
        continue;
      }
      founds.push(newarr[i]);
      newarr.splice(i, 1);
      --i;
    }
    
    if (founds.length) {
      log('fisrt founds:', founds[0]);
      founds.push(newarr[0]);
      founds.sort((a, b) => {
        // log('a', a);
        var temp = scores[b[1]] - scores[a[1]];
        temp = temp == 0 ? a[2] - a[3] : temp;
        return temp;
      });
      log('fisrt founds after sort:', founds[0]);
      log('founds list:', founds);
      answer.push(founds[0]);
      newarr.splice(0, 1);
    }

    log('found nothing');
    answer.push(newarr[0]);
    newarr.splice(0, 1);
  }

  answer.sort((a, b) => a[2] - b[2]);
  return answer;
}

describe('test suite', function() {
  // it('exceptions', function() {
  //   assert.ok(!false);
  // });
  // it('#1', function() {
  //   assert.strictEqual(fn(["DM0106 D-", "PL6677 B+", "DM0106 B+", "DM0106 B+", "PL6677 C0", "GP0000 A0"]), ["GP0000 A0", "PL6677 B+", "DM0106 B+"]);
  // });
  // it('#2', function() {
  //   assert.strictEqual(fn(["DS7651 A0", "CA0055 D+", "AI5543 C0", "OS1808 B-", "DS7651 B+", "AI0001 F", "DB0001 B-", "AI5543 D+", "DS7651 A+", "OS1808 B-"]), ["DS7651 A+", "OS1808 B-", "DB0001 B-", "AI5543 C0", "CA0055 D+", "AI0001 F"]);
  // });
});


