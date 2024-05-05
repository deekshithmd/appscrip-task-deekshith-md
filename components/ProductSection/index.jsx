'use client'
import { TfiAngleRight } from "react-icons/tfi";
import { TfiAngleLeft } from "react-icons/tfi";
import { FILTERS } from "@/utils/constants";
import { useEffect, useState } from "react";
import { useData } from "@/contexts/DataContext";
import { Filters } from "../Filters";
import { ProductList } from "../ProductList";
import './products.css'

export const ProductSection = () => {
    const [selectedFilter, setSelectedFilter] = useState('');
    const [showFilters, setShowFilters] = useState(false);
    const { products, filteredProducts, dispatch, productList, setProductList } = useData();

    useEffect(() => {
        setProductList(products)
    }, [])

    useEffect(() => {
        dispatch({ type: selectedFilter, payload: productList })
    }, [selectedFilter])

    return (
        <div className="product-section">
            <hr />
            <div className="flex-row justify-between">
                <div className="flex-row col-gap-12">
                    <span className="hidden">{filteredProducts?.length} ITEMS</span>
                    <div onClick={() => setShowFilters(!showFilters)} className="flex-row cursor-pointer hidden">
                        {
                            showFilters ?
                                <p className="flex-row row-gap-16">
                                    <TfiAngleLeft size={12} />
                                    HIDE FILTERS
                                </p>
                                :
                                <p className="flex-row row-gap-16">
                                    <TfiAngleRight size={12} />
                                    SHOW FILTERS
                                </p>
                        }
                    </div>
                </div>
                <p className="mobile-filter" onClick={() => setShowFilters(!showFilters)}>FILTER <span>|</span></p>
                <select onChange={(e) => setSelectedFilter(e.target.value)}>
                    <option value="" disabled selected hidden>Select filter</option>
                    {
                        FILTERS?.map(filter => {
                            return (
                                <option key={filter?.value} value={filter?.value}>{filter?.label}</option>
                            )
                        })
                    }
                </select>
            </div>
            <hr />
            <div className="product-container">
                {
                    showFilters && <Filters />
                }
                <ProductList products={productList} isFilterShown={showFilters} />
            </div>
        </div>
    )
}