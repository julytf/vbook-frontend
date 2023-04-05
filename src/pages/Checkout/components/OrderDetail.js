function OrderDetail({item}) {
  return (
    <tr className='cart_item'>
      <td className='product-name'>
        {item.book.name.substring(0, 25).concat('...') }&nbsp; <strong className='product-quantity'>×&nbsp;1</strong>{' '}
      </td>
      <td className='product-total'>
        <span className='woocommerce-Price-amount amount'>
          <bdi>
            {/* <span className='woocommerce-Price-currencySymbol'>$</span> */}
            {item.book.price.toLocaleString()}
          </bdi>
        </span>{' '}
      </td>
    </tr>
  )
}

export default OrderDetail