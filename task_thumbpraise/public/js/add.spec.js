describe("add function testing", function() {
  var a;

  it("add function", function() {
    a = 1;

    expect(window.add(a)).toBe(2);
  });
});
