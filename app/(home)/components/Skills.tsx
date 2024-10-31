"use client";

import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { SiC, SiCsharp, SiDjango, SiExpo, SiFlask, SiGit, SiGithub, SiJavascript, SiMicrosoftazure, SiMongodb, SiMysql, SiNextdotjs, SiNodedotjs, SiPostman, SiPython, SiReact, SiSpringboot, SiSqlite, SiTailwindcss, SiTypescript } from 'react-icons/si'

export default function Skills() {
  const skills = [
    {
        text: "React",
        Icon: SiReact
    },
    {
        text: "Javascript",
        Icon: SiJavascript
    },
    {
        text: "Python",
        Icon: SiPython
    },
    {
        text: "Django",
        Icon: SiDjango
    },
    {
        text: "NextJs",
        Icon: SiNextdotjs
    },
    {
        text: "MySQL",
        Icon: SiMysql
    },
    {
        text: "MongoDB",
        Icon: SiMongodb
    },
    {
        text: "Sqlite",
        Icon: SiSqlite
    },
    {
        text: "NodeJs",
        Icon: SiNodedotjs
    },
    {
        text: "Expo",
        Icon: SiExpo
    },
    {
        text: "C#",
        Icon: SiCsharp
    },
    {
        text: "Git",
        Icon: SiGit
    },
    {
        text: "TypeScript",
        Icon: SiTypescript
    },
    {
        text: "TailWind",
        Icon: SiTailwindcss
    },
    {
        text: "Postman",
        Icon: SiPostman
    }
  ]

  return (
    <div className='max-w-5xl mx-auto px-8 pt-20'>
        <Title text='Skills 🛠️' className='flex flex-col items-center justify-center'/>
        <HoverEffect items={skills}/>
    </div>
  )
}
