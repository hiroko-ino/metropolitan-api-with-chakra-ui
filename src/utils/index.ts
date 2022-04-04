export const getRandom = (arr: number[]) => {
  const randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber];
}