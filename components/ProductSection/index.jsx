'use client'
import { TfiAngleRight } from "react-icons/tfi";
import { TfiAngleLeft } from "react-icons/tfi";
import { FILTERS } from "@/utils/constants";
import { useEffect, useState } from "react";
import { useData } from "@/contexts/DataContext";
import { Filters } from "../Filters";
import './products.css'
import { ProductList } from "../ProductList";

export const ProductSection = () => {
    const [selectedFilter, setSelectedFilter] = useState('');
    const [showFilters, setShowFilters] = useState(false);
    const { products, filteredProducts, dispatch } = useData();

    useEffect(() => {
        dispatch({ type: selectedFilter, payload: products })
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
                <p className="mobile-filter show-mobile" onClick={() => setShowFilters(!showFilters)}>FILTER <span>|</span></p>
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
                <ProductList products={filteredProducts} isFilterShown={showFilters} />
            </div>
        </div>
    )
}