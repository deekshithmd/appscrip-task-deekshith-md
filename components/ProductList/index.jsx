import Image from "next/image"
import clsx from "clsx";
export const ProductList = ({ products, isFilterShown }) => {
    return (
        <div className={clsx(isFilterShown ? 'grid-cols-3' : 'grid-cols-4', "product-list")}>
            {
                products?.map(product => {
                    return (
                        <div key={product?.id} className="product-item">
                            <Image src={product?.image} width={300} height={399} alt={product?.name} className="product-image" />
                            <p> {product?.name}</p>
                            <p>Rs.{product?.price}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}