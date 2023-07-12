import { hasAccess } from './has-access.js';
import type { Gate } from './types.js';
import type { Session } from '@auth/core/types';
import { error } from '@sveltejs/kit';

export const hasAccessSvelte = (session: Session | null, gates: Gate[]) => {
	if (!hasAccess(session, gates)) {
		throw error(403);
	}
};
