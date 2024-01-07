

import Label from '@/components/Label'
import React, { useEffect, useState } from 'react'
import { Button, ShowLottie } from '../../components'
import Heading from '../../components/Heading'
import Input from '../../components/Input'
type Props = {}
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from 'react-hot-toast'
import { useAuth } from '@/context/auth-context'
import { initializer } from '@/config/firebase'
import { useRouter } from 'next/router'
function login({ }: Props) {

  const [state, setState] = useState<{
    email: string,
    password: string,
  }>({
    email: '',
    password: ''
  })

  const { login, user } = useAuth()

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    let { name, value } = e.target
    setState({
      ...state,
      [name]: value
    })
  }

  const [loading, setLoading] = useState(false)

  function handleSubmit() {
    //validate email and password
    if (!state.email || !state.password) {

      toast.error('Please fill in all fields')
      return
    }
    initializer()
    const auth = getAuth();
    setLoading(true)
    signInWithEmailAndPassword(auth, state.email, state.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        login(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      }).finally(() => {
        setLoading(false)
      });
  }
  const router = useRouter()
  useEffect(() => {
    if (user) {
      router.push('/admin/dashboard')
    }
  }, [user])


  return (
    <div className='center h-full w-full'>
      <section className='h-screen bg-aqua-100 w-[50vw] hidden md:flex items-center justify-center'>
        <ShowLottie path="/lotties/login.json" className="h-max w-max" />
      </section>
      <section className='w-screen center flex-col h-screen md:w-[50vw]'>
        <div className=' border rounded-xl p-9 md:w-[25rem] flex flex-col gap-9'>
          <Heading size='h2' className='text-center'>Login to your account</Heading>
          <div className='flex flex-col gap-6 w-full'>
            <div className='flex flex-col gap-2'>
              <Label
              >
                Email
              </Label>
              <Input type='email'
                value={state.email}
                onChange={handleChange}
                name='email'
              />

            </div>
            <div className='flex flex-col gap-2'>
              <Label>
                Password
              </Label>
              <Input type='password'
                value={state.password}
                onChange={handleChange}
                name='password'
              />

            </div>
            <div>
              <Button className='w-full'
                loading={loading}
                loadingText='Processing'
                onClick={handleSubmit}
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default login