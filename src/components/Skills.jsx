import React, { useState, useEffect } from 'react'

export const Skills = () => {
    const [count, setCount] = useState(0)

    const skills = [
        "React",
        "NextJS",
        "Astro",
        "Java",
        "Python",
        "Kubernetes",
        "Docker",
        "GitHub CI/CD",
        "GraphQL",
        "REST API",
        "Sass",
        "SQL",
        "Jira/Agile",
        "HTML/CSS",
        "TypeScript"
    ]

    useEffect(() => {
        const interval = setInterval(() => {
          setCount(prevCount => prevCount == skills.length - 1 ? 0 : prevCount + 1)
        }, 2000)
    
        return () => clearInterval(interval)
    }, [])

    

    return (
        <React.Fragment>
            <h1 className="font-normal m-0 xl:text-6xl">I have experience in <span className="font-bold bg-gradient-to-r from-[#FBDA61] to-[#FF5ACD] text-transparent bg-clip-text"><strong>{skills[count]}</strong></span>!</h1>
        </React.Fragment>
    )
}