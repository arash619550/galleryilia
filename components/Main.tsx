import { smartWatch, powerbank, headphone, speaker } from '@/data/products'
import Product from './Product'
import CarouselTemplate from './CarouselTemplate'
import ProductSection from './ProductSection'
export default function Main() {
    return (
        <div className="bg-fuchsia-100">
            <Product />
            <ProductSection text={{ h2: "ساعت هوشمند", link: "smartwatch", textLink: "مشاهده همه" }} />
            <CarouselTemplate product={smartWatch} banner="/images/products/product1/smart-watch/pic-smartwatch.webp" />
            <ProductSection text={{ h2: "پاور بانک", link: "powerbank", textLink: "مشاهده همه" }} />
            <CarouselTemplate product={powerbank} banner="/images/products/product1/powerbank/30000-power-bank.webp" />
            <ProductSection text={{ h2: "هدفون", link: "headphone", textLink: "مشاهده همه" }} />
            <CarouselTemplate product={headphone} banner="/images/products/product1/headphone/bannerheadphone.jpg" />
            <ProductSection text={{ h2: "اسپیکر", link: "speaker", textLink: "مشاهده همه" }} />
            <CarouselTemplate product={speaker} banner="/images/products/product1/speaker/speaker-banner.jpg" />
        </div>
    )
}
