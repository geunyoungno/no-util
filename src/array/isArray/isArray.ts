import TReadonlyableArray from '#interface/TReadonlyableArray/TReadonlyableArray';

export default function isArray<TUndefinedArray extends unknown>(
  arr: TUndefinedArray | TReadonlyableArray<TUndefinedArray>,
): arr is TReadonlyableArray<TUndefinedArray> {
  return Array.isArray(arr);
}
