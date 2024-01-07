
const Label = ({ className = '', children, required = false, ...props }) => {
    const requiredClasses = `after:content-['*'] after:ml-0.5 after:text-red-500 after:text-base`

    return (
        <label className={`${className} block !text-sm  font-medium  ${required && requiredClasses}`} {...props}>
            {children}
        </label>
    )
}

export default Label
