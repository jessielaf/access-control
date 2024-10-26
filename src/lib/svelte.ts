import type { Gate } from './gate.js'
import { error } from '@sveltejs/kit'
import { hasAccess } from './has-access.js'

export function hasAccessSvelte(session: App.Locals['session'], gates: Gate[]) {
  if (!hasAccess(session, gates)) {
    throw error(403)
  }
}
