import TSetRequired from '#interface/TSetRequired/TSetRequired';

export default function setRequired<TBase extends object, TKey extends keyof TBase>(
  obj: TBase,
  key: TKey,
): TSetRequired<TBase, TKey> {
  if (obj[key] == null) {
    throw new Error(`${String(key)} is null`);
  }

  return obj as TSetRequired<TBase, TKey>;
}
