export const createRangedArray = (start: number, end: number): number[] => {
  const one = 1;
  const length = end - start + one;
  /*
  	Create an array of certain length and set the elements within it from
    start value to end value.
  */
  return Array.from({ length }, (_, idx) => idx + start);
};
