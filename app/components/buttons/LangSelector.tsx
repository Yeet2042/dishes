import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Image} from '@nextui-org/react'
import React, { useState, useMemo } from 'react'

type Props = {}

export default function LangSelector({}: Props) {
  const [lang, setLang] = useState(document.documentElement.lang)
  return (
    <Dropdown showArrow offset={10}>
      <DropdownTrigger>
        {lang == "th" ?
          <Image
            width={25}
            radius='none'
            alt='lang'
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg"
          /> :
          <Image
            width={25}
            radius='none'
            alt='lang'
            src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
          />
        }
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Static Actions"
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
        >
          English
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}