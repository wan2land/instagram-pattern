/*
 * @src https://www.instagram.com/static/bundles/es6/Consumer.js/485e68ba2dd9.js 480 line
 */

const prefix = '[@＠]'
const pattern = '[a-zA-Z0-9_]+(?:\\.[a-zA-Z0-9_]+)*'

export const RE_USERNAME = new RegExp("(^|[^a-zA-Z0-9_!#$%&*@/＠])(" + prefix + ")(" + pattern + ')', 'g')
export const RE_USERNAME_PATTERN = new RegExp('^(' + pattern + ')$')
export const RE_USERNAME_PATTERN_IGNORE_PREFIX = new RegExp('^(' + prefix + ')?(' + pattern + ')$')
