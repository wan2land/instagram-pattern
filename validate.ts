import {
  RE_HASHTAG_PATTERN,
  RE_HASHTAG_PATTERN_IGNORE_PREFIX,
} from "./re_hashtag.ts";
import {
  RE_USERNAME_PATTERN,
  RE_USERNAME_PATTERN_IGNORE_PREFIX,
} from "./re_username.ts";

export function validateHashtag(
  hashtag: string,
  options: { ignorePrefix?: boolean } = {},
): boolean {
  if (options.ignorePrefix) {
    return RE_HASHTAG_PATTERN_IGNORE_PREFIX.test(hashtag);
  }
  return RE_HASHTAG_PATTERN.test(hashtag);
}

export function validateUsername(
  username: string,
  options: { ignorePrefix?: boolean } = {},
): boolean {
  if (options.ignorePrefix) {
    return RE_USERNAME_PATTERN_IGNORE_PREFIX.test(username);
  }
  return RE_USERNAME_PATTERN.test(username);
}
