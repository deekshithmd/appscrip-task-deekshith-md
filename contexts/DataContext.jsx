'use client'
import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { PRODUCTS } from "@/lib/data";
import { reducer } from "@/utils/helpers";

const DataContext = createContext({});

const DataProvider = ({ children }) => {
    const [filteredProducts, dispatch] = useReducer(reducer, []);
    const [products, setProducts] = useState(PRODUCTS);
    const [productList, setProductList] = useState([]);
    const [filterList, setFilterList] = useState([])

    useEffect(() => {
        if (filterList?.length > 0) {
            const idealFiltered = products?.filter(product => filterList?.includes(product?.idealFor));
            const occasionFiltered = products?.filter(product => filterList?.includes(product?.occasion));
            const rawMaterialFiltered = products?.filter(product => filterList?.includes(product?.raw_materials));
            const fabricFiltered = products?.filter(product => filterList?.includes(product?.fabric));
            const segmentFiltered = products?.filter(product => filterList?.includes(product?.segment));
            const workFiltered = products?.filter(product => filterList?.includes(product?.work));
            const patternFiltered = products?.filter(product => filterList?.includes(product?.pattern));
            const suitableForFiltered = products?.filter(product => {
                for (let item of product?.suitableFor) {
                    if (filterList?.includes(item)) {
                        return item
                    }
                }
            })
            const final = [...idealFiltered, ...occasionFiltered, ...rawMaterialFiltered, ...fabricFiltered, ...segmentFiltered, ...workFiltered, ...patternFiltered, ...suitableForFiltered];
            const newData = [...new Map(final.map(item => [item['id'], item])).values()]
            setProductList(newData)
        }
        else {
            setProductList(products)
        }
    }, [filterList])

    return (
        <DataContext.Provider value={{ products, filteredProducts, dispatch, filterList, setFilterList, productList, setProductList }}>
            {children}
        </DataContext.Provider>
    )
}

const useData = () => useContext(DataContext)

export { useData, DataProvider }