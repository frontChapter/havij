import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/ui/header'
import { cn } from '@/lib/utils'
import { Inter, Vazirmatn } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const vazirmatn = Vazirmatn({
  subsets: ['arabic'],
  variable: '--font-vazirmatn',
})

export const metadata = {
  title: 'FrontChapter',
  description: 'A hub for front-end enthusiasts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang='fa'
      dir='rtl'
      suppressHydrationWarning
    >
      <body
        className={cn(
          inter.className,
          vazirmatn.variable,
          'min-h-screen bg-background font-sans antialiased'
        )}
      >
        <ThemeProvider
          attribute='class'
          enableSystem
        >
          <div className='relative flex min-h-screen flex-col'>
            <Header />
            <main className='flex-1'>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
