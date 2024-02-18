import { style } from '@vanilla-extract/css'
import { theme } from '../../../../styles/main-theme.css'

export const root = style({
  outline: 'solid 1px #000',
  padding: theme.spacing.small,
  marginBottom: theme.spacing.small,
})
