# Instagram Pattern

<p>
  <a href="https://npmcharts.com/compare/instagram-pattern?minimal=true"><img alt="Downloads" src="https://img.shields.io/npm/dt/instagram-pattern.svg?style=flat-square" /></a>
  <a href="https://www.npmjs.com/package/instagram-pattern"><img alt="Version" src="https://img.shields.io/npm/v/instagram-pattern.svg?style=flat-square" /></a>
  <a href="https://www.npmjs.com/package/instagram-pattern"><img alt="License" src="https://img.shields.io/npm/l/instagram-pattern.svg?style=flat-square" /></a>
</p>

Perfect Instagram pattern library extracted from Instagram.

## Installation

```bash
npm install instagram-pattern --save
```

## Usage

**extract hashtags**

```ts
import { extractHashtags } from "instagram-pattern";

const text =
  `#hashtag Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. #hashhash #👾👾`;

extractHashtags(text); // ['hashtag', 'hashhash', '👾👾']
```

**extract usernames**

```ts
import { extractUsernames } from "instagram-pattern";

const text = `@wan2land wan2land@gmail.com @wan3land @wan4land👾`;

extractUsernames(text); // ['wan2land', 'wan3land']
```

**validate hashtags**

```ts
import { validateHashtags } from "instagram-pattern";

validateHashtags("hashtag"); // true
validateHashtags("hash tag"); // false

// ignore prefix
validateHashtags("hashtag", { ignorePrefix: false }); // true
validateHashtags("#hashtag", { ignorePrefix: false }); // false

validateHashtags("hashtag", { ignorePrefix: true }); // true
validateHashtags("#hashtag", { ignorePrefix: true }); // true
```

**validate usernames**

```ts
import { validateUsernames } from "instagram-pattern";

validateUsernames("wan2land"); // true
validateUsernames(".wan2land"); // false

// ignore prefix
validateUsernames("wan2land", { ignorePrefix: false }); // true
validateUsernames("@wan2land", { ignorePrefix: false }); // false

validateUsernames("wan2land", { ignorePrefix: true }); // true
validateUsernames("@wan2land", { ignorePrefix: true }); // true
```
