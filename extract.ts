import { RE_HASHTAG } from "./re_hashtag.ts";
import { RE_USERNAME } from "./re_username.ts";

export function extractHashtags(contents: string): string[] {
  const match = (contents || "").match(RE_HASHTAG);
  if (!match) {
    return [];
  }
  return match.map((r) => r.slice(1));
}

const RE_IGNORE_PREFIX = /^\s*@/;

export function extractUsernames(contents: string): string[] {
  const match = (contents || "").match(RE_USERNAME);
  if (!match) {
    return [];
  }
  return match.map((r) => r.replace(RE_IGNORE_PREFIX, ""));
}
