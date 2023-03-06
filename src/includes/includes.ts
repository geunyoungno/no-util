/**
 * Includes for any array
 * @param arr Array
 * @param searchElement The element to search for
 * @param fromIndex
 * @returns {boolean}
 */
export default function includes<T extends unknown>(
  arr: T[] | readonly T[],
  searchElement: any,
  fromIndex?: number,
): searchElement is T {
  return arr.includes(searchElement, fromIndex);
}
