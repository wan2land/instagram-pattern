import { assertEquals } from "testing/asserts.ts";
import { extractHashtags, extractUsernames } from "./extract.ts";

Deno.test("extract, extractHashtags", () => {
  assertEquals(extractHashtags("hashtag"), []);
  assertEquals(
    extractHashtags(
      "#hashtag #😆😆😆 hello world #안녕하세여 @wan2land @wan3land!!",
    ),
    ["hashtag", "😆😆😆", "안녕하세여"],
  );
});

Deno.test("extract, extractUsernames", () => {
  assertEquals(extractUsernames("hashtag"), []);
  assertEquals(
    extractUsernames(
      "#hashtag #😆😆😆 hello world #안녕하세여 @wan2land @wan3land!! wan2land@gmail.com",
    ),
    ["wan2land", "wan3land"],
  );
});
