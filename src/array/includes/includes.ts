import TReadonlyableArray from '#interface/TReadonlyableArray/TReadonlyableArray';

/**
 * Includes for any array
 * @param arr Array
 * @param searchElement The element to search for
 * @param fromIndex
 * @returns {boolean}
 */
export default function includes<TBase extends unknown>(
  arr: TReadonlyableArray<TBase>,
  searchElement: any,
  fromIndex?: number,
): searchElement is TBase {
  return arr.includes(searchElement, fromIndex);
}
