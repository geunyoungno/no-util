import TReadonlyableArray from '#interface/TReadonlyableArray/TReadonlyableArray';

// const array1 = [1, 2, 3] as const;
// const array2 = [4, 5, 6] as const;
// const array = [[1, 4], [1, 5], [1, 6], [2, 4], [2, 5], [2, 6], [3, 4], [3, 5], [3, 6]];
/**
 * use array1 and array2 as a matrix to generate nested array
 * @param array1
 * @param array2
 * @returns array
 */
export default function nestedArray<TArray1, TArray2>(
  array1: TReadonlyableArray<TArray1>,
  array2: TReadonlyableArray<TArray2>,
) {
  const array: Array<[TArray1, TArray2]> = [];

  array1.forEach((element1) => {
    array2.forEach((element2) => {
      const arr: [TArray1, TArray2] = [element1, element2];
      array.push(arr);
    });
  });

  return array;
}
