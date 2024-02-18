import { globalStyle } from '@vanilla-extract/css'
import { theme } from './main-theme.css'

globalStyle('html, body', {
  fontFamily: 'sans-serif',
  fontSize: '16px',
  lineHeight: 1.7,
  margin: 0,
  padding: 0,
  background: theme.color.background.main,
  color: theme.color.text.main,
})

globalStyle('a', {
  color: theme.color.text.action,
})

globalStyle('p', {
  marginTop: theme.spacing.small,
  marginBottom: theme.spacing.small,
})

globalStyle('footer', {
  textAlign: 'center',
})
