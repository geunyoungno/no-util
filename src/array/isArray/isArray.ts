import TReadonlyableArray from '#interface/TReadonlyableArray/TReadonlyableArray';

export default function isArray<T extends unknown>(arr: T | TReadonlyableArray<T>): arr is TReadonlyableArray<T> {
  return Array.isArray(arr);
}
