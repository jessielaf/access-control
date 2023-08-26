import type { Gate } from './gate.js';

export const hasAccess = (session: App.Locals['session'], gates: Gate[]) => {
	for (const gate of gates) {
		if (!gate(session)) {
			return false;
		}
	}

	return true;
};
