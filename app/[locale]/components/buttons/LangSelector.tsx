'use client'
import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Image} from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import React, { useState, useMemo, useEffect } from 'react'

type Props = {}

export default function LangSelector({}: Props) {
  const router = useRouter()
  const [lang, setLang] = useState<Set<string>>(new Set())

  const selectedValue = useMemo(
    () => Array.from(lang).join(", ").replaceAll("_", " "),
    [lang]
  )

  const handleSelectionChange = (keys: any) => {
    const selectedSet = new Set<string>(keys);
    setLang(selectedSet);
  }

  useEffect(() => {
    setLang(new Set([`${document.documentElement.lang}`]));
  }, [])

  return (
    <>
      <Dropdown showArrow offset={10}>
        <DropdownTrigger>
          {selectedValue == "th" ?
            <Button
              isIconOnly
              variant='light'
            >
              <Image
                width={25}
                radius='none'
                alt='th'
                src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg"
              />
            </Button>
            :
            <Button
              isIconOnly
              variant='light'
            >
              <Image
                width={25}
                radius='none'
                alt='en'
                src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
              />
            </Button>
          }
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Language Selection"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={lang}
          onSelectionChange={handleSelectionChange}
        >
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
        </DropdownMenu>
      </Dropdown>
    </>
  )
}