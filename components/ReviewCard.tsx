import React from 'react'

interface ReviewCardProps {
	imgURL: string
	customerName: string
	rating: number
	feedback: string
}

const ReviewCard: React.FC<ReviewCardProps> = ({
	imgURL,
	customerName,
	rating,
	feedback,
}) => {
	return (
		<div className='flex justify-center items-center flex-col'>
			<img
				src={imgURL}
				alt='customer'
				className='rounded-full object-cover w-[120px] h-[120px]'
			/>
			<p className='mt-6 max-w-sm text-center info-text'>{feedback}</p>
			<div className='mt-3 flex justify-center items-center gap-2.5'>
				<svg
					className='w-6 h-6 fill-text-primary'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M10.075 1.242c.34-.825 1.51-.825 1.85 0L13.969 6.2a2 2 0 0 0 1.65 1.228l5.177.518c.857.086 1.212 1.142.58 1.728l-4.001 3.716a2 2 0 0 0-.596 1.88l1.152 5.437c.182.862-.758 1.521-1.506 1.057l-4.37-2.713a2 2 0 0 0-2.11 0l-4.37 2.713c-.748.464-1.688-.195-1.506-1.057l1.152-5.437a2 2 0 0 0-.596-1.88L.623 9.674c-.63-.586-.276-1.642.581-1.728l5.177-.518A2 2 0 0 0 8.031 6.2l2.044-4.958Z'
						// fill='primary'
					/>
				</svg>
				<p className='text-xl font-montserrat text-slate-gray'>({rating})</p>
			</div>
			<h3 className='mt-1 font-palanquin text-3xl text-center font-bold'>
				{customerName}
			</h3>
		</div>
	)
}

export default ReviewCard
