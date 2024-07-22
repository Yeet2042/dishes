import { Bars3Icon, XMarkIcon, MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Image, DropdownSection} from '@nextui-org/react'
import { useTranslations } from 'next-intl'
import {useTheme} from "next-themes"
import { useRouter } from 'next/navigation'
import React, { useState, useMemo } from 'react'

type Props = {}

export default function MenuButton({}: Props) {
  const router = useRouter()

  const tLabel = useTranslations('Label')

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const [lang, setLang] = useState<Set<string>>(new Set([`${document.documentElement.lang}`]))

  return (
    <>
      <Dropdown offset={10} isOpen={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <DropdownTrigger className="flex sm:hidden">
          <Button
            isIconOnly
            variant='light'
          >
            {isMenuOpen ? <XMarkIcon className='h-5 w-5'/> : <Bars3Icon className='h-5 w-5'/>}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Menu"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={lang}
          onSelectionChange={setLang}
        >
          <DropdownSection title={tLabel('theme')} showDivider>
            <DropdownItem
              onPress={() => {
                theme == 'dark' ? setTheme('light') : setTheme('dark')
                window.location.reload()
              }}
              startContent={theme == 'dark' ? <MoonIcon className='h-5 w-5'/> : <SunIcon className='h-5 w-5'/>}
            >
              {theme == 'dark' ? tLabel('darkMode') : tLabel('lightMode')}
            </DropdownItem>
          </DropdownSection>
          <DropdownSection title={tLabel('language')}>
            <DropdownItem
              key="th"
              startContent={
                <Image width={20}
                  radius='none'
                  alt='th'
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg"
                />
              }
              onPress={() => router.push('/th')}
            >
              ภาษาไทย
            </DropdownItem>
            <DropdownItem
              key="en"
              startContent={
                <Image width={20}
                  radius='none'
                  alt='en'
                  src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                />
              }
              onPress={() => router.push('/en')}
            >
              English
            </DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    </>
  )
}