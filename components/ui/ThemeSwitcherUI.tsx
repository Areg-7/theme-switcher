'use client'
import { motion } from 'framer-motion'
// import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react';

const transition = {
	type: 'spring',
	mass: 0.5,
	damping: 11.5,
	stiffness: 100,
	restDelta: 0.001,
	restSpeed: 0.001,
}

export const MenuItem = ({
	setActive,
	active,
	item,
	children,
}: {
	setActive: (item: string) => void
	active: string | null
	item: string
	children?: React.ReactNode
}) => {
	return (
		<div
			onMouseEnter={() => setActive(item)}
			className='relative text-lg text-slate-gray font-medium font-montserrat'
		>
			<motion.p
				transition={{ duration: 0.3 }}
				className=' text-slate-400 hover:text-text-hover hover:opacity-[0.9] mx-7'
			>
				{item}
			</motion.p>
			{active !== null && (
				<motion.div
					initial={{ opacity: 0, scale: 0.85, y: 10 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					transition={transition}
				>
					{active === item && (
						<div className='absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4'>
							<motion.div
								transition={transition}
								layoutId='active' // layoutId ensures smooth animation
								className='bg-white backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] shadow-xl'
							>
								<motion.div
									layout // layout ensures smooth animation
									className='w-max h-full p-4'
								>
									{children}
								</motion.div>
							</motion.div>
						</div>
					)}
				</motion.div>
			)}
		</div>
	)
}

export const Menu = ({
	setActive,
	children,
}: {
	setActive: (item: string | null) => void
	children: React.ReactNode
}) => {
	return (
		<nav
			onMouseLeave={() => setActive(null)} // resets the state
			className='relative rounded-full border bg-slate border-slate-gray shadow-input flex justify-center space-x-4 px-8 py-6 '
		>
			{children}
		</nav>
	)
}

export const ChangeTheme =  ({ title, number }: any) => {

	const [currentClass, setCurrentClass] = useState<string | null>(null);

	useEffect(() => {
	  if (currentClass) {
		 document.body.className = '';
		 document.body.classList.add(currentClass);
	  }
	}, [currentClass]);
 
	const handleClick = (className: string) => {
	  setCurrentClass(className);
	};
	
	return (
		<>
			<div>
				<h4 className='text-xl font-bold mb-1 text-black '>{title}</h4>
				<div className='flex'>
					<button  onClick={() => handleClick(number)} className='bg-primary hover:bg-btn-hover text-white font-bold py-2 px-4 rounded-full'>theme</button>
				</div>
			</div>
		</>
	)
}

export const HoveredLink = ({ children, ...rest }: any) => {
	return (
		<Link {...rest} className='text-neutral-700  hover:text-black '>
			{children}
		</Link>
	)
}
