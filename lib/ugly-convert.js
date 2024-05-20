"use strict";
// there is no relationship between each numbers and each nested arrays in type level.
// this files make it by handwrite, for convenience.
// 2024.05.20
const generateNestedArray = (depth) => {
    if (depth <= 0)
        return [null];
    return [generateNestedArray(depth - 1)];
};
const arr = generateNestedArray(100);
