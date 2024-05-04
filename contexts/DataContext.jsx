'use client'
import { createContext, useContext, useReducer, useState } from "react";
import { PRODUCTS } from "@/lib/data";
import { reducer } from "@/utils/helpers";

const DataContext = createContext({});

const DataProvider = ({ children }) => {
    const [filteredProducts, dispatch] = useReducer(reducer, []);
    const [products, setProducts] = useState(PRODUCTS);

    return (
        <DataContext.Provider value={{ products, filteredProducts, dispatch }}>
            {children}
        </DataContext.Provider>
    )
}

const useData = () => useContext(DataContext)

export { useData, DataProvider }