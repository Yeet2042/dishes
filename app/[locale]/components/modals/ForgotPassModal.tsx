import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/solid"
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Checkbox, Link} from "@nextui-org/react"
import axios, { AxiosError } from "axios"
import { useTranslations } from "next-intl"
import React, { useEffect, useState } from 'react'
import Confetti from "../particles/Confetti"

type Props = {
  isForgotPassOpen: boolean,
  setIsForgotPassOpen: (open: boolean) => void,
  setIsSignInOpen: (open: boolean) => void
}

const recoverPassRoute = '/api/auth/recover_password'

export default function ForgotPassModal({ isForgotPassOpen, setIsForgotPassOpen, setIsSignInOpen }: Props) {
  const tButtons = useTranslations('Buttons')
  const tModals = useTranslations('Modals')
  const tSuccess = useTranslations('Success')
  const tError = useTranslations('Error')

  const [email, setEmail] = useState("")

  const [isDisable, setIsDisable] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const [isEmailInvalid, setIsEmailInvalid] = useState(false)

  const handleRecover = async () => {
    setIsLoading(true)
    try {
      const res = await axios.post(recoverPassRoute, {
        email: email
      })
      if (res.status == 200) {
        setIsSuccess(true)
        setIsLoading(false)
        setIsEmailInvalid(false)
        await new Promise(resolve => setTimeout(resolve, 2500))
        setIsForgotPassOpen(false)
        setIsSignInOpen(true)
        setEmail("")
        setIsSuccess(false)
      }
    } catch (error: any | AxiosError) {
      if (axios.isAxiosError(error)) {
        setIsLoading(false)
        if (error.response?.status === 400) {
          setIsEmailInvalid(true)
        } else if (error.response?.status === 401) {
          setIsEmailInvalid(true)
        } else if (error.response?.status === 500) {
          alert(error.response?.data.message)
        } else {
          alert(error)
        }
      }
    }
  }

  useEffect(() => {
    setIsDisable(!(email !== ""))
  }, [email])

  return (
    <>
      <Modal
        isOpen={isForgotPassOpen}
        onOpenChange={setIsForgotPassOpen}
        size="md"
        hideCloseButton
        backdrop="blur"
      >
        <ModalContent>
          {(onclose) => (
            <div className="flex flex-col mx-4 my-6 gap-4">
              <ModalHeader className="flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <h1
                    className="font-bold text-3xl"
                  >
                    {tButtons('recoverPass')}
                  </h1>
                  <p className="text-sm font-normal">{tModals('titleRecoverPass')}</p>
                </div>
                {
                  isSuccess &&
                  <div className="bg-green-100 p-4 rounded-md">
                    <p className="text-sm font-normal text-success-700">
                      {tModals('titleRecoverPassSuccess')} {email}
                    </p>
                  </div>
                }
              </ModalHeader>
              <ModalBody className="gap-4">
                <Input
                  type="email"
                  label={tModals('email')}
                  variant="bordered"
                  labelPlacement="outside"
                  placeholder="example@dishes.com"
                  startContent={
                    <EnvelopeIcon className="w-5 h-5"/>
                  }
                  isInvalid={isEmailInvalid ? true : false}
                  errorMessage={tError('emailInvalid')}
                  value={email}
                  onValueChange={setEmail}
                />
                <Button
                  className="p-5"
                  isDisabled={isDisable}
                  color={isDisable ? 'default' : 'success'}
                  onPress={handleRecover}
                  isLoading={isLoading}
                >
                  {isSuccess && <Confetti/>}
                  {isSuccess ? tSuccess('true') : tButtons('recoverPass')}
                </Button>
              </ModalBody>
              <ModalFooter/>
            </div>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}