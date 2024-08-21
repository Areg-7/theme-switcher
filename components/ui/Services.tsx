import ServiceCard from '@/components/ServiceCard'
import { services } from '@/data'

export const Services = () => {
	return (
		<section className='max-container flex justify-center flex-wrap gap-9 padding-x py-10'>
			{services.map(service => (
				<ServiceCard key={service.label} {...service} />
			))}
		</section>
	)
}