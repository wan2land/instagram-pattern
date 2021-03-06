
import { validateHashtag, extractHashtags, extractUsernames } from './index'

describe('validateHashtag', () => {
  it('default', () => {
    expect(validateHashtag('hashtag')).toBe(true)
    expect(validateHashtag('πππ')).toBe(true)

    expect(validateHashtag('#hashtag')).toBe(false)
    expect(validateHashtag('#πππ')).toBe(false)
  })

  it('ignore prefix', () => {
    expect(validateHashtag('#hashtag', { ignorePrefix: true })).toBe(true)
    expect(validateHashtag('hashtag', { ignorePrefix: true })).toBe(true)

    expect(validateHashtag('#πππ', { ignorePrefix: true })).toBe(true)
    expect(validateHashtag('πππ', { ignorePrefix: true })).toBe(true)
  })
})

describe('extractHashtags', () => {
  it('default', () => {
    expect(extractHashtags('hashtag')).toEqual([])
    expect(extractHashtags('#hashtag #πππ hello world #μλνμΈμ¬ @wan2land @wan3land!!')).toEqual(['hashtag', 'πππ', 'μλνμΈμ¬'])
  })
})

describe('extractUsernames', () => {
  it('default', () => {
    expect(extractUsernames('hashtag')).toEqual([])
    expect(extractUsernames('#hashtag #πππ hello world #μλνμΈμ¬ @wan2land @wan3land!! wan2land@gmail.com')).toEqual(['wan2land', 'wan3land'])
  })
})
