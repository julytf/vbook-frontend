import AuthContext from './AuthContext'
import axiosClient from './axiosClient'

const { createContext, useState, useEffect, useLayoutEffect, useContext } = require('react')

const GlobalContext = createContext({})

export function GlobalContextProvider({ children }) {
  const { user } = useContext(AuthContext)

  const [cart, setCart] = useState([])
  console.log('cart', cart);

  useEffect(() => {
    axiosClient.get('/cart').then((rs) => setCart(rs.data.data.cart))
  }, [user])

  const totalCost = cart.reduce((prev, cur) => prev + +cur.quantity * +cur.book.price, 0)
  const totalQuantity = cart.reduce((prev, cur) => prev + +cur.quantity, 0)

  async function addItem(cartItem) {
    const bookId = cartItem.book._id || cartItem.book
    const index = cart.findIndex((item) => item.book._id === bookId)
    // console.log(cartItem, index)

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
    console.log(cartItem)
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

  async function syncCart() {
    let minimizedCart = cart.map((item) => ({
      quantity: item.quantity,
      book: item.book._id,
    }))
    return axiosClient.patch('/cart', { cart: minimizedCart })
  }

  const cartContext = {
    cart,
    totalCost,
    totalQuantity,
    addItem,
    updateItem,
    deleteItem,
    syncCart,
  }

  useEffect(() => {
    axiosClient.get('/saves').then((rs) => setSaves(rs.data.data.docs))
  }, [user])

  const [saves, setSaves] = useState([])

  const quantity = saves.length

  function isSaved(bookId) {
    return !!saves.find((save) => save._id == bookId)
  }
  async function toggleSave(book) {
    if (!isSaved(book._id)) {
      save(book)
    } else {
      unsave(book)
    }
  }
  async function save(book) {
    axiosClient.get(`/saves/${book._id}/save`).then(() => {
      saves.push(book)
      setSaves([...saves])
    })
  }
  async function unsave(book) {
    axiosClient.get(`/saves/${book._id}/unsave`).then(() => {
      saves.splice(saves.findIndex((save) => save._id == book._id),1)
      setSaves([...saves])
    })
  }

  const savesContext = {
    saves,
    quantity,
    isSaved,
    toggleSave,
  }

  const contextValue = {
    cart: cartContext,
    saves: savesContext,
  }

  return <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>
}

export default GlobalContext
