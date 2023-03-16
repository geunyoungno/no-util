import TReadonlyableArray from '#interface/TReadonlyableArray/TReadonlyableArray';

/**
 * Includes for any array
 * @param arr Array
 * @param searchElement The element to search for
 * @param fromIndex
 * @returns {boolean}
 */
export default function includes<T extends unknown>(
  arr: TReadonlyableArray<T>,
  searchElement: any,
  fromIndex?: number,
): searchElement is T {
  return arr.includes(searchElement, fromIndex);
}
