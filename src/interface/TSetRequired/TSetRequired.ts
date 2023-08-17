type TSetRequired<TObj, TKey extends keyof TObj> = Omit<TObj, TKey> & Required<Pick<TObj, TKey>>;

export default TSetRequired;
