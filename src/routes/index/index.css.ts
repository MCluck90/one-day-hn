import { style } from '@vanilla-extract/css'

export const root = style({
  margin: '0 auto',
  maxWidth: 'calc(100vw - 2em)',

  '@media': {
    'screen and (min-width: 1024px)': {
      maxWidth: 1024,
    },
  },
})
