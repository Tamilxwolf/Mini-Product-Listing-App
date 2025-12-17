import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext.jsx";
import { assets } from "../assets/assets.js";
import Title from "../components/Title.jsx";
import ProductItem from "../components/ProductItem.jsx";
import ProductItem from "../components/Productitem.jsx";


const Collection = () => {
  const { products, search, showsearch } = useContext(ShopContext);
  const [showfilter, setshowfilter] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubcategory] = useState([]);
  const [sorttypes, setSorttypes] = useState("relavent");


  useEffect(() => {
    setFilteredProducts(products);
  },[]);

  const togglecategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const togglesubcategory = (e) => {
    if (subcategory.includes(e.target.value)) {
      setSubcategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubcategory((prev) => [...prev, e.target.value]);
     }
  }


  useEffect(() => {
    setFilteredProducts(products);
  },[]);



  // filtering products based on search query

  const applyfilter = () => {
    let productscopy = products.slice();

    if (showsearch && search) {
      productscopy = productscopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );

      if (category.length > 0) {
        productscopy = productscopy.filter((item) =>
          category.includes(item.category)
        );
      }

      if (subcategory.length > 0) {
        productscopy = productscopy.filter((item) =>
          subcategory.includes(item.subcategory)
        );
      }

      setFilteredProducts(productscopy);
    }
    
  }; // <-- close applyfilter

  const sortProducts = () => {
    let fpcopy = filteredProducts.slice();

    switch (sorttypes) {
      case "low-high":
        setFilteredProducts(fpcopy.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFilteredProducts(fpcopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyfilter();
        break;
    }
  };

  useEffect(() => {
    applyfilter();
  }, [search, showsearch]);

  useEffect(() => {
    sortProducts();
  }, [sorttypes]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter Sidebar */}
      <div className="min-w-60">
        <p onClick={()=>setshowfilter(!showfilter)} className="my-2 text-xl flex items-center cursor-pointer gap-2">FILTERS
            <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showfilter ? 'rotate-90' : ''}`} alt="" />
        </p>
        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showfilter ? '' :'hidden'} sm:block`} >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">


            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Men"} onChange={togglecategory} /> Men
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Women"} onChange={togglecategory} /> Women
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Kids"} onChange={togglecategory} /> kids
            </p>
          </div>
        </div>
        {/* {"/* Subcategory Filter */}

                 <div className={`border border-gray-300 pl-5 py-3 my-5 ${
            showfilter ? '' :'hidden'} sm:block`} >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">


            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"TopWear"} onChange={togglesubcategory} /> TopWear
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"BottomWear"} onChange={togglesubcategory} /> BottomWear
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"winterWear"} onChange={togglesubcategory} /> WinterWear
            </p>
          </div>
        </div>

        {/* right side */}




      </div>

        <div className='flex-1'>

            <div className="flex justify-between text-between,text-base sm:text-2xl mb-4">

                <Title text1={'ALL'} text2={'COLLECTION'}/>

                {/* PRODUCT SORT */}

                <select onChange={(e) => setSorttypes(e.target.value)} className="border border-gray-400 px-3 py-1 rounded-md text-sm outline-none">
                    <option value="relavent">Sort by Relevent</option>
                    <option value="low-high">Price: Low to High</option>
                    <option value="high-low">Price: High to Low</option>
                </select>

            </div>
                {/* map products */}

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 gsp-y-6">

                    {
                     filteredProducts.map((item, index) => (
                         <ProductItem key={index} name={item.name} image={item.image} id={item._id} price={item.price} />
                         


                    ))
                }


                </div>

                    
        </div>
    </div>
  );
};

export default Collection;
