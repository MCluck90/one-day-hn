import { globalStyle, style } from '@vanilla-extract/css'

globalStyle('html, body', {
  fontFamily: 'sans-serif',
  fontSize: '14pt',
  margin: 0,
  padding: 0,
})

export const root = style({
  margin: '0 auto',
  maxWidth: 1024,
})
