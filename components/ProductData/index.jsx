'use client'
import { TfiAngleRight } from "react-icons/tfi";
import { TfiAngleLeft } from "react-icons/tfi";
import { FILTERS } from "@/utils/constants";
import { useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { useData } from "@/contexts/DataContext";
import { filterProducts } from "@/utils/helpers";
import { Filters } from "../Filters";
import './products.css'

export const ProductData = () => {
    const [selectedFilter, setSelectedFilter] = useState('');
    const [showFilters, setShowFilters] = useState(false);
    const { products, filteredProducts, dispatch } = useData();

    useEffect(() => {
        dispatch({ type: selectedFilter, payload: products })
    }, [selectedFilter])

    console.log('filtered', filteredProducts)

    return (
        <div>
            <hr />
            <div className="flex-row justify-between">
                <div className="flex-row col-gap-12">
                    <span>123 ITEMS</span>
                    <div onClick={() => setShowFilters(!showFilters)} className="flex-row cursor-pointer">
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
                <div className={clsx(showFilters ? 'grid-cols-3' : 'grid-cols-4', "product-list")}>
                    {
                        filteredProducts?.map(product => {
                            return (
                                <div key={product?.id}>
                                    <Image src={product?.image} alt={product?.name} width={300} height={399} />
                                    <p> {product?.name}</p>
                                    <p>Rs.{product?.price}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}