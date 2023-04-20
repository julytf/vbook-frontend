import AuthContext from './AuthContext'
import axiosClient from './axiosClient'

const { createContext, useState, useEffect, useLayoutEffect, useContext } = require('react')

const CartContext = createContext({})

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([])
  // console.log('cart', cart)
  const { user } = useContext(AuthContext)

  useEffect(() => {
    axiosClient.get('/cart').then((rs) => setCart(rs.data.data.cart))
  }, [user])

  async function addItem(cartItem) {
    const bookId = cartItem.book._id || cartItem.book
    const index = cart.findIndex((item) => item.book._id === bookId)
    console.log(cartItem, index)

    if (index != -1) {
      // TODO:
      // return console.log('error: dup item!')

      cart[index].quantity += cartItem.quantity
      setCart([...cart])
      return
    }
    cart.push(cartItem)
    setCart([...cart])
  }

  async function updateItem(cartItem) {
    console.log(cartItem);
    const bookId = cartItem.book._id || cartItem.book
    const index = cart.findIndex((item) => item.book._id === bookId)
    // console.log(cartItem, index)

    if (index == -1) {
      return
    }
    cart[index].quantity = cartItem.quantity
    setCart([...cart])
  }

  async function deleteItem(bookId) {
    const index = cart.findIndex((item) => item.book._id === bookId)
    if (index == -1) return
    cart[index].splice(index, 1)
    setCart([...cart])
  }

  async function sync() {
    let minimizedCart = cart.map((item) => ({
      quantity: item.quantity,
      book: item.book._id,
    }))
    return axiosClient.patch('/cart', { cart: minimizedCart })
  }

  const totalCost = cart.reduce((prev, cur) => prev + +cur.quantity * +cur.book.price, 0)

  const totalQuantity = cart.reduce((prev, cur) => prev + +cur.quantity, 0)

  const contextValue = {
    cart,
    totalQuantity,
    totalCost,
    addItem,
    updateItem,
    deleteItem,
    sync,
  }

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
}

export default CartContext
