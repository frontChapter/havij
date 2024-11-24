'use client'

import { DirectionProvider } from '@radix-ui/react-direction'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import * as React from 'react'

export function ThemeProvider({
  children,
  ...props
}: {
  children: React.ReactNode
  [key: string]: unknown
}) {
  return (
    <NextThemesProvider
      enableSystem
      {...props}
    >
      <DirectionProvider dir='rtl'>{children}</DirectionProvider>
    </NextThemesProvider>
  )
}
