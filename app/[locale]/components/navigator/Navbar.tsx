'use client'
import { MagnifyingGlassIcon, ArchiveBoxIcon, SunIcon, MoonIcon } from '@heroicons/react/24/solid'
import { Button, Navbar as NextNavbar, NavbarBrand, NavbarContent, NavbarItem, Input, Link, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Image} from '@nextui-org/react'
import {useTheme} from "next-themes"
import React, { useState, useEffect } from 'react'
import LangSelector from '../buttons/LangSelector'
import SignUpButton from '../buttons/SignUpButton'

type Props = {}

export default function Navbar({}: Props) {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null
  return (
    <NextNavbar>
      <NavbarBrand className='gap-3 sm:gap-8'>
        <p className="font-bold text-inherit">DISHES</p>
        <div className='flex items-center gap-3'>
          <Button
            isIconOnly
            variant='light'
            onPress={() => theme == 'dark' ? setTheme('light') : setTheme('dark')}
          >
            {theme == 'dark' ? <MoonIcon className='h-5 w-5'/> : <SunIcon className='h-5 w-5'/>}
          </Button>
          <LangSelector/>
        </div>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex" justify="center">
        <Input
          placeholder="Type to search..."
          size="sm"
          startContent={<MagnifyingGlassIcon className='h-6 w-6'/>}
          type="search"
        />
      </NavbarContent>
      <NavbarContent
        justify="end"
        className='gap-1 sm:gap-4'
      >
        <NavbarItem className='flex'>
          <Button
            isIconOnly
            variant='light'
            className='flex sm:hidden'
          >
            <MagnifyingGlassIcon className='w-5 h-5'/>
          </Button>
          <Button
            isIconOnly
            variant='light'
          >
            <ArchiveBoxIcon className='w-5 h-5'/>
          </Button>
        </NavbarItem>
        <NavbarItem>
          <SignUpButton/>
        </NavbarItem>
      </NavbarContent>
    </NextNavbar>
  )
}