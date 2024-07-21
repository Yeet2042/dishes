import {useTranslations} from 'next-intl'
import React from 'react'

type Props = {}

export default function Page({}: Props) {
  const t = useTranslations('HomePage')
  return (
    <>
      <h1>{t('title')}</h1>
    </>
  )
}