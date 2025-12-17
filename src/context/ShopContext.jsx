import { createContext, useState } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const shopContextProvider = (props) => {

    const currency ='₹';
    const delivery_fee = 10;
    const [search,setsearch] = useState('');
    const [showsearch,setshowsearch] = useState(false);

    const value = {

        products,currency,delivery_fee,
        search,setsearch,
        showsearch,setshowsearch

    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default shopContextProvider;