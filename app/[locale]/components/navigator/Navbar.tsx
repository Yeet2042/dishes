import { MagnifyingGlassIcon, ArchiveBoxIcon } from '@heroicons/react/24/solid'
import { Button, Navbar as NextNavbar, NavbarBrand, NavbarContent, NavbarItem, Input} from '@nextui-org/react'
import React from 'react'
import LangSelector from '../buttons/LangSelector'
import ModalTrigger from '../buttons/ModalTrigger'
import MenuButton from '../buttons/MenuButton'
import ThemeSelector from '../buttons/ThemeSelector'

type Props = {}

export default function Navbar({}: Props) {
  return (
    <NextNavbar maxWidth='xl' className="fixed top-0 left-0 right-0 z-50 shadow-xl">
      <NavbarBrand className='gap-3 sm:gap-8'>
        <MenuButton/>
        <p className="font-bold text-inherit">DISHES</p>
        <div className='hidden sm:flex items-center gap-3'>
          <ThemeSelector/>
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
        <NavbarItem>
          <ModalTrigger/>
        </NavbarItem>
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
      </NavbarContent>
    </NextNavbar>
  )
}