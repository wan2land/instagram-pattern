/*
 * @src https://static.cdninstagram.com/rsrc.php/v3iZrc4/yJ/l/ko_KR/66oFWT6RD-gyoSaDii0obUrLLd9mWIUdnu0Oh55GB9DznXMpTYjc5GYRalYp160gdpUdvbzNG6fptxQU6FYGp1u5uNjKx-Q18MNf8ItvTeYl_jROUvU1z2RLr5aCKbIafO95Nd_Uegntazq1NTHKCc4paVIohmRQ2b689DrlHpRtHthIvsWqehdEtWwDQVEH-g-FDC.js
 */

const prefix = "[@\uff20]";
const pattern = "[a-zA-Z0-9_]+(?:\\.[a-zA-Z0-9_]+)*";

export const RE_USERNAME = new RegExp(
  "(^|[^a-zA-Z0-9_!#$%&*@/\uff20])(" + prefix + ")(" + pattern + ")",
  "g",
);
export const RE_USERNAME_PATTERN = new RegExp("^(" + pattern + ")$");
export const RE_USERNAME_PATTERN_IGNORE_PREFIX = new RegExp(
  "^(" + prefix + ")?(" + pattern + ")$",
);
