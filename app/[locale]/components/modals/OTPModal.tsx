import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Link} from "@nextui-org/react"
import axios, { AxiosError } from "axios"
import { useTranslations } from "next-intl"
import React, { useEffect, useState } from 'react'
import Confetti from "../particles/Confetti"

type Props = {
  isOTPOpen: boolean,
  setIsOTPOpen: (open: boolean) => void,
  setIsSignInOpen: (open: boolean) => void,
  otpEmail: string
}

const OTPRoute = '/api/auth/otp'

export default function OTPModal({ isOTPOpen, setIsOTPOpen, otpEmail, setIsSignInOpen }: Props) {
  const tButtons = useTranslations('Buttons')
  const tModals = useTranslations('Modals')
  const tSuccess = useTranslations('Success')
  const tError = useTranslations('Error')

  const [otp1, setOtp1] = useState("")
  const [otp2, setOtp2] = useState("")
  const [otp3, setOtp3] = useState("")
  const [otp4, setOtp4] = useState("")
  const [otp5, setOtp5] = useState("")
  const [otp6, setOtp6] = useState("")

  const [isOTPDisabled, setIsDisabled] = useState(true)
  const [isOTPLoading, setIsLoading] = useState(false)
  const [isOTPSuccess, setIsSuccess] = useState(false)

  const [isOTPInvalid, setIsOTPInvalid] = useState(false)

  const handleOTP = async () => {
    setIsLoading(true)
    const otp = otp1 + otp2 + otp3 + otp4 + otp5 + otp6
    try {
      const res = await axios.post(OTPRoute, {
        otp: otp
      })
      if (res.status == 200) {
        //reset loading & success
        setIsSuccess(true)
        setIsLoading(false)
        await new Promise(resolve => setTimeout(resolve, 1000))
        //close form
        setIsOTPOpen(false)
        setIsSignInOpen(true)
        //reset form
        setOtp1("")
        setOtp2("")
        setOtp3("")
        setOtp4("")
        setOtp5("")
        setOtp6("")
        setIsSuccess(false)
      }
    } catch (error: any | AxiosError) {
      if (axios.isAxiosError(error)) {
        setIsLoading(false)
        if (error.response?.status === 401) {
          setIsOTPInvalid(true)
        } else if (error.response?.status === 403) {
          alert(error.response?.data.message)
        } else if (error.response?.status === 500) {
          alert(error.response?.data.message)
        } else {
          alert(error)
        }
      }
    }
  }

  useEffect(() => {
    setIsDisabled(!(otp1 !== "" && otp2 !== "" && otp3 !== "" && otp4 !== "" && otp5 !== "" && otp6 !== ""))
  }, [otp1, otp2, otp3, otp4, otp5, otp6])

  return (
    <>
      <Modal
        isOpen={isOTPOpen}
        onOpenChange={setIsOTPOpen}
        size="md"
        hideCloseButton
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        backdrop="blur"
      >
        <ModalContent>
          {(onclose) => (
            <div className="flex flex-col mx-4 my-6 gap-4">
              <ModalHeader className="flex-col gap-1">
                <h1
                  className="font-bold text-3xl"
                >
                  {tModals('headerOTP')}
                </h1>
                <div className="bg-green-100 p-4 rounded-md">
                  <p className="text-sm font-normal text-success-700">
                    {tModals('titleOTP')} {otpEmail}
                  </p>
                </div>
              </ModalHeader>
              <ModalBody className="flex flex-col gap-4">
                <div>
                  <div className="flex gap-4">
                    <Input
                      type="text"
                      variant="bordered"
                      value={otp1}
                      onValueChange={setOtp1}
                      size="lg"
                      maxLength={1}
                      isInvalid={isOTPInvalid ? true : false}
                    />
                    <Input
                      type="text"
                      variant="bordered"
                      value={otp2}
                      onValueChange={setOtp2}
                      size="lg"
                      maxLength={1}
                      isInvalid={isOTPInvalid ? true : false}
                    />
                    <Input
                      type="text"
                      variant="bordered"
                      value={otp3}
                      onValueChange={setOtp3}
                      size="lg"
                      maxLength={1}
                      isInvalid={isOTPInvalid ? true : false}
                    />
                    <Input
                      type="text"
                      variant="bordered"
                      value={otp4}
                      onValueChange={setOtp4}
                      size="lg"
                      maxLength={1}
                      isInvalid={isOTPInvalid ? true : false}
                    />
                    <Input
                      type="text"
                      variant="bordered"
                      value={otp5}
                      onValueChange={setOtp5}
                      size="lg"
                      maxLength={1}
                      isInvalid={isOTPInvalid ? true : false}
                    />
                    <Input
                      type="text"
                      variant="bordered"
                      value={otp6}
                      onValueChange={setOtp6}
                      size="lg"
                      maxLength={1}
                      isInvalid={isOTPInvalid ? true : false}
                    />
                  </div>
                  {isOTPInvalid && <p className="text-xs text-danger mt-2">{tError('otpInvalid')}</p>}
                </div>
                <Button
                  className="p-5"
                  isDisabled={isOTPDisabled}
                  color={isOTPDisabled == true ? 'default' : 'success'}
                  onPress={handleOTP}
                  isLoading={isOTPLoading}
                >
                  {isOTPSuccess && <Confetti/>}
                  {isOTPSuccess == true ? tSuccess('true') : tButtons('submit')}
                </Button>
              </ModalBody>
              <ModalFooter className="flex-col items-center">
                <div className="flex justify-center gap-1">
                  <p className="text-sm sm:text-base">
                    {tModals('notHaveCode')}
                  </p>
                  <Link
                    className="text-sm sm:text-base"
                  >
                      {tButtons('requestAgain')}
                  </Link>
                </div>
              </ModalFooter>
            </div>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}