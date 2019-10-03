'use strict';

// Types
import { RQuery } from 'rethinkdb-ts';
type PromiseValue <T> = T extends Promise<infer V> ? V : never;

export async function run <GenericQuery extends RQuery> (query: GenericQuery)
{
	const result: PromiseValue<ReturnType<GenericQuery['run']>> = await query.run();
	return result;
};