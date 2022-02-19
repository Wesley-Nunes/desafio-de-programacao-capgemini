const strongPasswordCheck = require("./strong-password-check");

describe("the function strongPasswordCheck", () => {
  it("should throw an error if the function argument is not a string.", () => {
    const input = 3;

    expect(() => strongPasswordCheck(input)).toThrow();
  });
  it("should the function argument be a string.", () => {
    const input = "as3";

    expect(() => strongPasswordCheck(input)).not.toThrow();
  });
  it("should output be 0 if the input is 'asS97@1'.", () => {
    const input = "asS97@1";

    const output = strongPasswordCheck(input);

    expect(output).toBe(0);
  });
  it("should output be 0 if the input is 'aW2op!'.", () => {
    const input = "aW2op!";

    const output = strongPasswordCheck(input);

    expect(output).toBe(0);
  });
  it("should output be 0 if the input is 'aW2op@'.", () => {
    const input = "aW2op@";

    const output = strongPasswordCheck(input);

    expect(output).toBe(0);
  });
  it("should output be 0 if the input is 'aW2op#'.", () => {
    const input = "aW2op#";

    const output = strongPasswordCheck(input);

    expect(output).toBe(0);
  });
  it("should output be 0 if the input is 'aW2op$'.", () => {
    const input = "aW2op$";

    const output = strongPasswordCheck(input);

    expect(output).toBe(0);
  });
  it("should output be 0 if the input is 'aW2op%'.", () => {
    const input = "aW2op%";

    const output = strongPasswordCheck(input);

    expect(output).toBe(0);
  });
  it("should output be 0 if the input is 'aW2op^'.", () => {
    const input = "aW2op^";

    const output = strongPasswordCheck(input);

    expect(output).toBe(0);
  });
  it("should output be 0 if the input is 'aW2op&'.", () => {
    const input = "aW2op&";

    const output = strongPasswordCheck(input);

    expect(output).toBe(0);
  });
  it("should output be 0 if the input is 'aW2op*'.", () => {
    const input = "aW2op*";

    const output = strongPasswordCheck(input);

    expect(output).toBe(0);
  });
  it("should output be 0 if the input is 'aW2op('.", () => {
    const input = "aW2op(";

    const output = strongPasswordCheck(input);

    expect(output).toBe(0);
  });
  it("should output be 0 if the input is 'aW2op)'.", () => {
    const input = "aW2op)";

    const output = strongPasswordCheck(input);

    expect(output).toBe(0);
  });
  it("should output be 0 if the input is 'aW2op-'.", () => {
    const input = "aW2op-";

    const output = strongPasswordCheck(input);

    expect(output).toBe(0);
  });
  it("should output be 0 if the input is 'aW2op+'.", () => {
    const input = "aW2op+";

    const output = strongPasswordCheck(input);

    expect(output).toBe(0);
  });
  it("should output be 1 if the input is 'asSs@a'.", () => {
    const input = "asSs@a";

    const output = strongPasswordCheck(input);

    expect(output).toBe(1);
  });
  it("should output be 1 if the input is 'as9s@a'.", () => {
    const input = "as9s@a";

    const output = strongPasswordCheck(input);

    expect(output).toBe(1);
  });
  it("should output be 1 if the input is '0980!a'.", () => {
    const input = "0980!a";

    const output = strongPasswordCheck(input);

    expect(output).toBe(1);
  });
  it("should output be 1 if the input is '0EE980Za55'.", () => {
    const input = "0EE980Za55";

    const output = strongPasswordCheck(input);

    expect(output).toBe(1);
  });
  it("should output be 2 if the input is 'a!tt##yjy'.", () => {
    const input = "a!tt##yjy";

    const output = strongPasswordCheck(input);

    expect(output).toBe(2);
  });
  it("should output be 2 if the input is '2(35&77'.", () => {
    const input = "2(35&77";

    const output = strongPasswordCheck(input);

    expect(output).toBe(2);
  });
  it("should output be 3 if the input is 'aaazz'.", () => {
    const input = "aaazz";

    const output = strongPasswordCheck(input);

    expect(output).toBe(3);
  });
  it("should output be 3 if the input is '123456789'.", () => {
    const input = "123456789";

    const output = strongPasswordCheck(input);

    expect(output).toBe(3);
  });
  it("should output be 3 if the input is 'Ya#'.", () => {
    const input = "Ya#";

    const output = strongPasswordCheck(input);

    expect(output).toBe(3);
  });
  it("should output be 3 if the input is '1a#'.", () => {
    const input = "1a#";

    const output = strongPasswordCheck(input);

    expect(output).toBe(3);
  });
  it("should output be 3 if the input is '!@#$%^&*()-+'.", () => {
    const input = "!@#$%^&*()-+";

    const output = strongPasswordCheck(input);

    expect(output).toBe(3);
  });
  it("should output be 4 if the input is 'a#'.", () => {
    const input = "a#";

    const output = strongPasswordCheck(input);

    expect(output).toBe(4);
  });
  it("should output be 4 if the input is '!!'.", () => {
    const input = "!!";

    const output = strongPasswordCheck(input);

    expect(output).toBe(4);
  });
  it("should output be 5 if the input is '1'.", () => {
    const input = "1";

    const output = strongPasswordCheck(input);

    expect(output).toBe(5);
  });
  it("should output be 5 if the input is 'h'.", () => {
    const input = "h";

    const output = strongPasswordCheck(input);

    expect(output).toBe(5);
  });
  it("should output be 5 if the input is 'Z'.", () => {
    const input = "Z";

    const output = strongPasswordCheck(input);

    expect(output).toBe(5);
  });
  it("should output be 5 if the input is '-'.", () => {
    const input = "-";

    const output = strongPasswordCheck(input);

    expect(output).toBe(5);
  });
  it("should output be 6 if the input is ''.", () => {
    const input = "";

    const output = strongPasswordCheck(input);

    expect(output).toBe(6);
  });
});
