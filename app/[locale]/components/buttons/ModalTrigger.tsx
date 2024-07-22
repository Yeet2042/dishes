import { Button } from '@nextui-org/react'
import { useTranslations } from 'next-intl'
import React, { useState } from 'react'
import SignUpModal from '../modals/SignUpModal'
import SignInModal from '../modals/SignInModal'
import OTPModal from '../modals/OTPModal'
import TermsModal from '../modals/TermsModal'
import ForgotPassModal from '../modals/ForgotPassModal'

type Props = {}

export default function ModalTrigger({}: Props) {
  const tButtons = useTranslations('Buttons')

  const [otpEmail, setOTPEmail] = useState("")

  const [isSignUpOpen, setIsSignUpOpen] = useState(false)
  const [isSignInOpen, setIsSignInOpen] = useState(false)
  const [isOTPOpen, setIsOTPOpen] = useState(false)
  const [isTermsOpen, setIsTermsOpen] = useState(false)
  const [isForgotPassOpen, setIsForgotPassOpen] = useState(false)

  return (
    <>
      <Button
        color="primary"
        variant="flat"
        onClick={() => setIsSignUpOpen(true)}
      >
        {tButtons('signUp')}
      </Button>
      <SignUpModal
        isSignUpOpen={isSignUpOpen}
        setIsSignUpOpen={setIsSignUpOpen}
        setIsOTPOpen={setIsOTPOpen}
        setIsSignInOpen={setIsSignInOpen}
        setOTPEmail={setOTPEmail}
        setIsTermsOpen={setIsTermsOpen}
      />
      <SignInModal
        isSignInOpen={isSignInOpen}
        setIsSignUpOpen={setIsSignUpOpen}
        setIsSignInOpen={setIsSignInOpen}
        setIsForgotPassOpen={setIsForgotPassOpen}
      />
      <OTPModal
        isOTPOpen={isOTPOpen}
        setIsOTPOpen={setIsOTPOpen}
        setIsSignInOpen={setIsSignInOpen}
        otpEmail={otpEmail}
      />
      <TermsModal
        isTermsOpen={isTermsOpen}
        setIsTermsOpen={setIsTermsOpen}
      />
      <ForgotPassModal
        isForgotPassOpen={isForgotPassOpen}
        setIsForgotPassOpen={setIsForgotPassOpen}
        setIsSignInOpen={setIsSignInOpen}
      />
    </>
  )
}