import React from 'react'

interface ButtonProps {
	label: string
	backgroundColor?: string
	textColor?: string
	borderColor?: string
	fullWidth?: boolean
}

const Button: React.FC<ButtonProps> = ({
	label,
	backgroundColor,
	textColor,
	borderColor,
	fullWidth,
}) => {
	return (
		<button
			className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
		 ${
				backgroundColor
					? `${backgroundColor} ${textColor} ${borderColor}`
					: 'bg-text-primary text-white border-text-primary'
			} rounded-full ${fullWidth ? 'w-full' : ''}`}
		>
			{label}
		</button>
	)
}

export default Button
