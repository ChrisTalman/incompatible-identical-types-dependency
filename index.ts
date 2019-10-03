'use strict';

// Types
import { RQuery } from 'rethinkdb-ts';

export async function run(query: RQuery)
{
	await query.run();
};