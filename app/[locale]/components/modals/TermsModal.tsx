import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter} from "@nextui-org/react"
import { useTranslations } from "next-intl"
import React from 'react'

type Props = {
  isTermsOpen: boolean,
  setIsTermsOpen: (open: boolean) => void
}

export default function TermsModal({ isTermsOpen, setIsTermsOpen }: Props) {
  const tTerms = useTranslations('Terms')

  return (
    <>
      <Modal
        isOpen={isTermsOpen}
        onOpenChange={setIsTermsOpen}
        size="xl"
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        backdrop="blur"
        scrollBehavior="outside"
      >
        <ModalContent>
          {(onclose) => (
            <div className="flex flex-col mx-4 my-6 gap-4">
              <ModalHeader className="flex-col gap-1">
                <h1
                  className="font-bold text-xl sm:text-3xl"
                >
                  {tTerms('terms')}
                </h1>
                <p className="text-sm font-normal">
                  {tTerms('title')}
                </p>
              </ModalHeader>
              <ModalBody className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <h2 className="font-bold text-xl">{tTerms('header1')}</h2>
                  <p className="text-sm font-normal">{tTerms('param1')}</p>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="font-bold text-xl">{tTerms('header2')}</h2>
                  <p className="text-sm font-normal">{tTerms('param2')}</p>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="font-bold text-xl">{tTerms('header3')}</h2>
                  <div className="flex flex-col gap-4">
                    <p className="text-sm font-normal">{tTerms('param3')}</p>
                    <p className="text-sm font-normal">{tTerms('param4')}</p>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter/>
            </div>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}