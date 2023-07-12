import type { Gate } from './types.js';
import type { Session } from '@auth/core/types';

export const hasAccess = (session: Session | null, gates: Gate[]) => {
	for (const gate of gates) {
		if (!gate(session)) {
			return false;
		}
	}

	return true;
};
