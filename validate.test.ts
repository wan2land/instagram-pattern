import { assert } from "testing/asserts.ts";
import { validateHashtag, validateUsername } from "./validate.ts";

Deno.test("validate, validateHashtag default", () => {
  assert(validateHashtag("hashtag"));
  assert(validateHashtag("😆😆😆"));

  assert(!validateHashtag("#hashtag"));
  assert(!validateHashtag("#😆😆😆"));
});

Deno.test('validate, validateHashtag with "ignorePrefix"', () => {
  assert(validateHashtag("#hashtag", { ignorePrefix: true }));
  assert(validateHashtag("hashtag", { ignorePrefix: true }));

  assert(validateHashtag("#😆😆😆", { ignorePrefix: true }));
  assert(validateHashtag("😆😆😆", { ignorePrefix: true }));
});

Deno.test("validate, validateUsername", () => {
  assert(validateUsername("username"));
  assert(validateUsername("wan2land"));
  assert(validateUsername("__hey__"));
  assert(validateUsername("__hey_._._"));

  assert(!validateUsername("#hashtag"));
  assert(!validateUsername(".dot"));
  assert(!validateUsername("dot."));
  assert(!validateUsername("dot..dot"));
  assert(!validateUsername("언어는"));
});
