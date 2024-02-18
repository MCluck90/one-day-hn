import { style } from '@vanilla-extract/css'
import { theme } from '../../../styles/main-theme.css'

export const root = style({
  background: theme.color.background.alt,
  borderRadius: 5,
})
