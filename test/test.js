"use strict";

require('should');
var Rectangle = require('../rectangle.js');

describe("Rectangle", function() {
  it("must compute the rectangle area correctly", function() {
    var forma = new Rectangle({ width: 100, height: 50});
    var area = forma.getArea();
    /* There is a white space between consecutive columns */
    area.should.match(5000);
  })
});
