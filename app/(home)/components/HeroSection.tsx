import Link from 'next/link'
import React from 'react'
import Title from './Title'
import ResumeButton from './ResumeButton'

export default function HeroSection() {
  return (
    <div className='min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between animate-move-up'>
        <div className='space-y-10 text-center lg:text-left'>
            <h1 className='text-4xl lg:text-7xl font-bold'>
                Nice to meet you! 
                <br /> <span className='underline underline-offset-8 decoration-green-500'>{"I am Priyank."}</span>
            </h1>
            <p className='md:w-96 text-lg text-gray-300'>
                {"Currently, I’m a post-grad student at Fanshawe College, driven by a passion for crafting innovative projects. Seeking a co-op role in IT, where I can blend creativity with technical skills to make an impact!"}
            </p>
            <Link href={"mailto:vorapriyank999@gmail.com"} className='inline-block group'>
                <Title text='Contact Me 📬' />
            </Link>
            <ResumeButton />
        </div>
        <div>
            <div className='w-72 h-72 space-y-3 -rotate-[30deg] relative'>
                <div className='flex gap-3 translate-x-8'>
                    <div className='w-32 h-32 rounded-2xl bg-green-500'></div>
                    <div className='w-32 h-32 rounded-full bg-indigo-500'></div>
                </div>
                <div className='flex gap-3 -translate-x-8'>
                    <div className='w-32 h-32 rounded-2xl bg-indigo-500'></div>
                    <div className='w-32 h-32 rounded-full bg-green-500'></div>
                </div>
                <div className='glow absolute top-[40%] right-1/2 -z-10'></div>
            </div>
        </div>
    </div>
  )
}
