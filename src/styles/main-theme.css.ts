import { createGlobalTheme } from '@vanilla-extract/css'

export const theme = createGlobalTheme('body', {
  spacing: {
    small: '8px',
    medium: '12px',
  },
})
