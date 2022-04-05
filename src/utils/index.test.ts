import { getRandom } from ".";

describe('getRandomをMockを使ってテストする', () => {
  it('Math.random関数をmockとして取得し、関数へ渡す', () => {
    const arr = [1, 5, 6, 7]
    jest.spyOn(global.Math, 'random').mockReturnValue(0.1);
    expect(getRandom(arr)).toBe(1);
    jest.spyOn(global.Math, 'random').mockReturnValue(0.25);
    expect(getRandom(arr)).toBe(5);
    jest.spyOn(global.Math, 'random').mockReturnValue(0.5);
    expect(getRandom(arr)).toBe(6);
    jest.spyOn(global.Math, 'random').mockReturnValue(0.99);
    expect(getRandom(arr)).toBe(7);
  })
});