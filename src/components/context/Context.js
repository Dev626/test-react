import { createContext, useEffect, useState } from "react"

export const appContext = createContext({})

function Context(props) {
    const [listShopProduct, setListShopProduct] = useState([])

    function addProduct(product) {
      listShopProduct.push(product)
      setListShopProduct([...listShopProduct])
    }
    
    function removeProduct(id) {
        console.log('id:', id)
    }

    return (
      <appContext.Provider value={{ listShopProduct, addProduct, removeProduct }} >
        {props.children}
      </appContext.Provider>
    )
}

export default Context;
