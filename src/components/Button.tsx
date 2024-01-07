import React, { FC, MouseEvent, ReactNode } from 'react'
import PulseLoader from 'react-spinners/PulseLoader'

type ButtonColor = 'primary' | 'secondary' | 'tertiary' | 'danger' | 'black'
type ButtonSize = 'sm' | 'md' | 'lg'
interface ButtonProps {
    type?: 'button' | 'submit'
    children: ReactNode
    color?: ButtonColor
    className?: string
    loading?: boolean
    loadingText?: string
    loadingIcon?: ReactNode
    title?: string
    size?: ButtonSize
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void
    disabled?: boolean
}

const Button: FC<ButtonProps> = ({
    children,
    className,
    type = 'button',
    color = 'primary',
    size = 'md',
    onClick,
    disabled = false,
    loading = false,
    title = '',
    loadingText = '',
    loadingIcon = null,
}) => {
    // Define the color classes
    let colorClasses = ''
    switch (color) {
        case 'primary':
            colorClasses = 'bg-primary-500  border hover:bg-primary-600 border-primary-500 text-white '
            break
        case 'secondary':
            colorClasses = 'bg-white border border-primary-500 hover:bg-primary-50 text-primary-500'
            break
        case 'tertiary':
            colorClasses = 'text-primary-500 bg-white hover:bg-primary-100'
            break
        case 'black':
            colorClasses = 'bg-neutralgray-10 hover:bg-neutralgray-12 text-white'
            break
        case 'danger':
            colorClasses = '!border-red-500 border !text-red-500 hover:bg-error-50'
            break

        default:
            colorClasses = 'bg-blue-500 hover:bg-blue-600 text-white'
    }

    // Define the size classes
    let sizeClasses = ''
    switch (size) {
        case 'sm':
            sizeClasses = 'h-[1.875rem] text-[0.6875rem] px-2 '
            break
        case 'md':
            sizeClasses = 'h-[2.25rem] text-xs px-3'
            break
        case 'lg':
            sizeClasses = 'h-[2.75rem] px-3  text-sm'
            break
        default:
            sizeClasses = 'py-2 px-4 text-base'
    }

    return (
        <button
            type={type}
            autoFocus={false}
            title={title || ''}
            className={`${className} ${disabled ? `${!loading ? 'hover:!text-neutralgray-5 hover:!bg-neutralgray-3 !border-neutralgray-3  !bg-neutralgray-3  !text-neutralgray-5' : ''} ` : ''
                } ease center  rounded-md w-max font-medium transition-all duration-300 ${colorClasses} ${sizeClasses} `}
            onClick={onClick}
            disabled={disabled}>
            {loading && <span className="mr-2">{loadingIcon ? loadingIcon : <PulseLoader color="#ffffff" loading size={5} />}</span>}

            {loading && loadingText ? loadingText : children}
        </button>
    )
}

export default Button