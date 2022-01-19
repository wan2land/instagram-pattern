
import { validateHashtag } from './validateHashtag'

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
