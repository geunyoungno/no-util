import TRequiredKeys from '#interface/TNullableToOptioanl/TRequiredKeys';

type TNullableToOptional<TBase extends object> = Partial<TBase> & Pick<TBase, TRequiredKeys<TBase>>;

export default TNullableToOptional;
