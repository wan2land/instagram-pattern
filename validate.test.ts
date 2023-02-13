import { assert } from "testing/asserts.ts";
import { validateHashtag } from "./validate.ts";

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
