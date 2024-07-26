'use client'
import { Button } from '@nextui-org/react'
import { useTranslations } from 'next-intl'
import React, { useState, Suspense } from 'react'
import dynamic from 'next/dynamic'

const SignUpModal = dynamic(() => import('../modals/SignUpModal'))
const SignInModal = dynamic(() => import('../modals/SignInModal'))
const OTPModal = dynamic(() => import('../modals/OTPModal'))
const TermsModal = dynamic(() => import('../modals/TermsModal'))
const ForgotPassModal = dynamic(() => import('../modals/ForgotPassModal'))

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
      <Suspense fallback={null}>
        {isSignUpOpen && (
          <SignUpModal
            isSignUpOpen={isSignUpOpen}
            setIsSignUpOpen={setIsSignUpOpen}
            setIsOTPOpen={setIsOTPOpen}
            setIsSignInOpen={setIsSignInOpen}
            setOTPEmail={setOTPEmail}
            setIsTermsOpen={setIsTermsOpen}
          />
        )}
        {isSignInOpen && (
          <SignInModal
            isSignInOpen={isSignInOpen}
            setIsSignUpOpen={setIsSignUpOpen}
            setIsSignInOpen={setIsSignInOpen}
            setIsForgotPassOpen={setIsForgotPassOpen}
          />
        )}
        {isOTPOpen && (
          <OTPModal
            isOTPOpen={isOTPOpen}
            setIsOTPOpen={setIsOTPOpen}
            setIsSignInOpen={setIsSignInOpen}
            otpEmail={otpEmail}
          />
        )}
        {isTermsOpen && (
          <TermsModal
            isTermsOpen={isTermsOpen}
            setIsTermsOpen={setIsTermsOpen}
          />
        )}
        {isForgotPassOpen && (
          <ForgotPassModal
            isForgotPassOpen={isForgotPassOpen}
            setIsForgotPassOpen={setIsForgotPassOpen}
            setIsSignInOpen={setIsSignInOpen}
          />
        )}
      </Suspense>
    </>
  )
}
