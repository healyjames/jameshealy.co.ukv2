import React from 'react'

interface ItemProps {
    title: string
    content: string
    icon: React.ElementType
    extended?: {
        vertical?: boolean
        horizontal?: boolean
    }
    className?: string
}

export const ContentSquareItem = (props: ItemProps) => {
    const Icon = props.icon

    return (
        <React.Fragment>
            <div className={`rounded-2xl p-5 hover:drop-shadow-2xl cursor-pointer ${props.className && props.className}`}>
                <div>
                    <div className="flex flex-row flex-nowrap items-center mb-4">
                        <div className="rounded-full border-2 border-current w-8 h-8 mr-2 flex justify-center items-center">
                            <Icon className="w-5" />
                        </div>
                        <h3 className="text-inherit m-0">{props.title}</h3>
                    </div>
                    
                    <p className="m-0" dangerouslySetInnerHTML={{ __html: props.content}} />
                </div>
            </div>
        </React.Fragment>
    )
}