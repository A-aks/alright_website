'use client'
import React, { useState } from 'react'
import servicesData from '../data/services.json'
import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient';
import Image from 'next/image';
interface servicesItem {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  des: string;
}
const FeturedServices = () => {
  const [servicesList, setServicesList] = useState<servicesItem[]>(servicesData.services)

  return (
    <div className='py-12 bg-gray-900'>
      <div>
        <div className="text-center">
          <h2 className='text-3xl text-teal-600 font-semibold tracking-wide uppercase'>Why Choose us</h2>
          <p className='text-2xl font-serif text-lime-500'>Alright Solution's </p>
        </div>
      </div>
      <div className='mt-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
          {
            servicesList.map((items, index) => (<div className='flex justify-center' key={items.id}>
              <BackgroundGradient className='flex flex-col text-center rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden items-center h-full max-w-sm p-2'>
                <p className='text-center text-teal-600 font-serif font-semibold text-2xl m-2'>{items.title}</p>
                <p className='text-1xl text-white font-serif'>{items.des}</p>
                <div className=' mt-3 text-center'>
                  <Link href={"#"} className=' mt-4 px-4 py-2 bg-white rounded border border-neutral-600 text-neutral-900 hover:bg-gray-300 transition duration-200'>More</Link>
                </div>
              </BackgroundGradient>
            </div>))
          }
        </div>
      </div>
      <div className='mt-20 text-center'>
        <Link href={"#"} className='px-4 py-2 bg-white rounded border border-neutral-600 text-neutral-900 hover:bg-gray-300 transition duration-200'>
          View all services
        </Link>
      </div>
    </div>
  )
}

export default FeturedServices
