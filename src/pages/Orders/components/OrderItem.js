function OrderItem({ item }) {
  return (
    <tr key={item.book._id} className='cart_item'>
      <td>
        <div className='media'>
          <div className='media-body'>
            <img src={item.book?.images?.[0].file} />
            <p>{item.book.name}</p>
          </div>
        </div>
      </td>
      <td>
        <h5>{item.book.price?.toLocaleString()}</h5>
      </td>
      <td>
        <div className='product_count'>
          <div className='input-group input-group-sm mb-3'>{item.quantity}</div>
        </div>
      </td>
      <td>
        <h5>{(item.book.price * +item.quantity).toLocaleString()}</h5>
      </td>
    </tr>
  )
}

export default OrderItem
