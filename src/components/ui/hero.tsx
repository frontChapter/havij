'use client'
import Image from 'next/image'
import FlickeringGrid from './flickering-grid'
import NewsletterForm from './NewsletterForm'
import WordPullUp from './word-pull-up'
import WordRotate from './word-rotate'

const HeroSection = () => {
  return (
    <section className='min-h-screen relative bg-gradient-to-b from-green-200 to-green-400 dark:from-green-800 dark:to-green-900 flex justify-center items-center px-4'>
      <div className='text-center -mt-36 z-20'>
        <div className='flex justify-center items-center mb-4'>
          <Image
            width={96}
            height={96}
            src='/havij/images/logo-without-text.svg'
            alt='Logo'
            className='w-24 h-auto'
          />
        </div>
        <div className='flex flex-col md:flex-row items-center gap-8 w-max mx-auto'>
          <Image
            src='/havij/images/hero-title-right.svg'
            width={200}
            height={50}
            alt=''
            className='hidden md:block w-auto'
          />
          <WordPullUp
            className='text-3xl md:text-5xl flex-1 font-extrabold text-green-800 dark:text-green-400 text-center md:text-left'
            words='فرانت چپتر'
          />
          <Image
            src='/havij/images/hero-title-left.svg'
            width={200}
            height={50}
            alt=''
            className='hidden md:block w-auto'
          />
        </div>
        <div className='text-lg md:text-2xl text-green-700 dark:text-green-300 font-medium mt-2 flex items-center gap-2 justify-center'>
          <WordRotate
            className='font-bold text-black dark:text-white'
            words={['آموزش', 'دورهمی', 'سفر', 'تجربه', 'ماهنامه']}
          />
          <span>با جامعه‌ی فرانت‌اند ایران</span>
        </div>
        <p className='text-sm md:text-base text-gray-600 max-w-2xl mx-auto dark:text-gray-300 mt-4 leading-relaxed text-center'>
          اینجا محلی صمیمی برای گفتگوی تخصصی هست. توی فرانت چیز هر دو هفته یک
          بار، دور هم جمع می‌شیم و درمورد چالش‌هایی که بهشون برخوردیم گپ و گفت
          می‌کنیم.
        </p>
        <div className='mt-6'>
          <NewsletterForm />
        </div>
      </div>
      <FlickeringGrid
        className='z-0 absolute inset-0 size-full'
        squareSize={12}
        gridGap={18}
        color='#ffffff'
        maxOpacity={0.15}
        flickerChance={1}
      />
    </section>
  )
}

export default HeroSection
