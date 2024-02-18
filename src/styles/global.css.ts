import { globalStyle } from '@vanilla-extract/css'

globalStyle('html, body', {
  fontFamily: 'sans-serif',
  fontSize: '12pt',
  margin: 0,
  padding: 0,
})

globalStyle('p', {
  margin: 0,
})

globalStyle('footer', {
  textAlign: 'center',
})
