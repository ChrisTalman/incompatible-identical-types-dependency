import { RQuery } from 'rethinkdb-ts';
export declare function run<GenericQuery extends RQuery>(query: GenericQuery): Promise<any>;
