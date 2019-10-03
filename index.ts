'use strict';

// Types
import { RQuery } from 'rethinkdb-ts';

export async function run <GenericQuery extends RQuery> (query: GenericQuery)
{
	const result = await query.run();
	return result;
};