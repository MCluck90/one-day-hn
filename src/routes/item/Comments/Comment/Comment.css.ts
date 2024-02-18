import { style } from '@vanilla-extract/css'
import { theme } from '../../../../styles/main-theme.css'

export const root = style({
  background: theme.color.background.alt,
  outline: `solid 1px ${theme.color.border.main}`,
  borderRadius: 5,
  padding: theme.spacing.medium,
  marginBottom: theme.spacing.small,
})
