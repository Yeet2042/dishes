import { UserIcon, EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/solid"
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Checkbox, Link} from "@nextui-org/react"
import axios from "axios"
import React, { useEffect, useState } from 'react'

type Props = {}

export default function SignUpButton({}: Props) {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false)
  const [isSignInOpen, setIsSignInOpen] = useState(false)

  const openSignUpModal = () => setIsSignUpOpen(true)
  const closeSignUpModal = () => setIsSignUpOpen(false)

  const openSignInModal = () => setIsSignInOpen(true)
  const closeSignInModal = () => setIsSignInOpen(false)

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [conPassword, setConPassword] = useState("")
  const [agreeTerms, setAgreeTerms] = useState(false)

  const [isSignUpDisabled, setIsSignUpDisabled] = useState(true)
  const [isSignInDisabled, setIsSignInDisabled] = useState(true)

  const [isRegisterLoading, setIsRegisterLoading] = useState(false)
  const [isLogIn, setIsLogIn] = useState(false)

  const [isRegisterSuccess, setIsRegisterSuccess] = useState(false)
  const [isLogInSuccess, setIsLogInSuccess] = useState(false)

  const handleRegister = async () => {
    setIsRegisterLoading(true)
    await axios.post('/api/auth', {
      username: username,
      email: email,
      password: password
    }).then(res => {
      if (res.data.success == true) {
        setIsRegisterSuccess(true)
      }
    }).catch(error => {
      console.log(error)
      
    }).finally(() => {
      setIsRegisterLoading(false)
    })
  }

  const handleLogIn = async () => {
    console.log('OH YEAH')
  }

  useEffect(() => {
    setIsSignUpDisabled(!(username !== "" && email !== "" && password !== "" && password == conPassword && agreeTerms == true))
    setIsSignInDisabled(!(email !== "" && password !== ""))
  }, [username, email, password, conPassword, agreeTerms])

  return (
    <>
      <Button
        color="primary"
        variant="flat"
        onClick={openSignUpModal}
      >
        Sign Up
      </Button>
      {/* Sign Up modal */}
      <Modal
        isOpen={isSignUpOpen}
        onOpenChange={setIsSignUpOpen}
        size="md"
        hideCloseButton
      >
        <ModalContent>
          {(onclose) => (
            <div className="mx-4">
              <ModalHeader className="flex-col my-4 sm:my-8">
                <h1
                  className="font-bold text-2xl sm:text-3xl"
                >
                  Sign Up
                </h1>
                <p className="text-sm font-normal">Sign up to access Dishes!</p>
              </ModalHeader>
              <ModalBody
                className="gap-4"
              >
                <Input
                  type="text"
                  label="Username"
                  variant="bordered"
                  labelPlacement="outside"
                  placeholder="Example007"
                  startContent={
                    <UserIcon className="w-5 h-5"/>
                  }
                  value={username}
                  onValueChange={setUsername}
                />
                <Input
                  type="email"
                  label="Email"
                  variant="bordered"
                  labelPlacement="outside"
                  placeholder="example@dishes.com"
                  startContent={
                    <EnvelopeIcon className="w-5 h-5"/>
                  }
                  value={email}
                  onValueChange={setEmail}
                />
                <Input
                  type="password"
                  label="Password"
                  variant="bordered"
                  labelPlacement="outside"
                  placeholder="••••••••"
                  startContent={
                    <LockClosedIcon className="w-5 h-5"/>
                  }
                  value={password}
                  onValueChange={setPassword}
                />
                <Input
                  type="password"
                  label="Confirm Password"
                  variant="bordered"
                  labelPlacement="outside"
                  placeholder="••••••••"
                  startContent={
                    <LockClosedIcon className="w-5 h-5"/>
                  }
                  isInvalid={password == conPassword ? false : true}
                  errorMessage="Password does not match"
                  value={conPassword}
                  onValueChange={setConPassword}
                />
                <Checkbox
                  isSelected={agreeTerms}
                  onValueChange={setAgreeTerms}
                >
                  <p className="text-sm sm:text-base">Agree with <Link className="text-xs sm:text-base">Terms & Condition</Link></p>
                </Checkbox>
                <Button
                  className="p-5"
                  isDisabled={isSignUpDisabled}
                  color={isSignUpDisabled == true ? 'default' : 'success'}
                  onPress={handleRegister}
                  isLoading={isRegisterLoading}
                >
                  {isRegisterSuccess == true ? 'Success! 🎉' : 'Register'}
                </Button>
                <div className="flex justify-center gap-1">
                  <p className="text-xs sm:text-base">
                    Already have an account?
                  </p>
                  <Link
                    className="text-xs sm:text-base"
                    onPress={() => {
                      closeSignUpModal()
                      openSignInModal()
                    }}
                  >
                      Sign In
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter className="flex-col items-center gap-4 mb-4 sm:mb-8">
                <div className="flex items-center w-full">
                  <div className="border border-default-400 w-full h-px"></div>
                  <div className="px-2">or</div>
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

      {/* Sign In modal */}
      <Modal
        isOpen={isSignInOpen}
        onOpenChange={setIsSignInOpen}
        size="md"
        hideCloseButton
      >
        <ModalContent>
          {(onclose) => (
            <div className="mx-4">
              <ModalHeader className="flex-col my-4 sm:my-8">
                <h1
                  className="font-bold text-2xl sm:text-3xl"
                >
                  Sign In
                </h1>
                <p className="text-sm font-normal">Sign In to access Dishes!</p>
              </ModalHeader>
              <ModalBody
                className="gap-4"
              >
                <Input
                  type="email"
                  label="Email"
                  variant="bordered"
                  labelPlacement="outside"
                  placeholder="example@dishes.com"
                  startContent={
                    <EnvelopeIcon className="w-5 h-5"/>
                  }
                  value={email}
                  onValueChange={setEmail}
                />
                <Input
                  type="password"
                  label="Password"
                  variant="bordered"
                  labelPlacement="outside"
                  placeholder="••••••••"
                  startContent={
                    <LockClosedIcon className="w-5 h-5"/>
                  }
                  value={password}
                  onValueChange={setPassword}
                />
                <Link className="self-end text-sm">
                  Forgot Password?
                </Link>
                <Button
                  className="p-5"
                  isDisabled={isSignInDisabled}
                  color={isSignInDisabled == true ? 'default' : 'success'}
                  onPress={handleLogIn}
                >
                  Log in
                </Button>
                <div className="flex justify-center gap-1">
                  <p className="text-xs sm:text-base">
                    Does not have an account?
                  </p>
                  <Link
                    className="text-sm sm:text-base"
                    onPress={() => {
                      closeSignInModal()
                      openSignUpModal()
                    }}
                  >
                      Sign Up
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter className="flex-col items-center gap-4 mb-4 sm:mb-8">
                <div className="flex items-center w-full">
                  <div className="border border-default-400 w-full h-px"></div>
                  <div className="px-2">or</div>
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