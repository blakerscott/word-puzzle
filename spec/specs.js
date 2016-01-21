describe('countUp', function() {

  it("if countTo is equal to 50 and countBy 7", function() {
    expect(countUp(7, 50)).to.eql([7, 14, 21, 28, 35, 42, 49]);
  });

});
