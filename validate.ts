import {
  RE_HASHTAG_PATTERN,
  RE_HASHTAG_PATTERN_IGNORE_PREFIX,
} from "./re_hashtag.ts";

export function validateHashtag(
  hashtag: string,
  options: { ignorePrefix?: boolean } = {},
): boolean {
  if (options.ignorePrefix) {
    return RE_HASHTAG_PATTERN_IGNORE_PREFIX.test(hashtag);
  }
  return RE_HASHTAG_PATTERN.test(hashtag);
}
