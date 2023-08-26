import type { Gate } from './gate.js';
import { hasAccess } from './has-access.js';
import { error } from '@sveltejs/kit';

export const hasAccessSvelte = (session: App.Locals['session'], gates: Gate[]) => {
	if (!hasAccess(session, gates)) {
		throw error(403);
	}
};
