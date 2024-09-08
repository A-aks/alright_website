import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { Button } from "./ui/moving-border";

const Herosection = () => {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className='p-4 relative z-10 w-full text-center'>
      
        <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>Leading B2C Company</h1>
        <p className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'>We offer a diverse selection of education, insurance, and financial products across India, tailored to meet the unique needs of individuals and businesses. Whether you're seeking educational programs, comprehensive insurance plans, or financial solutions, our services are designed to empower and secure your future.</p>
        <div className="mt-4">
            <Link href={"/Our Services"} >
            <Button borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
       >
            Explore our services
            </Button>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Herosection
