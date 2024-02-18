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
  textDecoration: 'none',
})

globalStyle('p', {
  marginTop: theme.spacing.small,
  marginBottom: theme.spacing.small,
})

globalStyle('pre', {
  fontFamily: 'monospace',
  padding: theme.spacing.xsmall,
  color: theme.color.text.code,
  background: theme.color.background.code,
  borderRadius: 5,
})

globalStyle('code', {
  fontFamily: 'monospace',
  color: theme.color.text.code,
  background: theme.color.background.code,
})

globalStyle('footer', {
  textAlign: 'center',
})
