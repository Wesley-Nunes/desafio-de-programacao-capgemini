const getNumbersOfAnagrams = require("./get-numbers-of-anagrams");

describe("The function getNumbersOfAnagrams", () => {
  it("should throw an error if the function argument is not a string.", () => {
    const input = 111;

    expect(() => getNumbersOfAnagrams(input)).toThrow();
  });
  it("should throw an error if the function argument is equal or smaller than one.", () => {
    const input = "A";

    expect(() => getNumbersOfAnagrams(input)).toThrow();
  });
  it("should output be 0 if the input is 'abcd'.", () => {
    const input = "abcd";

    const output = getNumbersOfAnagrams(input);

    expect(output).toBe(0);
  });
  it("should output be 0 if the input is 'abcdefghijklmnopqrstuvxywz'.", () => {
    const input = "abcdefghijklmnopqrstuvxywz";

    const output = getNumbersOfAnagrams(input);

    expect(output).toBe(0);
  });
  it("should output be 1 if the input is 'aabcd'.", () => {
    const input = "aabcd";

    const output = getNumbersOfAnagrams(input);

    expect(output).toBe(1);
  });
  it("should output be 1 if the input is 'xx'.", () => {
    const input = "xx";

    const output = getNumbersOfAnagrams(input);

    expect(output).toBe(1);
  });
  it("should output be 1 if the input is 'jonneshu'.", () => {
    const input = "jonneshu";

    const output = getNumbersOfAnagrams(input);

    expect(output).toBe(1);
  });
  it("should output be 1 if the input is 'pizza'.", () => {
    const input = "pizza";

    const output = getNumbersOfAnagrams(input);

    expect(output).toBe(1);
  });
  it("should output be 2 if the input is 'abcda'.", () => {
    const input = "abcda";

    const output = getNumbersOfAnagrams(input);

    expect(output).toBe(2);
  });
  it("should output be 2 if the input is 'ovo'.", () => {
    const input = "ovo";

    const output = getNumbersOfAnagrams(input);

    expect(output).toBe(2);
  });
  it("should output be 3 if the input is 'ifailuhkqq'.", () => {
    const input = "ifailuhkqq";

    const output = getNumbersOfAnagrams(input);

    expect(output).toBe(3);
  });
  it("should output be 3 if the input is 'innertr'.", () => {
    const input = "innertr";

    const output = getNumbersOfAnagrams(input);

    expect(output).toBe(3);
  });
  it("should output be 4 if the input is 'baab'.", () => {
    const input = "baab";

    const output = getNumbersOfAnagrams(input);

    expect(output).toBe(4);
  });
  it("should output be 4 if the input is 'nelle'.", () => {
    const input = "nelle";

    const output = getNumbersOfAnagrams(input);

    expect(output).toBe(4);
  });
  it("should output be 5 if the input is 'tata'.", () => {
    const input = "tata";

    const output = getNumbersOfAnagrams(input);

    expect(output).toBe(5);
  });
  it("should output be 6 if the input is 'motom'.", () => {
    const input = "motom";

    const output = getNumbersOfAnagrams(input);

    expect(output).toBe(6);
  });
  it("should output be 10 if the input is 'internet'.", () => {
    const input = "internet";

    const output = getNumbersOfAnagrams(input);

    expect(output).toBe(10);
  });
  it("should output be 12 if the input is 'laptapa'.", () => {
    const input = "laptapa";

    const output = getNumbersOfAnagrams(input);

    expect(output).toBe(12);
  });
  it("should output be 15 if the input is 'tartarugas'.", () => {
    const input = "tartarugas";

    const output = getNumbersOfAnagrams(input);

    expect(output).toBe(15);
  });
});
