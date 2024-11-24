'use client'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import {
  ChevronDown,
  HomeIcon,
  LogOut,
  Menu,
  Settings,
  User,
} from 'lucide-react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './avatar'
import { Button } from './button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './dropdown-menu'
import { Sheet, SheetContent, SheetTrigger } from './sheet'

interface SubMenuItem {
  title: string
  href: string
  description?: string
}

interface NavigationItem {
  title: string
  href: string
  titleEn?: string
  icon?: React.ReactNode
  submenu?: SubMenuItem[]
}

const navigationItems: NavigationItem[] = [
  {
    title: 'صفحه اصلی',
    href: '/',
    titleEn: 'Home',
    icon: <HomeIcon />,
  },
  {
    title: 'هویج تایمز',
    href: '/havij-times',
    titleEn: 'HavijTimes',
  },
  {
    title: 'هویج کست',
    href: '/havij-cast',
    titleEn: 'HavijCast',
    submenu: [
      {
        title: 'قسمت‌ها',
        href: '/havij-cast/episodes',
        description: 'لیست قسمت‌ها و پادکست‌های هویج',
      },
      {
        title: 'درباره پادکست',
        href: '/havij-cast/about',
        description: 'اطلاعات مربوط به پادکست هویج کست',
      },
    ],
  },
  {
    title: 'همایش فرانت چپتر',
    href: '/conference',
    titleEn: 'Conference',
    submenu: [
      {
        title: 'برنامه همایش',
        href: '/conference/schedule',
        description: 'جدول زمانی و برنامه‌های همایش فرانت چپتر',
      },
      {
        title: 'سخنرانان',
        href: '/conference/speakers',
        description: 'لیست سخنرانان و موضوعات ارائه‌ها',
      },
      {
        title: 'محل برگزاری',
        href: '/conference/venue',
        description: 'اطلاعات مربوط به محل برگزاری همایش',
      },
      {
        title: 'ثبت نام',
        href: '/conference/register',
        description: 'ثبت نام و خرید بلیت برای شرکت در همایش',
      },
    ],
  },
  {
    title: 'جشنواره من قهرمانم',
    href: '/festival',
    titleEn: 'Festival',
  },
]

const ListItem: React.FC<{
  className?: string
  title: string
  href: string
  description?: string
}> = ({ className, title, href, description }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            'block select-none space-y-1 text-right rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          {description && (
            <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
              {description}
            </p>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

const Header: React.FC = () => {
  const pathname = usePathname()
  const { resolvedTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container max-w-7xl flex h-16 items-center justify-between'>
        <div className='flex items-center space-x-2 rtl:space-x-reverse md:space-x-4'>
          <Sheet
            open={isOpen}
            onOpenChange={setIsOpen}
          >
            <SheetTrigger asChild>
              <Button
                variant='ghost'
                size='icon'
                className='md:hidden'
              >
                <Menu className='h-5 w-5' />
                <span className='sr-only'>Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side='right'
              className='w-[300px] sm:w-[400px] pr-0'
            >
              <nav className='flex flex-col gap-4 mt-6'>
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'text-lg font-medium transition-colors hover:text-orange-500 py-2',
                      pathname === item.href
                        ? 'bg-orange-500 text-white me-1'
                        : ''
                    )}
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <Link
            href='/'
            className='flex items-center space-x-2 rtl:space-x-reverse'
          >
            <Image
              src={
                resolvedTheme === 'dark'
                  ? '/havij/images/logo-darkmode.svg'
                  : '/havij/images/logo.svg'
              }
              alt='FrontChapter'
              height={32}
              width={128}
            />
          </Link>
          <NavigationMenu className='hidden md:flex'>
            <NavigationMenuList className='gap-1'>
              {navigationItems.map((item) =>
                item.submenu ? (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
                        {item.submenu.map((submenu) => (
                          <ListItem
                            key={submenu.title}
                            title={submenu.title}
                            href={submenu.href}
                            description={submenu.description}
                          />
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.title}>
                    <Link href={item.href}>
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),
                          'rounded-lg',
                          pathname === item.href ||
                            pathname.startsWith(`${item.href}/`)
                            ? 'bg-orange-500 text-white me-1'
                            : ''
                        )}
                      >
                        {item?.icon && (
                          <span className='[&>svg]:size-4 me-2'>
                            {item.icon}
                          </span>
                        )}
                        {item.title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className='flex items-center'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant='ghost'
                className='gap-2 hover:bg-orange-500/10 hover:text-orange-500'
              >
                <Avatar className='size-7'>
                  <AvatarImage src='https://github.com/shadcn.png' />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className='hidden sm:inline-block'>علی گلکار</span>
                <ChevronDown className='h-4 w-4 hidden sm:inline-block' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align='end'
              className='w-56'
            >
              <DropdownMenuLabel>حساب کاربری من</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className='mr-2 h-4 w-4' />
                <span>پروفایل</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className='mr-2 h-4 w-4' />
                <span>تنظیمات</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className='mr-2 h-4 w-4' />
                <span>خروج</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

export default Header
