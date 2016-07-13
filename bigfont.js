(function (exportName) {
  /**
   * @file bigfont
   *
   * A tool to enlarge the text.
   * @author
   *   zswang (http://weibo.com/zswang)
   * @version 0.0.4
   * @date 2016-07-13
   */
  var exports = exports || {};
  /*<function name="font5x7">*/
var font5x7 = (function () {
  var _____ = [0, 0, 0, 0, 0];
  var ____X = [0, 0, 0, 0, 1];
  var __X__ = [0, 0, 1, 0, 0];
  var _X_X_ = [0, 1, 0, 1, 0];
  var XXXXX = [1, 1, 1, 1, 1];
  var _XXXX = [0, 1, 1, 1, 1];
  var X_X__ = [1, 0, 1, 0, 0];
  var _XXX_ = [0, 1, 1, 1, 0];
  var __X_X = [0, 0, 1, 0, 1];
  var XXXX_ = [1, 1, 1, 1, 0];
  var XX___ = [1, 1, 0, 0, 0];
  var XX__X = [1, 1, 0, 0, 1];
  var ___X_ = [0, 0, 0, 1, 0];
  var _X___ = [0, 1, 0, 0, 0];
  var X__XX = [1, 0, 0, 1, 1];
  var ___XX = [0, 0, 0, 1, 1];
  var _XX__ = [0, 1, 1, 0, 0];
  var X__X_ = [1, 0, 0, 1, 0];
  var X_X_X = [1, 0, 1, 0, 1];
  var _XX_X = [0, 1, 1, 0, 1];
  var X____ = [1, 0, 0, 0, 0];
  var X___X = [1, 0, 0, 0, 1];
  var __XX_ = [0, 0, 1, 1, 0];
  var XXX__ = [1, 1, 1, 0, 0];
  var __XXX = [0, 0, 1, 1, 1];
  var XX_XX = [1, 1, 0, 1, 1];
  var X_XX_ = [1, 0, 1, 1, 0];
  var _X__X = [0, 1, 0, 0, 1];
  var XX_X_ = [1, 1, 0, 1, 0];
  return {
    " ": [
      _____,
      _____,
      _____,
      _____,
      _____,
      _____,
      _____
    ],
    "!": [
      __X__,
      __X__,
      __X__,
      __X__,
      __X__,
      _____,
      __X__
    ],
    "\"": [
      _X_X_,
      _X_X_,
      _X_X_,
      _____,
      _____,
      _____,
      _____
    ],
    "#": [
      _X_X_,
      _X_X_,
      XXXXX,
      _X_X_,
      XXXXX,
      _X_X_,
      _X_X_
    ],
    "$": [
      __X__,
      _XXXX,
      X_X__,
      _XXX_,
      __X_X,
      XXXX_,
      __X__
    ],
    "%": [
      XX___,
      XX__X,
      ___X_,
      __X__,
      _X___,
      X__XX,
      ___XX
    ],
    "&": [
      _XX__,
      X__X_,
      X_X__,
      _X___,
      X_X_X,
      X__X_,
      _XX_X
    ],
    "'": [
      _XX__,
      __X__,
      _X___,
      _____,
      _____,
      _____,
      _____
    ],
    "(": [
      ___X_,
      __X__,
      _X___,
      _X___,
      _X___,
      __X__,
      ___X_
    ],
    ")": [
      _X___,
      __X__,
      ___X_,
      ___X_,
      ___X_,
      __X__,
      _X___
    ],
    "*": [
      _____,
      _X_X_,
      __X__,
      XXXXX,
      __X__,
      _X_X_,
      _____
    ],
    "+": [
      _____,
      __X__,
      __X__,
      XXXXX,
      __X__,
      __X__,
      _____
    ],
    ",": [
      _____,
      _____,
      _____,
      _____,
      _XX__,
      __X__,
      _X___
    ],
    "-": [
      _____,
      _____,
      _____,
      XXXXX,
      _____,
      _____,
      _____
    ],
    ".": [
      _____,
      _____,
      _____,
      _____,
      _XX__,
      _XX__,
      _____
    ],
    "/": [
      _____,
      ____X,
      ___X_,
      __X__,
      _X___,
      X____,
      _____
    ],
    "0": [
      _XXX_,
      X___X,
      X__XX,
      X_X_X,
      XX__X,
      X___X,
      _XXX_
    ],
    "1": [
      __X__,
      _XX__,
      __X__,
      __X__,
      __X__,
      __X__,
      _XXX_
    ],
    "2": [
      _XXX_,
      X___X,
      ____X,
      ___X_,
      __X__,
      _X___,
      XXXXX
    ],
    "3": [
      XXXXX,
      ___X_,
      __X__,
      ___X_,
      ____X,
      X___X,
      _XXX_
    ],
    "4": [
      ___X_,
      __XX_,
      _X_X_,
      X__X_,
      XXXXX,
      ___X_,
      ___X_
    ],
    "5": [
      XXXXX,
      X____,
      XXXX_,
      ____X,
      ____X,
      X___X,
      _XXX_
    ],
    "6": [
      __XX_,
      _X___,
      X____,
      XXXX_,
      X___X,
      X___X,
      _XXX_
    ],
    "7": [
      XXXXX,
      ____X,
      ___X_,
      __X__,
      _X___,
      _X___,
      _X___
    ],
    "8": [
      _XXX_,
      X___X,
      X___X,
      _XXX_,
      X___X,
      X___X,
      _XXX_
    ],
    "9": [
      _XXX_,
      X___X,
      X___X,
      _XXXX,
      ____X,
      ___X_,
      _XX__
    ],
    ":": [
      _____,
      _XX__,
      _XX__,
      _____,
      _XX__,
      _XX__,
      _____
    ],
    ";": [
      _____,
      _XX__,
      _XX__,
      _____,
      _XX__,
      __X__,
      _X___
    ],
    "<": [
      ____X,
      ___X_,
      __X__,
      _X___,
      __X__,
      ___X_,
      ____X
    ],
    "=": [
      _____,
      _____,
      XXXXX,
      _____,
      XXXXX,
      _____,
      _____
    ],
    ">": [
      X____,
      _X___,
      __X__,
      ___X_,
      __X__,
      _X___,
      X____
    ],
    "?": [
      _XXX_,
      X___X,
      ____X,
      ___X_,
      __X__,
      _____,
      __X__
    ],
    "@": [
      _XXX_,
      X___X,
      ____X,
      _XX_X,
      X_X_X,
      X_X_X,
      _XXX_
    ],
    "A": [
      _XXX_,
      X___X,
      X___X,
      X___X,
      XXXXX,
      X___X,
      X___X
    ],
    "B": [
      XXXX_,
      X___X,
      X___X,
      XXXX_,
      X___X,
      X___X,
      XXXX_
    ],
    "C": [
      _XXX_,
      X___X,
      X____,
      X____,
      X____,
      X___X,
      _XXX_
    ],
    "D": [
      XXX__,
      X__X_,
      X___X,
      X___X,
      X___X,
      X__X_,
      XXX__
    ],
    "E": [
      XXXXX,
      X____,
      X____,
      XXXX_,
      X____,
      X____,
      XXXXX
    ],
    "F": [
      XXXXX,
      X____,
      X____,
      XXX__,
      X____,
      X____,
      X____
    ],
    "G": [
      _XXX_,
      X___X,
      X____,
      X____,
      X__XX,
      X___X,
      _XXX_
    ],
    "H": [
      X___X,
      X___X,
      X___X,
      XXXXX,
      X___X,
      X___X,
      X___X
    ],
    "I": [
      _XXX_,
      __X__,
      __X__,
      __X__,
      __X__,
      __X__,
      _XXX_
    ],
    "J": [
      __XXX,
      ___X_,
      ___X_,
      ___X_,
      ___X_,
      X__X_,
      _XX__
    ],
    "K": [
      X___X,
      X__X_,
      X_X__,
      XX___,
      X_X__,
      X__X_,
      X___X
    ],
    "L": [
      X____,
      X____,
      X____,
      X____,
      X____,
      X____,
      XXXXX
    ],
    "M": [
      X___X,
      XX_XX,
      X_X_X,
      X___X,
      X___X,
      X___X,
      X___X
    ],
    "N": [
      X___X,
      X___X,
      XX__X,
      X_X_X,
      X__XX,
      X___X,
      X___X
    ],
    "O": [
      _XXX_,
      X___X,
      X___X,
      X___X,
      X___X,
      X___X,
      _XXX_
    ],
    "P": [
      XXXX_,
      X___X,
      X___X,
      XXXX_,
      X____,
      X____,
      X____
    ],
    "Q": [
      _XXX_,
      X___X,
      X___X,
      X___X,
      X_X_X,
      X__X_,
      _XX_X
    ],
    "R": [
      XXXX_,
      X___X,
      X___X,
      XXXX_,
      X_X__,
      X__X_,
      X___X
    ],
    "S": [
      _XXXX,
      X____,
      X____,
      _XXX_,
      ____X,
      ____X,
      XXXX_
    ],
    "T": [
      XXXXX,
      __X__,
      __X__,
      __X__,
      __X__,
      __X__,
      __X__
    ],
    "U": [
      X___X,
      X___X,
      X___X,
      X___X,
      X___X,
      X___X,
      _XXX_
    ],
    "V": [
      X___X,
      X___X,
      X___X,
      X___X,
      X___X,
      _X_X_,
      __X__
    ],
    "W": [
      X___X,
      X___X,
      X___X,
      X_X_X,
      X_X_X,
      XX_XX,
      X___X
    ],
    "X": [
      X___X,
      X___X,
      _X_X_,
      __X__,
      _X_X_,
      X___X,
      X___X
    ],
    "Y": [
      X___X,
      X___X,
      _X_X_,
      __X__,
      __X__,
      __X__,
      __X__
    ],
    "Z": [
      XXXXX,
      ____X,
      ___X_,
      __X__,
      _X___,
      X____,
      XXXXX
    ],
    "[": [
      __XXX,
      __X__,
      __X__,
      __X__,
      __X__,
      __X__,
      __XXX
    ],
    "\\": [
      _____,
      X____,
      _X___,
      __X__,
      ___X_,
      ____X,
      _____
    ],
    "]": [
      XXX__,
      __X__,
      __X__,
      __X__,
      __X__,
      __X__,
      XXX__
    ],
    "^": [
      __X__,
      _X_X_,
      X___X,
      _____,
      _____,
      _____,
      _____
    ],
    "_": [
      _____,
      _____,
      _____,
      _____,
      _____,
      _____,
      XXXXX
    ],
    "`": [
      _X___,
      __X__,
      ___X_,
      _____,
      _____,
      _____,
      _____
    ],
    "a": [
      _____,
      _____,
      _XXX_,
      ____X,
      _XXXX,
      X___X,
      _XXXX
    ],
    "b": [
      X____,
      X____,
      X_XX_,
      XX__X,
      X___X,
      X___X,
      XXXX_
    ],
    "c": [
      _____,
      _____,
      _XXX_,
      X____,
      X____,
      X___X,
      _XXX_
    ],
    "d": [
      ____X,
      ____X,
      _XX_X,
      X__XX,
      X___X,
      X___X,
      _XXXX
    ],
    "e": [
      _____,
      _____,
      _XXX_,
      X___X,
      XXXXX,
      X____,
      _XXX_
    ],
    "f": [
      __XX_,
      _X__X,
      _X___,
      XXX__,
      _X___,
      _X___,
      _X___
    ],
    "g": [
      _____,
      _____,
      _XXXX,
      X___X,
      _XXXX,
      ____X,
      __XX_
    ],
    "h": [
      X____,
      X____,
      X_XX_,
      XX__X,
      X___X,
      X___X,
      X___X
    ],
    "i": [
      __X__,
      _____,
      _XX__,
      __X__,
      __X__,
      __X__,
      _XXX_
    ],
    "j": [
      ___X_,
      _____,
      __XX_,
      ___X_,
      ___X_,
      X__X_,
      _XX__
    ],
    "k": [
      _X___,
      _X___,
      _X__X,
      _X_X_,
      _XX__,
      _X_X_,
      _X__X
    ],
    "l": [
      _XX__,
      __X__,
      __X__,
      __X__,
      __X__,
      __X__,
      _XXX_
    ],
    "m": [
      _____,
      _____,
      XX_X_,
      X_X_X,
      X_X_X,
      X___X,
      X___X
    ],
    "n": [
      _____,
      _____,
      X_XX_,
      XX__X,
      X___X,
      X___X,
      X___X
    ],
    "o": [
      _____,
      _____,
      _XXX_,
      X___X,
      X___X,
      X___X,
      _XXX_
    ],
    "p": [
      _____,
      _____,
      XXXX_,
      X___X,
      XXXX_,
      X____,
      X____
    ],
    "q": [
      _____,
      _____,
      _XX_X,
      X__XX,
      _XXXX,
      ____X,
      ____X
    ],
    "r": [
      _____,
      _____,
      X_XX_,
      XX__X,
      X____,
      X____,
      X____
    ],
    "s": [
      _____,
      _____,
      _XXX_,
      X____,
      _XXX_,
      ____X,
      XXXX_
    ],
    "t": [
      _X___,
      _X___,
      XXX__,
      _X___,
      _X___,
      _X__X,
      __XX_
    ],
    "u": [
      _____,
      _____,
      X___X,
      X___X,
      X___X,
      X__XX,
      _XX_X
    ],
    "v": [
      _____,
      _____,
      X___X,
      X___X,
      X___X,
      _X_X_,
      __X__
    ],
    "w": [
      _____,
      _____,
      X___X,
      X___X,
      X_X_X,
      X_X_X,
      _X_X_
    ],
    "x": [
      _____,
      _____,
      X___X,
      _X_X_,
      __X__,
      _X_X_,
      X___X
    ],
    "y": [
      _____,
      _____,
      X___X,
      X___X,
      _XXXX,
      ____X,
      _XXX_
    ],
    "z": [
      _____,
      _____,
      XXXXX,
      ___X_,
      __X__,
      _X___,
      XXXXX
    ],
    "{": [
      ___X_,
      __X__,
      __X__,
      _X___,
      __X__,
      __X__,
      ___X_
    ],
    "|": [
      __X__,
      __X__,
      __X__,
      __X__,
      __X__,
      __X__,
      __X__
    ]
  };
})();
/*</function>*/
module.exports = font5x7;
  exports.font5x7 = font5x7;
  /*<function name="font10x7">*/
var font10x7 = (function () {
  var _XXXXX_ = [0, 1, 1, 1, 1, 1, 0];
  var XX___XX = [1, 1, 0, 0, 0, 1, 1];
  var XXXXXXX = [1, 1, 1, 1, 1, 1, 1];
  var XXXXXX_ = [1, 1, 1, 1, 1, 1, 0];
  var _XXXXXX = [0, 1, 1, 1, 1, 1, 1];
  var XX_____ = [1, 1, 0, 0, 0, 0, 0];
  var XXXXX__ = [1, 1, 1, 1, 1, 0, 0];
  var _XXXXXX_ = [0, 1, 1, 1, 1, 1, 1, 0];
  var XX______ = [1, 1, 0, 0, 0, 0, 0, 0];
  var XX___XXX = [1, 1, 0, 0, 0, 1, 1, 1];
  var XX____XX = [1, 1, 0, 0, 0, 0, 1, 1];
  var ___XXX_ = [0, 0, 0, 1, 1, 1, 0];
  var __XXX__ = [0, 0, 1, 1, 1, 0, 0];
  var _XXX___ = [0, 1, 1, 1, 0, 0, 0];
  var XX = [1, 1];
  var XXX____XXX = [1, 1, 1, 0, 0, 0, 0, 1, 1, 1];
  var XXXX__XXXX = [1, 1, 1, 1, 0, 0, 1, 1, 1, 1];
  var XX_XXXX_XX = [1, 1, 0, 1, 1, 1, 1, 0, 1, 1];
  var XX__XX__XX = [1, 1, 0, 0, 1, 1, 0, 0, 1, 1];
  var XX______XX = [1, 1, 0, 0, 0, 0, 0, 0, 1, 1];
  var XXX___XX = [1, 1, 1, 0, 0, 0, 1, 1];
  var XXXX__XX = [1, 1, 1, 1, 0, 0, 1, 1];
  var XX_XX_XX = [1, 1, 0, 1, 1, 0, 1, 1];
  var XX__XXXX = [1, 1, 0, 0, 1, 1, 1, 1];
  var _____XX = [0, 0, 0, 0, 0, 1, 1];
  var XXXXXXXX = [1, 1, 1, 1, 1, 1, 1, 1];
  var ___XX___ = [0, 0, 0, 1, 1, 0, 0, 0];
  var _XX__XX_ = [0, 1, 1, 0, 0, 1, 1, 0];
  var __XXXX__ = [0, 0, 1, 1, 1, 1, 0, 0];
  var _XXX__XXX_ = [0, 1, 1, 1, 0, 0, 1, 1, 1, 0];
  var __XX__XX__ = [0, 0, 1, 1, 0, 0, 1, 1, 0, 0];
  return {
    A: [
      _XXXXX_,
      XX___XX,
      XXXXXXX,
      XX___XX,
      XX___XX,
    ],
    B: [
      XXXXXX_,
      XX___XX,
      XXXXXX_,
      XX___XX,
      XXXXXX_,
    ],
    C: [
      _XXXXXX,
      XX_____,
      XX_____,
      XX_____,
      _XXXXXX,
    ],
    D: [
      XXXXXX_,
      XX___XX,
      XX___XX,
      XX___XX,
      XXXXXX_,
    ],
    E: [
      XXXXXXX,
      XX_____,
      XXXXX__,
      XX_____,
      XXXXXXX,
    ],
    F: [
      XXXXXXX,
      XX_____,
      XXXXX__,
      XX_____,
      XX_____,
    ],
    G: [
      _XXXXXX_,
      XX______,
      XX___XXX,
      XX____XX,
      _XXXXXX_,
    ],
    H: [
      XX___XX,
      XX___XX,
      XXXXXXX,
      XX___XX,
      XX___XX,
    ],
    I: [
      XX,
      XX,
      XX,
      XX,
      XX,
    ],
    M: [
      XXX____XXX,
      XXXX__XXXX,
      XX_XXXX_XX,
      XX__XX__XX,
      XX______XX,
    ],
    N: [
      XXX___XX,
      XXXX__XX,
      XX_XX_XX,
      XX__XXXX,
      XX___XXX,
    ],
    P: [
      XXXXXX_,
      XX___XX,
      XXXXXX_,
      XX_____,
      XX_____,
    ],
    R: [
      XXXXXX_,
      XX___XX,
      XXXXXX_,
      XX___XX,
      XX___XX,
    ],
    S: [
      XXXXXXX,
      XX_____,
      XXXXXXX,
      _____XX,
      XXXXXXX,
    ],
    T: [
      XXXXXXXX,
      ___XX___,
      ___XX___,
      ___XX___,
      ___XX___,
    ],
    V: [
      XX____XX,
      XX____XX,
      XX____XX,
      _XX__XX_,
      __XXXX__,
    ],
    W: [
      XX______XX,
      XX__XX__XX,
      XX_XXXX_XX,
      _XXX__XXX_,
      __XX__XX__,
    ],
    Z: [
      XXXXXXX,
      ___XXX_,
      __XXX__,
      _XXX___,
      XXXXXXX,
    ],
  };
})();
/*</function>*/
module.exports = font10x7;
  exports.font10x7 = font10x7;
  /**
   * 获取字符点阵图案
   *
   * @param {String} c 字符
   * @param {Object=} options 配置项
   * @param {Object=} options.fonts 字体点阵词典 key: 字符, value: 点阵数组
   * @param {Number=} options.lineStyle -1: none, 0: '║', 1: '│'
   * @param {Number=} options.blockStyle -1: none, 0: '█', 1: '▓', 2: '▒', 3: '░'
   * @param {String=} options.space 空白字符
   * @return {String} 返回点阵图案字符串
   * @example lattice():default
    ```js
    console.log(bigfont.lattice('H'));
    // > █╗  █╗
    // > █║  █║
    // > █║  █║
    // > █████║
    // > █╔══█║
    // > █║  █║
    // > █║  █║
    // > ╚╝  ╚╝
    ```
   * @example lattice():space: '.'
    ```js
    console.log(bigfont.lattice('A', {space: '.'}));
    // > .███╗.
    // > █╬══█╗
    // > █║..█║
    // > █║..█║
    // > █████║
    // > █╔══█║
    // > █║..█║
    // > ╚╝..╚╝
    ```
   * @example lattice():lineStyle: -1
    ```js
    console.log(bigfont.lattice('A', {space: '.', lineStyle: -1}));
    // > .███.
    // > █...█
    // > █...█
    // > █...█
    // > █████
    // > █...█
    // > █...█
    ```
   * @example lattice():blockStyle: -1
    ```js
    console.log(bigfont.lattice('A', {space: '.', blockStyle: -1}));
    // > .╔══╗.
    // > ╔╬══╬╗
    // > ║║..║║
    // > ║║..║║
    // > ║╚══╝║
    // > ║╔══╗║
    // > ║║..║║
    // > ╚╝..╚╝
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
    '1,1,1,1': '╬',
    '1,1,0,0': '╚',
    '1,0,1,0': '║',
    '1,0,0,1': '╝',
    '0,1,1,0': '╔',
    '0,1,0,1': '═',
    '0,0,1,1': '╗'
  }, {
    '1,1,1,1': '┼',
    '1,1,0,0': '└',
    '1,0,1,0': '│',
    '1,0,0,1': '┘',
    '0,1,1,0': '┌',
    '0,1,0,1': '─',
    '0,0,1,1': '┐'
  }];
  function lattice(c, options) {
    if (!c) {
      return '';
    }
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
    var space = options.space || ' ';
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
        });
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
        if (blockChar && grid[y] && grid[y][x]) {
          lines[y] += blockChar;
        }
        else if (lineChars) {
          lines[y] += lineChars[dict[[x, y]]] || space;
        }
        else {
          lines[y] += space;
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
   * @param {Object=} options 配置项
   * @param {Object=} options.fonts 字体点阵词典 key: 字符 value: 点阵数组
   * @param {Number=} options.lineStyle -1: 'none', 0: solid 1: double
   * @param {Number=} options.blockStyle -1: none 0: '█', 1: '▓', 2: '▒', 3: '░'
   * @param {String=} options.space 空白字符
   * @param {String=} options.prefix 前缀字符
   * @param {String=} options.suffix 后缀字符
   * @example large():space: '.', prefix: '* ', suffix: ' *'
    ```js
    console.log(bigfont.large('BIG', {space: '.', suffix: ' *'}));
    // > ████╗..███╗..███╗. *
    // > █╔══█╗.╚█╔╝.█╬══█╗ *
    // > █║..█║..█║..█║..╚╝ *
    // > ████╬╝..█║..█║.... *
    // > █╔══█╗..█║..█║.██╗ *
    // > █║..█║..█║..█║.╚█║ *
    // > ████╬╝.███╗.╚███╬╝ *
    // > ╚═══╝..╚══╝..╚══╝. *
    ```
   * @example large():blockStyle: 3, prefix: '* ', suffix: ' *'
    ```js
    console.log(bigfont.large('FONT', {blockStyle: 3, prefix: '* ', suffix: ' *'}));
    // > * ░░░░░╗ ░░░╗ ░╗  ░╗░░░░░╗ *
    // > * ░╔═══╝░╬══░╗░║  ░║╚═░╔═╝ *
    // > * ░║    ░║  ░║░░╗ ░║  ░║   *
    // > * ░░░╗  ░║  ░║░╔░╗░║  ░║   *
    // > * ░╔═╝  ░║  ░║░║╚░░║  ░║   *
    // > * ░║    ░║  ░║░║ ╚░║  ░║   *
    // > * ░║    ╚░░░╬╝░║  ░║  ░║   *
    // > * ╚╝     ╚══╝ ╚╝  ╚╝  ╚╝   *
    ```
   * @example large():font: 10x7
    ```js
    console.log(bigfont.large('ZSWANG', {fonts: bigfont.font10x7, prefix: '* ', suffix: ' *'}));
    // > * ███████╗███████╗██╗     ██╗ █████╗ ███╗  ██╗ ██████╗  *
    // > * ╚══███╔╝██╔════╝██║ ██╗ ██║██╔══██╗████╗ ██║██╔════╝  *
    // > *   ███╔╝ ███████╗██║████╗██║███████║██╔██╗██║██║  ███╗ *
    // > *  ███╔╝  ╚════██║╚███╔═███╔╝██╔══██║██║╚████║██║  ╚██║ *
    // > * ███████╗███████║ ╚██║ ██╔╝ ██║  ██║██║ ╚███║╚██████╔╝ *
    // > * ╚══════╝╚══════╝  ╚═╝ ╚═╝  ╚═╝  ╚═╝╚═╝  ╚══╝ ╚═════╝  *
   ```
   * @example large():none
    ```js
    console.log(JSON.stringify(bigfont.large()));
    // > ""
    ```
   * @example large():blockStyle: -1, lineStyle: -1
    ```js
    console.log(JSON.stringify(bigfont.large('none', {blockStyle: -1, lineStyle: -1})));
    // > ""
    ```
   * @return {string} 返回放大后的文字
   */
  function large(text, options) {
    if (!text) {
      return '';
    }
    options = options || {};
    var lines = [];
    var space = options.lineStyle < 0 ? ' ' : '';
    var prefix = options.prefix || '';
    var suffix = options.suffix || '';
    text.split('').forEach(function (c) {
      var temp = lattice(c, options);
      temp.split(/\n/).forEach(function (text, index) {
        if (!lines[index]) {
          lines[index] = '';
        }
        if (text) {
          lines[index] += space + text;
        }
      });
    });
    if (prefix || suffix) {
      lines = lines.map(function (line) {
        return prefix + line + suffix;
      });
    }
    return lines.join('\n');
  }
  exports.large = large;
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
})('bigfont');