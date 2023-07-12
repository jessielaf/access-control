import type { Session } from '@auth/core/types';

type Gate = (session: Session | null) => boolean;
