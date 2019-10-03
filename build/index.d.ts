import { RQuery } from 'rethinkdb-ts';
declare type PromiseValue<T> = T extends Promise<infer V> ? V : never;
export declare function run<GenericQuery extends RQuery>(query: GenericQuery): Promise<PromiseValue<ReturnType<GenericQuery["run"]>>>;
export {};
