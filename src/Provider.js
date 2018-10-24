import React from 'react'
import ThemeProvider from 'mdx-deck/dist/Provider'

const Provider = ({ children, ...rest }) => (
  <ThemeProvider {...rest}>
    {children}

    <div
      style={{
        position: 'absolute',
        bottom: '1em',
        right: '1em'
      }}
    >
      <a href="https://twitter.com/kyleshevlin">
        @kyleshevlin
      </a>
    </div>
  </ThemeProvider>
)

export default Provider
