import type { Gate } from './types.js';
import type { Session } from '@auth/core/types';

const authenticatedGate: Gate = (session: Session | null) => {
	return session != null;
};

export { authenticatedGate };
