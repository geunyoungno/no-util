import isArray from '#array/isArray/isArray';
import TReadonlyableArray from '#interface/TReadonlyableArray/TReadonlyableArray';

export default function first<TBase extends unknown>(val: TBase | TReadonlyableArray<TBase>): TBase | undefined {
  if (isArray(val)) {
    if (val.length > 0) {
      const [firstElement] = val;

      return firstElement;
    }

    return undefined;
  }

  return val;
}
