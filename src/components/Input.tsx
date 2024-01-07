import React from "react"
import { WarningCircle } from "phosphor-react"
const Input = ({
    disabled = false,
    error = false,
    left = null,
    right = null,
    className = '',
    ...props
  }
) => {

    const defaultClasses =
        'block w-full focus:outline-none rounded-md shadow-sm focus:ring-opacity-50 placeholder:text-sm  placeholder:text-[#9498A2] text-sm border p-2 w-full rounded-[0.625rem] border  px-4 !text-sm  shadow-xs'
    const errorClasses = 'pr-10 border-red-300 text-red-900 placeholder-red-300  focus:ring-red-500 focus:border-red-500'

    const themeClass = 'focus:border-indigo-300 focus:ring-indigo-200'

    return (
        <div className={`${(left || right) && 'flex'} relative w-full  ${props.blur ? 'blur-sm' : 'blur-none'}`}>
            {left}
            <input disabled={disabled} className={`${props.value ? '!bg-neutralgray-2' : 'bg-white'} ${className} ${error && errorClasses} ${themeClass} ${defaultClasses}`} {...props}  />
            {right}
            {error && (
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <WarningCircle className="h-5 w-5 text-red-500" weight="fill" />
                </div>
            )}
        </div>
    )
}

export default Input

 