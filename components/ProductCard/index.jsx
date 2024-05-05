import Image from "next/image"
import Favourite from '@/assets/favourite.svg'

export const ProductCard = ({ product }) => {
    return (
        <div className="product-item">
            <Image src={product?.image} width={300} height={399} alt={product?.name} className="product-image" />
            <div className="product-data">
                <div className="flex-col">
                    <p> {product?.name}</p>
                    <p>Rs.{product?.price}</p>
                </div>
                <Image src={Favourite} width={24} height={24} alt="Favourite" />
            </div>
        </div>
    )
}