import { ApplicationContext } from './context';
/**
 * GraphQl scalar type.
 * see https://graphql.org/learn/schema/#scalar-types
 */
export declare type Scalar<TInput, TOutput> = {
    Input: TInput;
    Output: TOutput;
};
/**
 * Used by consumers to define custom contexts.
 */
export declare type ExtendedDefaultContext<T extends Partial<PothosSchemaTypes.UserSchemaTypes>> = PothosSchemaTypes.ExtendDefaultTypes<ApplicationContext & T>;
/**
 * Shorthand for PothosSchemaTypes.SchemaBuilder configured with
 * custom context.
 */
export declare type ApplicationSchemaBuilder<T extends Partial<PothosSchemaTypes.UserSchemaTypes>> = PothosSchemaTypes.SchemaBuilder<ExtendedDefaultContext<T>>;
/**
 * Convenience application entry point callback.
 */
export declare type ApplicationFactory<T extends Partial<PothosSchemaTypes.UserSchemaTypes>> = (builder: ApplicationSchemaBuilder<T>) => void;
/**
 * Convenience subscription schema factory
 */
export declare type SubscriptionBuilder<T extends Partial<PothosSchemaTypes.UserSchemaTypes>> = PothosSchemaTypes.SubscriptionFieldBuilder<ExtendedDefaultContext<T>, object & {}>;
/**
 * Convenience query schema factory
 */
export declare type QueryBuilder<T extends Partial<PothosSchemaTypes.UserSchemaTypes>> = PothosSchemaTypes.QueryFieldBuilder<ExtendedDefaultContext<T>, object & {}>;
/**
 * Convenience mutation schema factory
 */
export declare type MutationBuilder<T extends Partial<PothosSchemaTypes.UserSchemaTypes>> = PothosSchemaTypes.MutationFieldBuilder<ExtendedDefaultContext<T>, object & {}>;
