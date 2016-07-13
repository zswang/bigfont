var bigfont = require('../');

describe("src/bigfont.js", function () {
  var assert = require('should');
  var util = require('util');
  var examplejs_printLines;
  function examplejs_print() {
    examplejs_printLines.push(util.format.apply(util, arguments));
  }

  it("lattice():default", function() {
    examplejs_printLines = [];
    examplejs_print(bigfont.lattice('H'));
    assert.equal(examplejs_printLines.join("\n"), "█╗  █╗\n█║  █║\n█║  █║\n█████║\n█╔══█║\n█║  █║\n█║  █║\n╚╝  ╚╝"); examplejs_printLines = [];
  });
  it("lattice():space: '.'", function() {
    examplejs_printLines = [];
    examplejs_print(bigfont.lattice('A', {space: '.'}));
    assert.equal(examplejs_printLines.join("\n"), ".███╗.\n█╬══█╗\n█║..█║\n█║..█║\n█████║\n█╔══█║\n█║..█║\n╚╝..╚╝"); examplejs_printLines = [];
  });
  it("lattice():lineStyle: -1", function() {
    examplejs_printLines = [];
    examplejs_print(bigfont.lattice('A', {space: '.', lineStyle: -1}));
    assert.equal(examplejs_printLines.join("\n"), ".███.\n█...█\n█...█\n█...█\n█████\n█...█\n█...█"); examplejs_printLines = [];
  });
  it("lattice():blockStyle: -1", function() {
    examplejs_printLines = [];
    examplejs_print(bigfont.lattice('A', {space: '.', blockStyle: -1}));
    assert.equal(examplejs_printLines.join("\n"), ".╔══╗.\n╔╬══╬╗\n║║..║║\n║║..║║\n║╚══╝║\n║╔══╗║\n║║..║║\n╚╝..╚╝"); examplejs_printLines = [];
  });
  it("large():space: '.', prefix: '* ', suffix: ' *'", function() {
    examplejs_printLines = [];
    examplejs_print(bigfont.large('BIG', {space: '.', suffix: ' *'}));
    assert.equal(examplejs_printLines.join("\n"), "████╗..███╗..███╗. *\n█╔══█╗.╚█╔╝.█╬══█╗ *\n█║..█║..█║..█║..╚╝ *\n████╬╝..█║..█║.... *\n█╔══█╗..█║..█║.██╗ *\n█║..█║..█║..█║.╚█║ *\n████╬╝.███╗.╚███╬╝ *\n╚═══╝..╚══╝..╚══╝. *"); examplejs_printLines = [];
  });
  it("large():blockStyle: 3, prefix: '* ', suffix: ' *'", function() {
    examplejs_printLines = [];
    examplejs_print(bigfont.large('FONT', {blockStyle: 3, prefix: '* ', suffix: ' *'}));
    assert.equal(examplejs_printLines.join("\n"), "* ░░░░░╗ ░░░╗ ░╗  ░╗░░░░░╗ *\n* ░╔═══╝░╬══░╗░║  ░║╚═░╔═╝ *\n* ░║    ░║  ░║░░╗ ░║  ░║   *\n* ░░░╗  ░║  ░║░╔░╗░║  ░║   *\n* ░╔═╝  ░║  ░║░║╚░░║  ░║   *\n* ░║    ░║  ░║░║ ╚░║  ░║   *\n* ░║    ╚░░░╬╝░║  ░║  ░║   *\n* ╚╝     ╚══╝ ╚╝  ╚╝  ╚╝   *"); examplejs_printLines = [];
  });
  it("large():font: 10x7", function() {
    examplejs_printLines = [];
    examplejs_print(bigfont.large('ZSWANG', {fonts: bigfont.font10x7, prefix: '* ', suffix: ' *'}));
    assert.equal(examplejs_printLines.join("\n"), "* ███████╗███████╗██╗     ██╗ █████╗ ███╗  ██╗ ██████╗  *\n* ╚══███╔╝██╔════╝██║ ██╗ ██║██╔══██╗████╗ ██║██╔════╝  *\n*   ███╔╝ ███████╗██║████╗██║███████║██╔██╗██║██║  ███╗ *\n*  ███╔╝  ╚════██║╚███╔═███╔╝██╔══██║██║╚████║██║  ╚██║ *\n* ███████╗███████║ ╚██║ ██╔╝ ██║  ██║██║ ╚███║╚██████╔╝ *\n* ╚══════╝╚══════╝  ╚═╝ ╚═╝  ╚═╝  ╚═╝╚═╝  ╚══╝ ╚═════╝  *"); examplejs_printLines = [];
  });
  it("large():none", function() {
    examplejs_printLines = [];
    examplejs_print(JSON.stringify(bigfont.large()));
    assert.equal(examplejs_printLines.join("\n"), "\"\""); examplejs_printLines = [];
  });
  it("large():blockStyle: -1, lineStyle: -1", function() {
    examplejs_printLines = [];
    examplejs_print(JSON.stringify(bigfont.large('none', {blockStyle: -1, lineStyle: -1})));
    assert.equal(examplejs_printLines.join("\n"), "\"\""); examplejs_printLines = [];
  });
});