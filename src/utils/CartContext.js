import AuthContext from './AuthContext'
import axiosClient from './axiosClient'

const { createContext, useState, useEffect, useLayoutEffect, useContext } = require('react')

const CartContext = createContext({})

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([])
  console.log('cart', cart)

  const { user } = useContext(AuthContext)

  useEffect(() => {
    axiosClient.get('/cart').then((rs) => setCart(rs.data.data.cart))
  }, [user])

  function updateItem(CartItem, options) {
    const replace = options?.replace || false
    const index = cart.findIndex((item) => item.book._id === CartItem.book._id)
    console.log(CartItem, index);
    if (index != null) {
      if (replace) {
        cart[index].quantity = CartItem.quantity
      } else {
        cart[index].quantity += CartItem.quantity
      }
    } else {
      cart.push(CartItem)
    }
    console.log("here");
    setCart(cart)
  }
  function deleteItem() {}

  const contextValue = {
    cart,
    updateItem,
    deleteItem,
  }

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
}

export default CartContext
