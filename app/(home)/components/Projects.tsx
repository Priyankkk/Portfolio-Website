import React from 'react'
import { SiAzurefunctions, SiAzurepipelines, SiCsharp, SiCss3, SiDjango, SiExpo, SiFigma, SiFlask, SiHtml5, SiJavascript, SiJson, SiMicrosoftazure, SiMongodb, SiNextdotjs, SiNodedotjs, SiOpenai, SiPython, SiReact, SiSass, SiSocketdotio, SiSqlalchemy, SiSqlite, SiTailwindcss, SiTypescript } from 'react-icons/si'
import Title from './Title'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'

export default function Projects() {
    const projects = [
        {
            title: "CryptoSense",
            tech: [SiReact, SiJavascript, SiHtml5, SiCss3],
            link: "",
            cover: "/cryptosense.png",
            background: "bg-indigo-500",
            githubLink: "https://github.com/Priyankkk/CryptoSense",
            demo: false,
            github: true
        },
        {
            title: "ClimeCast",
            tech: [SiDjango, SiPython, SiSqlite],
            link: "",
            cover: "/climecast.png",
            background: "bg-indigo-500",
            githubLink: "https://github.com/Priyankkk/Climecast",
            demo: false,
            github: true
        },

        {
            title: "Simple Portfolio",
            tech: [SiHtml5, SiCss3, SiJavascript],
            link: "",
            cover: "/portfoliopage.png",
            background: "bg-indigo-500",
            githubLink: "https://github.com/Priyankkk/Simple-Portfolio",
            demo: false,
            github: true
        },
        {
            title: "UI/UX Design Project",
            tech: [SiFigma],
            link: "",
            cover: "/Audiolux.png",  
            background: "bg-indigo-500",
            figmaFile: "UI_UX Project.fig",  
            figmaPDF: "UI_UX Project.pdf",  
            demo: false,
            figma: true
        },
        {
            title: "Taskyminder",
            tech: [SiJavascript, SiJson, SiExpo, SiSqlite],
            link: "",
            cover: "/Taskyminder.png",
            background: "bg-indigo-500",
            githubLink: "https://github.com/Priyankkk/Taskyminder",
            demo: false,
            github: true
        },
        {
            title: "Portfolio Website",
            tech: [SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiHtml5],
            link: "",
            cover: "/portfoliowebsite.png",
            background: "bg-indigo-500",
            githubLink: "https://github.com/Priyankkk/Portfolio-Website",
            demo: true,
            github: true
        },
    ]
    return (
        <div className='py-10 p-5 sm:p-0'>
            <Title text='Projects 📂' className='flex flex-col items-center justify-center' />
            <div className='grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5'>
                {projects.map((project, index) => {
                    return (
                        <div key={index}>
                            <div className={cn("p-3 pt-2 rounded-md flex flex-col sm:p-5", project.background)}>
                                <h1 className='block sm:hidden text-2xl font-bold text-center'>{project.title}</h1>
                                <DirectionAwareHover imageUrl={project.cover} className='w-full h-64 space-y-5 overflow-hidden'>
                                    <div className='space-y-5'>
                                        {/* <h1 className='hidden text-2xl font-bold text-left sm:block'>{project.title}</h1> */}
                                        <h1 className='hidden md:block lg:block text-2xl font-bold text-left'>{project.title}</h1>
                                        <div className='hidden lg:flex md:flex items-center gap-5'>
                                            {project.tech.map((Icon, index) => {
                                                return <Icon className='w-8 h-8' key={index} />
                                            })}
                                        </div>
                                    </div>
                                </DirectionAwareHover>
                                <div className='sm:hidden flex justify-center gap-5 mt-3'>
                                    {project.tech.map((Icon, index) => {
                                        return <Icon className='w-8 h-8' key={index} />
                                    })}
                                </div>
                            </div>
                            <div className="flex justify-between m-2">
                                {
                                    project.github && (
                                        <div>
                                            <a href={project.githubLink} className="rounded decoration-indigo-500 hover:text-indigo-300">
                                                GitHub
                                            </a>
                                        </div>
                                    )
                                }
                                
                                {project.demo && (
                                    <div className="ml-auto">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="rounded decoration-green-500 hover:text-green-300">
                                            View live demo
                                        </a>
                                    </div>
                                )}
                                {project.figmaFile && (
                                <a href={project.figmaFile} download className="rounded decoration-pink-500 hover:text-pink-300">
                                    Figma File
                                </a>
                            )}
                            {project.figmaPDF && (
                                <a href={project.figmaPDF} target="_blank" rel="noopener noreferrer" className="rounded decoration-red-500 hover:text-red-300">
                                    Figma PDF
                                </a>
                            )}
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="flex justify-center mt-5">
                <div className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-green-600 max-w-max">
                    <a href="https://github.com/Priyankkk?tab=repositories">
                        See more projects
                    </a>
                </div>
            </div>

        </div>
    )
}
