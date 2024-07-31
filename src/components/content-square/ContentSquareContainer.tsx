import React, { useEffect} from 'react'

interface ContainerProps {
    children: React.ReactNode
}

export const ContentSquareContainer = (props: ContainerProps) => {
    return (
        <React.Fragment>
            <div className="grid lg:grid-cols-custom items-baseline gap-5">
                {props.children}
            </div>
        </React.Fragment>
    )
}