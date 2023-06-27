import type { Session } from '@auth/core/types';
import type { IGate } from './types.js';

class AuthenticatedGate implements IGate {
    hasAccess(session: Session | null): boolean {
        return session != null;
    }
}

const authenticatedGate = new AuthenticatedGate();

export { authenticatedGate };
