import { createGlobalTheme } from '@vanilla-extract/css'

export const theme = createGlobalTheme('body', {
  color: {
    background: {
      main: '#1F1F1F',
      alt: '#181818',
    },
    text: {
      main: '#CCCCCC',
      action: '#97DCFE',
    },
    border: {
      main: '#333',
    },
  },
  spacing: {
    small: '8px',
    medium: '12px',
  },
})
