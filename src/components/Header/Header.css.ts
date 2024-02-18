import { style } from '@vanilla-extract/css'
import { theme } from '../../styles/main-theme.css'

export const root = style({
  display: 'flex',
  justifyContent: 'space-between',
  background: theme.color.background.alt,
  borderBottomLeftRadius: 5,
  borderBottomRightRadius: 5,
  marginBottom: theme.spacing.medium,
})

export const link = style({
  display: 'flex',
  flex: 1,
  color: theme.color.text.altAction,
  borderLeft: `solid 1px ${theme.color.background.main}`,
  borderRight: `solid 1px ${theme.color.background.main}`,
  fontWeight: 'bold',
  justifyContent: 'center',
  alignContent: 'center',
})
