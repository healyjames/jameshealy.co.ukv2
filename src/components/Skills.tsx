import React, { useState, useEffect, useRef } from 'react'
import { InformationCircleIcon } from '@heroicons/react/24/outline'

export const Skills = () => {
    const [count, setCount] = useState(0)
    const dialogRef = useRef<HTMLDialogElement>(null)

    const skills = [
        "React",
        "NextJS",
        "Astro",
        "Java",
        "Python",
        "Kubernetes",
        "Docker",
        "Node",
        "Git",
        "GitHub CI/CD",
        "GraphQL",
        "REST API",
        "Sass",
        "Tailwind",
        "SQL",
        "Jira/Agile",
        "HTML/CSS",
        "TypeScript",
        "Photoshop",
        "Illustrator"
    ]

    const skillsListClasses = "btn btn-outline font-normal m-0.5"

    const openModal = () => {
        dialogRef.current?.showModal()
    }
    
    const closeModal = () => {
        dialogRef.current?.close()

    }

    useEffect(() => {
        const interval = setInterval(() => {
          setCount(prevCount => prevCount == skills.length - 1 ? 0 : prevCount + 1)
        }, 2000)
    
        return () => clearInterval(interval)
    }, [])

    

    return (
        <React.Fragment>
            <div className="lg:flex lg:flex-row lg:flex-nowrap lg:justify-between lg:items-center">
                <h1 className="font-normal m-0 xl:text-6xl">I have experience in <span className="font-bold bg-gradient-to-r from-[#FBDA61] to-[#FF5ACD] text-transparent bg-clip-text"><strong>{skills[count]}</strong></span>!</h1>

                <div className="flex lg:justify-center items-center mt-5">
                    <button className="btn lg:btn-circle btn-outline" onClick={openModal}>
                        <InformationCircleIcon className="w-6" />
                        <p className="m-0 lg:hidden">Full list</p>
                    </button>
                </div>
            </div>

            <dialog ref={dialogRef} onClick={closeModal} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box z-[1000]">
                <h3 className="font-bold text-lg">Full list of skills:</h3>
                <ul className="list-none flex flex-wrap gap-2">
                    {
                        skills.map((skill, index) => {
                            return (<li key={index} className={skillsListClasses}>{skill}</li>)
                        })
                    }
                </ul>
                <div className="modal-action">
                    <form method="dialog">
                    <button className="btn" onClick={closeModal}>Close</button>
                    </form>
                </div>
                </div>
            </dialog>
        </React.Fragment>
    )
}