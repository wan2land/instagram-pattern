import { RE_HASHTAG } from './RE_HASHTAG'

export function extractHashtags(contents: string): string[] {
  const match = (contents || '').match(RE_HASHTAG)
  if (!match) {
    return []
  }
  return match.map(r => r.slice(1))
}
