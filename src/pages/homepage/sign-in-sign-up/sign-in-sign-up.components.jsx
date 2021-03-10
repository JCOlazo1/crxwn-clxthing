import React from 'react'
import SignIn from '../../../components/sign-in/sign-in.components'
import Signup from '../../../components/sign-up/sign-up.component'
import './sign-in-sign-up.styles.scss'

const SignInSignUp = () => {
  return (
    <div className='sign-in-sign-up'>
      <SignIn />
      <Signup />
    </div>
  )
}

export default SignInSignUp
