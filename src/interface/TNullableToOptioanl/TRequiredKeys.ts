// @see https://jobs.ataccama.com/blog/how-to-convert-object-props-with-undefined-type-to-optional-properties-in-typescript
type TRequiredKeys<TBase extends object> = {
  [TKey in keyof TBase]: TBase[TKey] extends Exclude<TBase[TKey], undefined | null> ? TKey : never;
}[keyof TBase];

export default TRequiredKeys;
