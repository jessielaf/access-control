import { hasAccess } from './has-access.js';
import { IGate } from './types.js';
import { Session } from '@auth/core/types';
import { error } from '@sveltejs/kit';

export const hasAccessSvelte = (session: Session | null, gates: IGate[]) => {
	if (!hasAccess(session, gates)) {
		throw error(403);
	}
};
