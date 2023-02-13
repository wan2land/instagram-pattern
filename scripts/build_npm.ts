import { build, emptyDir } from "dnt/mod.ts";
import { bgGreen } from "fmt/colors.ts";

const cmd = Deno.run({
  cmd: ["git", "describe", "--tags", "--abbrev=0"],
  stdout: "piped",
});
const version = new TextDecoder().decode(await cmd.output()).trim();
cmd.close();

console.log(bgGreen(`version: ${version}`));

await emptyDir("./.npm");

await build({
  entryPoints: ["./mod.ts"],
  outDir: "./.npm",
  shims: {
    deno: false,
  },
  test: false,
  compilerOptions: {
    lib: ["es2021", "dom"],
  },
  package: {
    name: "instagram-pattern",
    version,
    "description":
      "Perfect Instagram pattern library extracted from Instagram.",
    keywords: [
      "instagram",
      "hashtag",
      "regexp",
      "regex",
    ],
    license: "MIT",
    repository: {
      type: "git",
      url: "git+https://github.com/wan2land/instagram-pattern.git",
    },
    bugs: {
      url: "https://github.com/wan2land/instagram-pattern/issues",
    },
  },
});

// post build steps
Deno.copyFileSync("README.md", ".npm/README.md");
