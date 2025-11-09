import React, { Children, createContext, useEffect, useState } from "react";
import { catsData } from "../data";

export const CategoryContext = createContext();

export const CatProvider = ({ children }) => {
    const [data, setData] = useState([])
    const [filteredData, setFilteredData] = useState('')
    const [filteredCat, setFilteredCat] = useState('')
    const [readyData, setReadyData] = useState([])
    const [likeds, setLikeds] = useState([])


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
        if (filteredCat && filteredCat !== "hamısı") {
            filtered = filtered.filter(cat => cat.category === filteredCat)

        }
        setReadyData(filtered)

    }, [data, filteredData, filteredCat])

  const giveMeFive = (par) => {
  const findLength = Array.isArray(data)
    ? data.filter(item => item.category === par)
    : [];
    
  return findLength.slice(0, 5);
};

const handlerLike = (par)=>{
    const elem = data.find(item=>item.id===par)
    const chekLiked = likeds.find(item=>item.id===elem.id)
    if(chekLiked){
        setLikeds(prev=>prev.filter(item=>item.id !==elem.id))
    }
    else {
        setLikeds(prev=>[...prev,{...elem}])
    }
}


    return (
        <CategoryContext.Provider value={{ readyData, setFilteredData, filteredCat, setFilteredCat,giveMeFive, handlerLike,likeds }}>
            {children}
        </CategoryContext.Provider>
    )
}