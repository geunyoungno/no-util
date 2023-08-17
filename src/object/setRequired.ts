import TSetRequired from '#interface/TSetRequired/TSetRequired';

export default function setRequired<TObj extends object, TKey extends keyof TObj>(
  obj: TObj,
  key: TKey,
): TSetRequired<TObj, TKey> {
  if (obj[key] == null) {
    throw new Error(`${String(key)} is null`);
  }

  return obj as TSetRequired<TObj, TKey>;
}
