'use client'
import { TfiAngleRight } from "react-icons/tfi";
import { TfiAngleLeft } from "react-icons/tfi";
import { FILTERS } from "@/utils/constants";
import './products.css'
import { useState } from "react";
import { PRODUCTS } from "@/lib/data";
import Product from "@/assets/product-1.svg"
import Image from "next/image";
import clsx from "clsx";

export const ProductData = () => {
    const [selectedFilter, setSelectedFilter] = useState('');
    const [showFilters, setShowFilters] = useState(false)
    return (
        <div>
            <hr />
            <div className="flex-row">
                123 ITEMS
                <p onClick={() => setShowFilters(!showFilters)} className="flex-row">
                    {
                        showFilters ?
                            <>
                                <TfiAngleLeft size={12} />
                                HIDE FILTERS
                            </>
                            :
                            <>
                                <TfiAngleRight size={12} />
                                SHOW FILTERS
                            </>
                    }
                </p>
                <select>
                    <option value="" disabled selected hidden>Select filter</option>
                    {
                        FILTERS?.map(filter => {
                            return (
                                <option key={filter?.value} onClick={() => setSelectedFilter(filter)}>{filter?.label}</option>
                            )
                        })
                    }
                </select>
            </div>
            <hr />
            <div className="product-container">
                {
                    showFilters && <aside>
                        <p className="font-semibold text-md"><input type="checkbox" />CUSTOMIZABLE</p>
                        <div className="flex-col row-gap-24">
                            <h3 className="font-semibold text-md">IDEAL FOR</h3>
                            <p>All</p>
                            <p>unselect all</p>
                            <label htmlFor="">
                                <input type="checkbox" name="" id="" />Men
                            </label>
                            <label htmlFor="">
                                <input type="checkbox" name="" id="" />Women
                            </label>
                            <label htmlFor="">
                                <input type="checkbox" name="" id="" />Baby & Kids
                            </label>
                        </div>
                        <div className="flex-col row-gap-24">
                            <h3 className="font-semibold text-md">OCCASION</h3>
                            <p>All</p>
                            <p>unselect all</p>
                            <label htmlFor="">
                                <input type="checkbox" name="" id="" />Marriage
                            </label>
                            <label htmlFor="">
                                <input type="checkbox" name="" id="" />Party
                            </label>
                        </div>
                        <div className="flex-col row-gap-24">
                            <h3 className="font-semibold text-md">WORK</h3>
                            <p>All</p>
                            <p>unselect all</p>
                            <input type="checkbox" name="" id="" />Office
                            <input type="checkbox" name="" id="" />Carpenter
                            <input type="checkbox" name="" id="" />Painter
                        </div>
                        <div className="flex-col row-gap-24">
                            <h3 className="font-semibold text-md">FABRIC</h3>
                            <p>All</p>
                            <p>unselect all</p>
                            <input type="checkbox" name="" id="" />Cotton
                            <input type="checkbox" name="" id="" />Polyster
                            <input type="checkbox" name="" id="" />Silk
                        </div>
                        <div className="flex-col row-gap-24">
                            <h3 className="font-semibold text-md">SEGMENT</h3>
                            <p>All</p>
                            <p>unselect all</p>
                            <input type="checkbox" name="" id="" />Men
                            <input type="checkbox" name="" id="" />Women
                            <input type="checkbox" name="" id="" />Baby & Kids
                        </div>
                        <div className="flex-col row-gap-24">
                            <h3 className="font-semibold text-md">SUITABLE FOR</h3>
                            <p>All</p>
                            <p>unselect all</p>
                            <input type="checkbox" name="" id="" />Boys
                            <input type="checkbox" name="" id="" />Girls
                        </div>
                        <div className="flex-col row-gap-24">
                            <h3 className="font-semibold text-md">RAW MATERIALS</h3>
                            <p>All</p>
                            <p>unselect all</p>
                            <input type="checkbox" name="" id="" />Cotton
                            <input type="checkbox" name="" id="" />Silk
                            <input type="checkbox" name="" id="" />Polyster
                        </div>
                        <div className="flex-col row-gap-24">
                            <h3 className="font-semibold text-md">PATTERN</h3>
                            <p>All</p>
                            <p>unselect all</p>
                            <input type="checkbox" name="" id="" />Checked
                            <input type="checkbox" name="" id="" />Plain
                            <input type="checkbox" name="" id="" />Color
                        </div>
                    </aside>
                }
                <div className={clsx(showFilters ? 'grid-cols-3' : 'grid-cols-4', "product-list")}>
                    {
                        PRODUCTS?.map(product => {
                            return (
                                <div key={product?.id}>
                                    <Image src={Product} alt={product?.name} />
                                    <p> {product?.name}</p>
                                    <p>{product?.price}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}