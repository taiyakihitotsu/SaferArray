// there is no relationship between each numbers and each nested arrays in type level.
// this files make it by handwrite, for convenience.
// 2024.05.20

type TNumArray = Array<null | TNumArray>;

const generateNestedArray = (depth: number): TNumArray => {
  if (depth <= 0) return [null];
  return [generateNestedArray(depth - 1)];
};

const arr: TNumArray = generateNestedArray(100);
