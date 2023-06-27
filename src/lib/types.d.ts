import type { Session } from '@auth/core/types';

export interface IGate {
	hasAccess(session: Session | null): boolean;
}
