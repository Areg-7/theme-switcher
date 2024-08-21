import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { CustomerReviews } from '@/components/ui/CustomerReviews'
import { Footer } from '@/components/ui/Footer'
import { PopularProducts } from '@/components/ui/PopularProducts'
import { Services } from '@/components/ui/Services'
import { SpecialOffer } from '@/components/ui/SpecialOffer'
import { Subscribe } from '@/components/ui/Subscribe'
import { SuperQuality } from '@/components/ui/SuperQuality'

export default function Home() {
	return (
			<main className='relative'>
				<ThemeSwitcher />
				{/* <Hero />
				<PopularProducts />
				<SuperQuality />
				<Services />*/}
				<SpecialOffer />
				<CustomerReviews />	
				<Subscribe />
				<Footer /> 
			</main>
	)
}
