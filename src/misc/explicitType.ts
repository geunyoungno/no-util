export default function explicitType(
  val?: any,
): null | undefined | string | number | bigint | boolean | unknown[] | symbol | unknown[] | object | Function {
  if (val === null) {
    return null;
  }

  if (val === undefined) {
    return undefined;
  }

  if (typeof val === 'string') {
    return String(val);
  }

  if (typeof val === 'number') {
    return Number(val);
  }

  if (typeof val === 'bigint') {
    return BigInt(val);
  }

  if (typeof val === 'boolean') {
    return Boolean(val);
  }

  if (typeof val === 'symbol') {
    return val;
  }

  if (typeof val === 'object' && Array.isArray(val)) {
    return [...val] as unknown[];
  }

  if (typeof val === 'object' && val != null) {
    return { ...val };
  }

  if (typeof val === 'function') {
    return val;
  }

  return undefined;
}
