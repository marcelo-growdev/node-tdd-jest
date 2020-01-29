/* eslint-disable no-undef */
function mult(a, b) {
  return a * b;
}

describe('Examples', () => {
  it('first test example function mult', () => {
    const result = mult(5, 5);

    expect(result).toBe(25);
  });
});
