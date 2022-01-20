import { RE_USERNAME } from './RE_USERNAME'

const RE_IGNORE_PREFIX = /^\s*@/

export function extractUsernames(contents: string): string[] {
  const match = (contents || '').match(RE_USERNAME)
  if (!match) {
    return []
  }
  return match.map(r => r.replace(RE_IGNORE_PREFIX, ''))
}
