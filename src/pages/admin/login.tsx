

import Label from '@/components/Label'
import React from 'react'
import { Button, ShowLottie } from '../../components'
import Heading from '../../components/Heading'
import Input from '../../components/Input'
type Props = {}

function login({ }: Props) {
  return (
    <div className='center h-full w-full'>
      <section className='h-screen bg-aqua-100 w-[50vw] hidden md:flex center'>
        <ShowLottie path="/lotties/login.json" className="h-max w-max" />
      </section>
      <section className='w-screen center flex-col h-screen md:w-[50vw]'>
     <div className=' border rounded-xl p-9 md:w-[25rem] flex flex-col gap-9'>
        <Heading size='h2' className='text-center'>Login to your account</Heading>
        <div className='flex flex-col gap-6 w-full'>
          <div className='flex flex-col gap-2'>
            <Label>
              Email
            </Label>
            <Input />

          </div>
          <div className='flex flex-col gap-2'>
            <Label>
              Password
            </Label>
            <Input />

          </div>
          <div>
            <Button className=''>
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