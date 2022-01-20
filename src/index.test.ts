
import { validateHashtag, extractHashtags, extractUsernames } from './index'

describe('validateHashtag', () => {
  it('default', () => {
    expect(validateHashtag('hashtag')).toBe(true)
    expect(validateHashtag('😆😆😆')).toBe(true)

    expect(validateHashtag('#hashtag')).toBe(false)
    expect(validateHashtag('#😆😆😆')).toBe(false)
  })

  it('ignore prefix', () => {
    expect(validateHashtag('#hashtag', { ignorePrefix: true })).toBe(true)
    expect(validateHashtag('hashtag', { ignorePrefix: true })).toBe(true)

    expect(validateHashtag('#😆😆😆', { ignorePrefix: true })).toBe(true)
    expect(validateHashtag('😆😆😆', { ignorePrefix: true })).toBe(true)
  })
})

describe('extractHashtags', () => {
  it('default', () => {
    expect(extractHashtags('hashtag')).toEqual([])
    expect(extractHashtags('#hashtag #😆😆😆 hello world #안녕하세여 @wan2land @wan3land!!')).toEqual(['hashtag', '😆😆😆', '안녕하세여'])
  })
})

describe('extractUsernames', () => {
  it('default', () => {
    expect(extractUsernames('hashtag')).toEqual([])
    expect(extractUsernames('#hashtag #😆😆😆 hello world #안녕하세여 @wan2land @wan3land!! wan2land@gmail.com')).toEqual(['wan2land', 'wan3land'])
  })
})
