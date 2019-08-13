export const getRandomIntBetween = function(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
};
