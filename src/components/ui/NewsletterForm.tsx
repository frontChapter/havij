'use client'
import confetti from 'canvas-confetti'
import { Button } from './button'
import { Input } from './input'

const NewsletterForm = () => {
  const handleClick = () => {
    const end = Date.now() + 3 * 1000 // 3 seconds
    const colors = ['#a786ff', '#fd8bbc', '#eca184', '#f8deb1']

    const frame = () => {
      if (Date.now() > end) return

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      })
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      })

      requestAnimationFrame(frame)
    }

    frame()
  }

  return (
    <div className='flex flex-col md:flex-row items-center justify-center gap-4 p-2 rounded-lg border border-white/20 backdrop-blur-md bg-white/30 dark:bg-gray-800/50 shadow-md w-full max-w-sm mx-auto'>
      <div className='w-full md:w-auto'>
        <Input
          type='email'
          placeholder='mail@example.com'
          dir='ltr'
          className='w-full px-4 py-2 border-none outline-none'
        />
      </div>
      <div className='w-full md:w-auto'>
        <div className='relative'>
          <Button
            color='primary'
            type='submit'
            className='w-full text-white bg-orange-500 hover:bg-orange-600 focus:ring-2 focus:ring-orange-400 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-500 transition-colors duration-200 rounded-md'
            onClick={handleClick}
          >
            عضویت در خبرنامه
          </Button>
        </div>
      </div>
    </div>
  )
}

export default NewsletterForm
