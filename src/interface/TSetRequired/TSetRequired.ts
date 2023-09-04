type TSetRequired<TBase extends object, TKey extends keyof TBase> = Omit<TBase, TKey> & Required<Pick<TBase, TKey>>;

export default TSetRequired;
