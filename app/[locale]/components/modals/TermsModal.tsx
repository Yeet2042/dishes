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
      >
        <ModalContent>
          {(onclose) => (
            <div className="mx-4">
              <ModalHeader className="flex-col mt-8">
                <h1
                  className="font-bold text-2xl sm:text-3xl"
                >
                  {tTerms('terms')}
                </h1>
                <p className="text-sm font-normal">
                  {tTerms('title')}
                </p>
              </ModalHeader>
              <ModalBody
                className="gap-4"
              >
                <div>
                  <h2 className="font-bold text-xl">{tTerms('header1')}</h2>
                  <p className="text-sm font-normal">{tTerms('param1')}</p>
                </div>
                <div>
                  <h2 className="font-bold text-xl">{tTerms('header2')}</h2>
                  <p className="text-sm font-normal">{tTerms('param2')}</p>
                </div>
                <div>
                  <h2 className="font-bold text-xl">{tTerms('header3')}</h2>
                  <div className="flex flex-col gap-4">
                    <p className="text-sm font-normal">{tTerms('param3')}</p>
                    <p className="text-sm font-normal">{tTerms('param4')}</p>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter className="flex-col items-center mb-4">
              </ModalFooter>
            </div>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}