export const getRandom = (arr: number[], total: number) => {
  const randomNumber = Math.floor(Math.random() * total);
  return arr[randomNumber];
}