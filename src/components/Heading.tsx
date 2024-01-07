import React, { ReactNode } from 'react'
type HeadingSize = 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type Props = {
    children: ReactNode
    size?: HeadingSize
    className?: string
}

function Heading({ children, size, className }: Props) {
    let sizeClass = ''
    switch (size) {
        case 'h2':
            sizeClass = 'font-bold text-[1.625rem]'
            break
        case 'h3':
            sizeClass = 'font-semibold text-[1.325rem]'
            break
        case 'h4':
            sizeClass = 'text-[1.125rem] font-semibold '
            break
        case 'h5':
            sizeClass = 'font-semibold text-base'
            break
        case 'h6':
            sizeClass = 'font-semibold text-sm'
            break

        default:
            sizeClass = 'text-base font-bold'
    }
    return <div className={`${className} font-montserrat  text-neutralgray-10 ${sizeClass}`}>{children}</div>
}

export default Heading