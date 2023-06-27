import type { Session } from '@auth/core/types';
import type { IGate } from './types.js';

export const hasAccess = (session: Session | null, gates: IGate[]) => {
    for (const gate of gates) {
        if (!gate.hasAccess(session)) {
            return false;
        }
    }

    return true;
};
