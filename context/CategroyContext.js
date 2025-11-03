import React, { Children, createContext, useEffect, useState } from "react";
import { catsData } from "../data";

export const CategoryContext = createContext();

export const CatProvider = ({ children }) => {
    const [data, setData] = useState([])
    const [filteredData, setFilteredData] = useState('')
    const [filteredCat, setFilteredCat] = useState('')
    const [readyData, setReadyData] = useState([])

    useEffect(() => {
        setData(catsData)
    }, [])

    useEffect(() => {
        let filtered = data;
        if (filteredData) {
            filtered = filtered.filter(cat =>
                cat.bashliq.toLowerCase().includes(filteredData.toLowerCase()) ||
                cat.about.toLowerCase().includes(filteredData.toLowerCase())
            );
        }
        if(filteredCat && filteredCat !== "hamısı"){
            filtered = filtered.filter(cat=>cat.category === filteredCat)

        }
        setReadyData(filtered)

    }, [data, filteredData, filteredCat])

    return (
        <CategoryContext.Provider value={{ readyData,setFilteredData, filteredCat,setFilteredCat}}>
            {children}
        </CategoryContext.Provider>
    )
}