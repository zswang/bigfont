(function (exportName) {
  var exports = exports || {};

  /*<jdists fndep="font5x7" import="font5x7.js">*/
  var font5x7 = require('./font5x7');
  /*</jdists>*/
  exports.font5x7 = font5x7;

  /**
   * 获取字符点阵图案
   *
   * @param {String} c 字符
   * @param {Object} options 配置项
   * @param {Object} options.fonts 字体点阵词典 key: 字符 value: 点阵数组
   * @param {Number} options.lineStyle -1: 'none', 0: solid 1: double
   * @param {Number} options.blockStyle -1: none 0: '█', 1: '▓', 2: '▒', 3: '░'
   * @return {String} 返回点阵图案字符串
   * @example lattice():default
    ```js
    console.log(bigfont.lattice('A'));
    // >  ███┓
    // > █╋━━█┓
    // > █┃  █┃
    // > █┃  █┃
    // > █████┃
    // > █┏━━█┃
    // > █┃  █┃
    // > ┗┛  ┗┛
    ```
   * @example lattice():lineStyle: -1
    ```js
    console.log(bigfont.lattice('A'));
    // >  ███
    // > █   █
    // > █   █
    // > █   █
    // > █████
    // > █   █
    // > █   █
    ```
   */

  /**
   * 偏移坐标
   *
   * 0 1
   *  +
   * 3 2
   *
   *  0
   * 3+1
   *  2
   * @item: [x, y, flag1, flag2]
   */
  var offsets = [
    [+0, +0, 1, 2], // ╔
    [+1, +0, 2, 3], // ╗
    [+1, +1, 0, 3], // ╝
    [+0, +1, 0, 1], // ╚
  ];

  /**
   * 表格线
   */
  var lineCharDict = [{
    '0,0,0,0': ' ',
    '1,1,1,1': '╋',
    '1,1,0,0': '┗',
    '1,0,1,0': '┃',
    '1,0,0,1': '┛',
    '0,1,1,0': '┏',
    '0,1,0,1': '━',
    '0,0,1,1': '┓',
  }, {
    '0,0,0,0': ' ',
    '1,1,1,1': '╬',
    '1,1,0,0': '╚',
    '1,0,1,0': '║',
    '1,0,0,1': '╝',
    '0,1,1,0': '╔',
    '0,1,0,1': '═',
    '0,0,1,1': '╗',
  }];

  function lattice(c, options) {
    options = options || {};
    var fonts = options.fonts || font5x7;
    var grid = fonts[c];
    if (!grid) {
      return '';
    }
    var lineChars = lineCharDict[options.lineStyle || 0];
    var blockChar = '█▓▒░' [options.blockStyle || 0];
    if (!lineChars && !blockChar) {
      return '';
    }

    var dict = {};
    if (lineChars) {
      grid.forEach(function (line, row) {
        line.forEach(function (flag, col) {
          if (flag !== 1) {
            return;
          }
          offsets.forEach(function (offset) {
            var key = [col + offset[0], row + offset[1]];
            if (!dict[key]) {
              dict[key] = [0, 0, 0, 0];
            }
            dict[key][offset[2]] = (dict[key][offset[2]] + 1) % 2;
            dict[key][offset[3]] = (dict[key][offset[3]] + 1) % 2;
          });
        })
      });
    }
    var height = grid.length;
    var width = grid[0].length;
    if (lineChars) { // 存在线条
      height++;
      width++;
    }

    var lines = [];
    for (var y = 0; y < height; y++) {
      for (var x = 0; x < width; x++) {
        if (!lines[y]) {
          lines[y] = '';
        }
        if (grid[y] && grid[y][x]) {
          lines[y] += blockChar
        }
        else if (lineChars) {
          lines[y] += lineChars[dict[[x, y]]] || ' ';
        }
        else {
          lines[y] += ' ';
        }
      }
    }
    return lines.join('\n');
  }
  exports.lattice = lattice;

  /**
   * 放大文字
   *
   * @param {string} text 文字
   * @param {Object} options 配置项
   * @return {string} 返回放大后的文字
   */
  function large(text, options) {
    options = options || {};
    var lines = [];
    var space = options.lineStyle < 0 ? ' ' : '';
    text.split('').forEach(function (c) {
      var temp = lattice(c, options);
      temp.split(/\n/).forEach(function (text, index) {
        if (!text) {
          return;
        }
        if (!lines[index]) {
          lines[index] = '';
        }
        lines[index] += space + text;
      });
    });
    return lines.join('\n');
  }

  exports.large = large;

  // var msg = '';
  // // msg = lattice('A', {
  // //   lineStyle: -1
  // // });
  // msg = large('BIGFONT', {
  //   lineStyle: 1
  // });
  // require('fs').writeFileSync('1.txt', msg);

  if (typeof define === 'function') {
    if (define.amd) {
      define(function () {
        return exports;
      });
    }
  }
  else if (typeof module !== 'undefined' && module.exports) {
    module.exports = exports;
  }
  else {
    window[exportName] = exports;
  }

})('csst');