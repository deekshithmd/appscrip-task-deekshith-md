import clsx from "clsx";
import { ProductCard } from "../ProductCard";

export const ProductList = ({ products, isFilterShown }) => {
    return (
        <div className={clsx(isFilterShown ? 'grid-cols-3' : 'grid-cols-4', "product-list")}>
            {
                products?.map(product => <ProductCard product={product} key={product?.id} />)
            }
        </div>
    )
}