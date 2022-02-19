const drawStairs = require("./draw-stairs");

describe("the function drawStairs", () => {
  it("should throw an error if the function argument is not a number.", () => {
    const input = "notNine";

    expect(() => drawStairs(input)).toThrow();
  });
  it("should the function argument be a number.", () => {
    const input = 4;

    expect(() => drawStairs(input)).not.toThrow();
  });
  it("should throw an error if the function argument is smaller than one.", () => {
    const input = 0;

    expect(() => drawStairs(input)).toThrow();
  });
  it("should the function argument be a number equal or greater than one.", () => {
    const input = 14;

    expect(() => drawStairs(input)).not.toThrow();
  });
  it("should log 1x1 stairs shape.", () => {
    const input = 1;
    const consoleSpy = jest.spyOn(console, "log");

    drawStairs(input);

    expect(consoleSpy).toHaveBeenCalledWith("*");
  });
  it("should log 2x2 stairs shape.", () => {
    const input = 2;
    const consoleSpy = jest.spyOn(console, "log");

    drawStairs(input);

    expect(consoleSpy).toHaveBeenCalledWith(" *");
    expect(consoleSpy).toHaveBeenCalledWith("**");
  });
  it("should log 3x3 stairs shape.", () => {
    const input = 3;
    const consoleSpy = jest.spyOn(console, "log");

    drawStairs(input);

    expect(consoleSpy).toHaveBeenCalledWith("  *");
    expect(consoleSpy).toHaveBeenCalledWith(" **");
    expect(consoleSpy).toHaveBeenCalledWith("***");
  });
  it("should log 4x4 stairs shape.", () => {
    const input = 4;
    const consoleSpy = jest.spyOn(console, "log");

    drawStairs(input);

    expect(consoleSpy).toHaveBeenCalledWith("   *");
    expect(consoleSpy).toHaveBeenCalledWith("  **");
    expect(consoleSpy).toHaveBeenCalledWith(" ***");
    expect(consoleSpy).toHaveBeenCalledWith("****");
  });
});
