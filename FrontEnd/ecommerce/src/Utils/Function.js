import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const renderItem = (itemList, Component, addClass) => {
    const renderedItems = [];
    for (let i = 0; i < itemList.length; ++i) {
        renderedItems.push(<Component key={itemList[i].id} {...itemList[i]} className = {addClass}/>);
    }
    return renderedItems;
}
export const useScrollTop = ()=> {
    const pathname = useLocation();

    useEffect(()=>{
        window.scrollTo(0,0)
    }, [pathname]);
}
