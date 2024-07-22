import { UserIcon, EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/solid"
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Checkbox, Link} from "@nextui-org/react"
import axios, { AxiosError } from "axios"
import { useTranslations } from "next-intl"
import React, { useEffect, useState } from 'react'
import Confetti from "../particles/Confetti"

type Props = {
  isSignUpOpen: boolean,
  setIsSignUpOpen: (open: boolean) => void,
  setIsOTPOpen: (open: boolean) => void,
  setIsSignInOpen: (open: boolean) => void,
  setOTPEmail:(email: string) => void,
  setIsTermsOpen:(open: boolean) => void
}

const registerRoute = '/api/auth/register'

export default function SignUpModal({ isSignUpOpen, setIsSignUpOpen, setIsOTPOpen, setIsSignInOpen, setOTPEmail, setIsTermsOpen }: Props) {
  const tButtons = useTranslations('Buttons')
  const tModals = useTranslations('Modals')
  const tSuccess = useTranslations('Success')
  const tError = useTranslations('Error')
  const tTerms = useTranslations('Terms')

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [conPassword, setConPassword] = useState("")
  const [agreeTerms, setAgreeTerms] = useState(false)

  const [isDisabled, setIsDisabled] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const [isUsernameUsed, setIsUsernameUsed] = useState(false)
  const [isEmailUsed, setIsEmailUsed] = useState(false)

  const handleRegister = async () => {
    setIsLoading(true)
    try {
      const res = await axios.post(registerRoute, {
        username: username,
        email: email,
        password: password
      })

      if (res.status == 200) {
        //reset loading & success
        setIsLoading(false)
        setIsSuccess(true)
        setIsUsernameUsed(false)
        setIsEmailUsed(false)
        //send otpEmail
        setOTPEmail(email)
        await new Promise(resolve => setTimeout(resolve, 1000))
        //close form
        setIsSignUpOpen(false)
        setIsOTPOpen(true)
        //reset form
        setUsername("")
        setEmail("")
        setPassword("")
        setConPassword("")
        setAgreeTerms(false)
        setIsSuccess(false)
      }
    } catch (error: any | AxiosError) {
      if (axios.isAxiosError(error)) {
        setIsLoading(false)
        if (error.response?.status === 409) {
          if (error.response?.data.message == 'both') {
            setIsUsernameUsed(true)
            setIsEmailUsed(true)
          } else if (error.response?.data.message == 'username') {
            setIsUsernameUsed(true)
            setIsEmailUsed(false)
          } else if (error.response?.data.message == 'email') {
            setIsUsernameUsed(false)
            setIsEmailUsed(true)
          }
        } else if (error.response?.status === 500) {
          alert(error.response?.data.message)
        } else {
          alert(error)
        }
      }
    }
  }

  useEffect(() => {
    setIsDisabled(!(username !== "" && email !== "" && password !== "" && password == conPassword && agreeTerms == true))
  }, [username, email, password, conPassword, agreeTerms])

  return (
    <>
      <Modal
        isOpen={isSignUpOpen}
        onOpenChange={setIsSignUpOpen}
        size="md"
        hideCloseButton
        backdrop="blur"
      >
        <ModalContent>
          {(onclose) => (
            <div className="flex flex-col mx-4 my-6 gap-4">
              <ModalHeader className="flex-col gap-1">
                <h1
                  className="font-bold text-3xl"
                >
                  {tButtons('signUp')}
                </h1>
                <p className="text-sm font-normal">{tModals('titleSignUp')}</p>
              </ModalHeader>
              <ModalBody className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <Input
                    type="text"
                    label={tModals('username')}
                    variant="bordered"
                    labelPlacement="outside"
                    placeholder="Example007"
                    startContent={
                      <UserIcon className="w-5 h-5"/>
                    }
                    isInvalid={isUsernameUsed ? true : false}
                    errorMessage={tError('usernameExited')}
                    value={username}
                    onValueChange={setUsername}
                  />
                  <Input
                    type="email"
                    label={tModals('email')}
                    variant="bordered"
                    labelPlacement="outside"
                    placeholder="example@dishes.com"
                    startContent={
                      <EnvelopeIcon className="w-5 h-5"/>
                    }
                    isInvalid={isEmailUsed ? true : false}
                    errorMessage={tError('emailExited')}
                    value={email}
                    onValueChange={setEmail}
                  />
                  <Input
                    type="password"
                    label={tModals('password')}
                    variant="bordered"
                    labelPlacement="outside"
                    placeholder="••••••••"
                    startContent={
                      <LockClosedIcon className="w-5 h-5"/>
                    }
                    isInvalid={password == conPassword ? false : true}
                    errorMessage={tError('passNotMatch')}
                    value={password}
                    onValueChange={setPassword}
                  />
                  <Input
                    type="password"
                    label={tModals('conPassword')}
                    variant="bordered"
                    labelPlacement="outside"
                    placeholder="••••••••"
                    startContent={
                      <LockClosedIcon className="w-5 h-5"/>
                    }
                    isInvalid={password == conPassword ? false : true}
                    errorMessage={tError('passNotMatch')}
                    value={conPassword}
                    onValueChange={setConPassword}
                  />
                </div>
                <Checkbox
                  isSelected={agreeTerms}
                  onValueChange={setAgreeTerms}
                >
                  <p className="text-sm sm:text-base">{tModals('agreeWith')} <Link className="text-sm sm:text-base" onPress={() => setIsTermsOpen(true)}>{tTerms('terms')}</Link></p>
                </Checkbox>
                <Button
                  className="p-5"
                  isDisabled={isDisabled}
                  color={isDisabled == true ? 'default' : 'success'}
                  onPress={handleRegister}
                  isLoading={isLoading}
                >
                  {isSuccess && <Confetti/>}
                  {isSuccess ? tSuccess('true') : tButtons('register')}
                </Button>
                <div className="flex justify-center gap-1">
                  <p className="text-sm sm:text-base">
                    {tModals('alreadyAcc')}
                  </p>
                  <Link
                    className="text-sm sm:text-base"
                    onPress={() => {
                      setIsSignUpOpen(false)
                      setIsSignInOpen(true)
                    }}
                  >
                      {tButtons('signIn')}
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter className="flex-col items-center gap-4">
                <div className="flex items-center w-full">
                  <div className="border border-default-400 w-full h-px"></div>
                  <div className="px-2">{tModals('or')}</div>
                  <div className="border border-default-400 w-full h-px"></div>
                </div>
                <div className="flex gap-4">
                  <Button isIconOnly variant="light" className="p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
                      <path fill="#3F51B5" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"></path>
                    </svg>
                  </Button>
                  <Button isIconOnly variant="light" className="p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
                      <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                    </svg>
                  </Button>
                  <Button isIconOnly variant="light" className="p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
                      <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
                    </svg>
                  </Button>
                </div>
              </ModalFooter>
            </div>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}