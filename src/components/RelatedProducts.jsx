import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Productitem from './Productitem'

const RelatedProducts = ({ category, subcategory }) => {

  const { products } = useContext(ShopContext);

  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products && products.length > 0 && category && subcategory) {
      let productsCopy = products.slice();

      productsCopy = productsCopy.filter((item) => item.category === category);
      productsCopy = productsCopy.filter((item) => item.subcategory === subcategory);

      const sliced = productsCopy.slice(0, 5);
      setRelated(sliced);
      console.log('Related products:', sliced);
    } else {
      setRelated([]);
    }
  }, [products, category, subcategory])


  return (
    <div className='my-24'>

        <div className='text-center text-3xl py-2'>

            <title text1={'RELATED'} text2={'PRODUCT'} />

        </div>

       
       <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {related.map((item,index) => (
                <Productitem key={item._id || index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))
            }
        </div>



      {/* <h2 className='text-xl font-medium mb-4'>Related Products</h2>
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
        {related.length > 0 ? (
          related.map((p) => (
            <Productitem key={p._id} id={p._id} image={p.image} name={p.name} price={p.price} />
          ))
        ) : (
          <p className='text-gray-500'>No related products found.</p>
        )}
      </div>*/}
    </div> 
  )
}

export default RelatedProducts